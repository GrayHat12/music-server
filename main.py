from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from contextlib import asynccontextmanager
from app.database.database import one_time_dispose
# from app.graphql.schema import graphql_app
from fastapi.middleware.cors import CORSMiddleware
from app.controllers import router
from app.config import get_metadata_tags


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create tables if they don't exist
    # Base.metadata.create_all(bind=engine)
    # one_time_setup()
    # Additional initialization logic can be added here
    # print("Database connected on startup")
    yield
    one_time_dispose()
    print("Database disconnected on shutdown")

app = FastAPI(
    title="Audio Server",
    lifespan=lifespan,
    openapi_tags=get_metadata_tags()
)

app.mount("/static", StaticFiles(directory="static"), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your specific domain in production
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)

# app.include_router(graphql_app, prefix="/graphql")
app.include_router(router, prefix="/api")
