FROM mcr.microsoft.com/devcontainers/base:debian

# Install uv
COPY --from=ghcr.io/astral-sh/uv:0.11.16 /uv /uvx /bin/

# Install Bun
COPY --from=oven/bun:1.3.14-distroless /usr/local/bin/bun /bin/
RUN ln -s /bin/bun /bin/bunx

# Install Hadolint
COPY --from=hadolint/hadolint:v2.14.0 /bin/hadolint /bin/
