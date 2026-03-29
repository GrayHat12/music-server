from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session, DeclarativeBase
from sqlalchemy.engine import Engine
from sqlalchemy import event, select
from typing import cast

_DATABASE_PATH: str | None = None
_Engine: Engine | None = None


def get_database_path():
    return _DATABASE_PATH


def set_database_path(path: str):
    global _DATABASE_PATH, _Engine
    _DATABASE_PATH = path
    try:
        one_time_dispose()  # dispose old one

        # create new engine
        new_engine(get_sqlalchemy_database_url(path))

        one_time_setup()  # setup new one
    except:
        _DATABASE_PATH = None
        _Engine = None


def get_sqlalchemy_database_url(path: str):
    return f"sqlite:///{path}"


def new_engine(url: str):
    global _Engine
    _Engine = create_engine(url, connect_args={"check_same_thread": False})
    one_time_setup()
    return _Engine


def get_engine():
    return _Engine

# engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={
#                        "check_same_thread": False})


@event.listens_for(Engine, "connect")
def set_sqlite_pragma(dbapi_connection, connection_record):
    cursor = dbapi_connection.cursor()
    cursor.execute("PRAGMA foreign_keys=ON")
    cursor.close()


def get_session_local():
    return sessionmaker(autocommit=False, autoflush=False, bind=get_engine())


Base = declarative_base()


def get_or_create[T: DeclarativeBase](session: Session, model: type[T], **kwargs):
    instance = session.scalars(select(model).filter_by(**kwargs)).first()
    if not instance:
        instance = model(**kwargs)
        session.add(instance)
        session.flush()  # Get the ID without committing the whole transaction
    return cast(T, instance)


def one_time_setup():
    if engine := get_engine():
        Base.metadata.create_all(bind=engine)


def one_time_dispose():
    if engine := get_engine():
        engine.dispose()
