# Build Stage

FROM python:3.14.6-slim AS builder

COPY --from=ghcr.io/astral-sh/uv:0.11.27 /uv /uvx /bin/

WORKDIR /workspace

COPY . /workspace
RUN uv sync --frozen -n --no-dev

# Runtime Stage

FROM python:3.14.6-slim

COPY --from=builder /workspace/.venv /workspace/.venv
ENV PATH="/workspace/.venv/bin:$PATH"

COPY . /workspace

WORKDIR /workspace

CMD ["service-tracker-server"]
