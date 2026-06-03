#!/usr/bin/env bash

git config set gpg.ssh.program ssh-keygen

# Install Python
uv python install
