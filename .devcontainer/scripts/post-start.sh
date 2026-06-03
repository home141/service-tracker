#!/usr/bin/env bash

# Install Python dependencies
uv sync

# Install Node.js dependencies
bun install

# Start the server
uv run service-tracker-server --dev &
