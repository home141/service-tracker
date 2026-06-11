FROM python:3.14.6-slim

# Install Node.js dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libatomic1 \
    && rm -rf /var/lib/apt/lists/*

# Install uv
COPY --from=ghcr.io/astral-sh/uv:0.11.20 /uv /uvx /bin/

# Install Node.js
COPY --from=node:26.3.0-slim /usr/local/ /usr/local/

# Install Bun
COPY --from=oven/bun:1.3.14-distroless /usr/local/bin/bun /usr/local/bin/
RUN ln -s /usr/local/bin/bun /usr/local/bin/bunx

# Install Hadolint
COPY --from=hadolint/hadolint:v2.14.0 /bin/hadolint /bin/
