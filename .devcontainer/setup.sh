#!/bin/sh

# Copy all configuration files
mkdir -p ~/.config
cp -r ./config/* ~/.config

# Install Lazygit
./.devcontainer/install-lazygit.sh

# Disable telemetry
echo
npx next telemetry disable
