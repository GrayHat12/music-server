from fastapi import APIRouter, Query
from app.database.database import set_database_path
from app.config import Tags
import traceback

router = APIRouter(prefix="/db", tags=[Tags.db])
# db = SessionLocal()


@router.patch("", response_model=bool)
def set_database(path: str = Query(...)):
    try:
        set_database_path(path)
        return True
    except:
        print(traceback.format_exc())
        return False
