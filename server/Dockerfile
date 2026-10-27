# Build Stage

FROM python:3.15.2-slim AS builder

COPY --from=ghcr.io/astral-sh/uv:0.13.6 /uv /uvx /bin/

WORKDIR /workspace

COPY . /workspace
RUN uv sync --frozen -n --no-dev

# Runtime Stage

FROM python:3.15.2-slim

COPY --from=builder /workspace/.venv /workspace/.venv
ENV PATH="/workspace/.venv/bin:$PATH"

COPY . /workspace

WORKDIR /workspace

CMD ["service-tracker-server"]
