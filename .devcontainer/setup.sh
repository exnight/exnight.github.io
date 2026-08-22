#!/bin/sh

if [ -d ./.devcontainer/config ]; then
    mkdir ~/.config -p
    cp -r ./.devcontainer/config/* ~/.config
fi

sudo chown node node_modules
npm ci

cp /tmp/.gitconfig-host /home/node/.gitconfig && git config --global --add safe.directory $(pwd)
