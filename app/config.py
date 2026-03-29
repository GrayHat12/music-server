from enum import StrEnum


class Tags(StrEnum):

    album = "Album"
    artist = "Artist"
    genre = "Genre"
    playlist = "Playlist"
    song = "Song"
    image = "Image"
    v1 = "V1"
    db = "Database"
    search = "Search"


def get_metadata_tags():
    return [
        {
            "name": Tags.v1,
            "description": f"{Tags.v1.value} endpoints"
        },
        {
            "name": Tags.db,
            "description": f"{Tags.db.value} management"
        }
    ] + [
        {
            "name": tag,
            "description": f"{tag.value} related endpoints"
        } for tag in Tags if tag not in [Tags.v1, Tags.db]
    ]
