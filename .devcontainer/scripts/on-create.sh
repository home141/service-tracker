#!/usr/bin/env bash

# Install Vite+
curl -fsSL https://vite.plus | bash
echo ". ~/.vite-plus/env" >> ~/.bashrc
. ~/.vite-plus/env
vp env setup
