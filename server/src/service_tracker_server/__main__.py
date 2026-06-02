"""Run the service tracker server."""

from granian import Granian
from granian.constants import Interfaces


def main() -> None:
    """Run the service tracker server."""
    Granian(
        "service_tracker_server:app",
        "127.0.0.1",
        62001,
        interface=Interfaces.ASGI,
        reload=True,
    ).serve()


if __name__ == "__main__":
    main()
