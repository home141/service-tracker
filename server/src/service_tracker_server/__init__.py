"""The server package of the service tracker."""

from fastapi import FastAPI

app = FastAPI()


@app.get("/test")
async def test() -> dict[str, str]:
    """A test endpoint."""
    return {"message": "Hello, World!"}
