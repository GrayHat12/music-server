import io
import json
from pathlib import Path
from mutagen._file import File as MutagenFile
from mutagen.id3._specs import ID3TimeStamp
from mutagen.id3 import ID3


def old_load_song_metadata(file_source: io.BytesIO):
    if isinstance(file_source, bytes):
        file_source = io.BytesIO(file_source)

    # Mutagen extracts tags and the audio stream
    audio = MutagenFile(file_source)
    if audio is None:
        raise ValueError("Unsupported audio format")

    # Handle the buffer
    if hasattr(file_source, 'getvalue'):
        buffer = file_source.getvalue()
    elif isinstance(file_source, (str, Path)):
        buffer = Path(file_source).read_bytes()
    else:
        file_source.seek(0)
        buffer = file_source.read()

    # Default metadata extraction (mimicking your Rust map)
    # Mutagen uses different keys for different formats; EasyID3/EasyMP4 helps normalize.
    tags = {k: v[0] if isinstance(
        v, list) else v for k, v in audio.tags.items()} if audio.tags else {}

    # Logic: First artist is main, others are features
    raw_artist = audio.get("artist", ["<unknown>"])[0]
    artist_list = [a.strip() for a in raw_artist.split(",")]
    main_artist = artist_list[0] if artist_list else "<unknown>"
    features = artist_list[1:]

    # Extract Artwork
    art_buffer = None
    if isinstance(audio, ID3):  # MP3
        apic = audio.getall("APIC")
        if apic:
            art_buffer = apic[0].data
    elif "covr" in audio:  # MP4
        art_buffer = audio["covr"][0]
    elif hasattr(audio, "pictures") and audio.pictures:  # FLAC/OGG
        art_buffer = audio.pictures[0].data

    for key, value in tags.items():
        print(f"{key=} {type(value)=}")

    return {
        "title": audio.get("title", [Path(file_source if isinstance(file_source, str) else "unknown").stem])[0],
        "artist": main_artist,
        "features": features,
        "album": audio.get("album", [None])[0],
        "genre": audio.get("genre", [None])[0],
        "release": str(audio.get("date", [None])[0]) if audio.get("date") else None,
        "trackno": int(str(audio.get("tracknumber", ["0"])[0]).split("/")[0]) or None,
        "buffer": buffer,
        "art_buffer": art_buffer,
        "metatags": json.dumps(tags)  # Store all raw tags as JSON
    }


class MutagenEncoder(json.JSONEncoder):
    """Custom JSON encoder to safely serialize Mutagen tag objects."""

    def default(self, o):
        if type(o).__name__ == 'APIC' or type(o).__name__ == 'Picture':
            return f"<Image Data: {getattr(o, 'mime', 'unknown')}>"
        if hasattr(o, 'text'):
            return o.text[0] if o.text else ""
        if hasattr(o, 'pprint'):
            return o.pprint()
        return super().default(o)


def load_song_metadata(file_source: io.BytesIO):
    # 1. Standardize the input buffer securely
    if isinstance(file_source, bytes):
        file_source = io.BytesIO(file_source)

    file_source.seek(0)
    buffer = file_source.read()
    file_source.seek(0)  # Reset for mutagen
    audio = MutagenFile(file_source)
    filename = "unknown"

    if audio is None or audio.tags is None:
        raise ValueError("Unsupported audio format or no tags found")

    tags = dict(audio.tags)

    # 2. Helper to extract text across different formats (ID3 vs Vorbis/MP4)
    def get_tag(keys, default=None):
        for key in keys:
            if key in tags:
                val = tags[key]
                if isinstance(val, list):
                    val = val[0]
                if hasattr(val, 'text'):
                    print(f"{key=} {val=} {val.text=} {type(val.text)=}")
                    if isinstance(val.text, str):
                        return val.text
                    if isinstance(val.text, list):
                        return val.text[0]
                return str(val)
        return default

    # Extract standard fields using cross-format keys
    raw_artist = get_tag(["artist", "TPE1", "\xa9ART"], "<unknown>")
    artist_list = [a.strip() for a in raw_artist.split(",")]
    main_artist = artist_list[0] if artist_list else "<unknown>"
    features = artist_list[1:]

    track_str = get_tag(["tracknumber", "TRCK", "trkn"], "0")
    trackno = int(str(track_str).split(
        "/")[0]) if str(track_str).split("/")[0].isdigit() else None

    # 3. Extract Artwork safely
    art_buffer = None
    if hasattr(audio.tags, "getall") and audio.tags.getall("APIC"):  # MP3 / ID3
        art_buffer = audio.tags.getall("APIC")[0].data
    elif "covr" in tags:  # MP4 / M4A
        art_buffer = tags["covr"][0] if isinstance(
            tags["covr"], list) else tags["covr"]
    elif hasattr(audio, "pictures") and audio.pictures:  # FLAC / OGG
        art_buffer = audio.pictures[0].data

    release = get_tag(["date", "TDRC", "TYER", "\xa9day"])
    print(f"{release=} {type(release)=}")

    try:
        if isinstance(release, ID3TimeStamp):
            release = release.get_text()

        if isinstance(release, str):
            release = int(release)
        if not isinstance(release, int):
            release = None
    except:
        release = None

    # 4. Return clean, JSON-serializable dictionary
    return {
        "title": get_tag(["title", "TIT2", "\xa9nam"], filename),
        "artist": main_artist,
        "features": features,
        "album": get_tag(["album", "TALB", "\xa9alb"]),
        "genre": get_tag(["genre", "TCON", "\xa9gen"]),
        "release": release,
        "trackno": trackno,
        "buffer": buffer,
        "art_buffer": art_buffer,
        # Serialize with our custom encoder to handle mutagen classes
        "metatags": json.dumps(tags, cls=MutagenEncoder)
    }
