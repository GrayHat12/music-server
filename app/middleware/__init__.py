from fastapi import HTTPException, UploadFile, status, File
import magic
import io
from PIL import Image
from app.database.database import get_session_local, get_engine


async def validate_audio_file(file: UploadFile = File(..., json_schema_extra={"type": "string", "format": "binary"})):
    # Define allowed audio MIME types
    ALLOWED_AUDIO_TYPES = {
        'audio/wav',
        'audio/mpeg',  # MP3
        'audio/ogg',
        'audio/flac'
        'audio/aac',
        'audio/opus',
        'audio/webm',
        'audio/x-aiff',
        'audio/midi',
        'audio/x-midi',
        'audio/mp4',
        'audio/AMR',
        'audio/flac',
        'audio/basic',
        'audio/x-m4a'
    }

    # Read a small chunk of the file to determine its type
    # The file is a SpooledTemporaryFile, so we can read from it
    # content = await file.read(2048)
    # Rewind the file to the beginning so it can be read later
    # await file.seek(0)

    # Use python-magic to get the actual MIME type
    # mime_type = magic.from_buffer(content, mime=True)
    mime_type = file.content_type

    if mime_type not in ALLOWED_AUDIO_TYPES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid file type: {mime_type}. Only audio files are allowed."
        )

    return file


async def validate_image_file(file: UploadFile = File(...)):
    # Define allowed audio MIME types
    ALLOWED_AUDIO_TYPES = {
        "image/jpeg", "image/png"
    }

    if file.content_type not in ALLOWED_AUDIO_TYPES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid file type: {file.content_type}. Only image files are allowed."
        )

    try:
        content = await file.read()
        image = Image.open(io.BytesIO(content))
        image.verify()
        await file.seek(0)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=f"File is not a valid image or an error occurred"
        )
    return file


def get_db():
    if get_engine() is None:
        raise HTTPException(403, {"msg": "DB path not set"})
    with get_session_local()() as db:
        yield db
