from fastapi import FastAPI
# from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
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
templates = Jinja2Templates(directory="templates")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your specific domain in production
    allow_methods=["*"],
    allow_headers=["*"],
)

# app.include_router(graphql_app, prefix="/graphql")
app.include_router(router, prefix="/api")


# @app.get("/ui/artists", response_class=HTMLResponse)
# async def artists(request: Request):
#     return templates.TemplateResponse(request, name="artists.html", context={
#         "request": request,
#         "active_page": "artists"
#     })
#     # return templates.TemplateResponse("artists.html", {"request": request, "active_page": "artists"})


# @app.get("/ui/albums", response_class=HTMLResponse)
# async def albums(request: Request):
#     return templates.TemplateResponse(request, name="albums.html", context={"request": request, "active_page": "albums"})
#     # return templates.TemplateResponse("albums.html", {"request": request, "active_page": "albums"})


# @app.get("/ui/playlists", response_class=HTMLResponse)
# async def playlists(request: Request):
#     return templates.TemplateResponse(request, name="playlists.html", context={"request": request, "active_page": "playlists"})
#     # return templates.TemplateResponse("playlists.html", {"request": request, "active_page": "playlists"})
