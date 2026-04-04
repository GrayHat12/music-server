from app.models.models import Images
from app.models.response_schema import DeletedResponse
from fastapi import HTTPException, APIRouter, UploadFile, Depends, Path
from fastapi.responses import StreamingResponse
from app.middleware import validate_image_file, get_db
from sqlalchemy.orm import Session
from app.database.database import get_or_create
from app.config import Tags
from io import BytesIO

router = APIRouter(prefix="/image", tags=[Tags.image])
# db = SessionLocal()


@router.get("/{id}", response_class=StreamingResponse)
def get_image(id: int = Path(...), db: Session = Depends(get_db)):
    image = db.get(Images, id)
    if not image:
        raise HTTPException(404)
    return StreamingResponse(BytesIO(image.buffer), media_type="image/jpeg")


@router.post("", response_model=int)
async def add_image(file: UploadFile = Depends(validate_image_file), db: Session = Depends(get_db)):
    image_exists = db.query(Images).filter(Images.buffer == await file.read()).first()
    if image_exists is not None:
        return image_exists.id
    await file.seek(0)

    image_obj = get_or_create(
        db, Images, buffer=await file.read())
    db.add(image_obj)
    db.flush()
    db.commit()
    return image_obj.id


@router.delete("/{id}", response_model=DeletedResponse)
def delete_image(id: int = Path(...), db: Session = Depends(get_db)):
    image = db.get(Images, id)
    if not image:
        raise HTTPException(404)
    db.delete(image)
    db.commit()
    return DeletedResponse()
