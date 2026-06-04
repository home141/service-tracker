"""Run the service tracker server."""

from argparse import ArgumentParser
from pathlib import Path

from granian import Granian
from granian.constants import Interfaces


def main() -> None:
    """Run the service tracker server."""
    parser = ArgumentParser()
    parser.add_argument("--dev", action="store_true")
    args = parser.parse_args()

    Granian(
        "service_tracker_server:app",
        "0.0.0.0",
        62001,
        interface=Interfaces.ASGI,
        reload=args.dev,
        reload_paths=[Path(__file__).parent],
    ).serve()


if __name__ == "__main__":
    main()
