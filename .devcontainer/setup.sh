#!/bin/sh

mkdir ~/.config -p
cp -r ./.devcontainer/config/* ~/.config

# Disable telemetry
echo
npx next telemetry disable
