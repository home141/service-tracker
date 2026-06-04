#!/usr/bin/env bash

# Install Python dependencies
uv sync

# Install Node.js dependencies
bun install

# Install Git hooks
uv run lefthook install
