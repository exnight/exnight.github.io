#!/bin/sh

if [ -d ./.devcontainer/config ]; then
    mkdir ~/.config -p
    cp -r ./.devcontainer/config/* ~/.config
fi

sudo chown node node_modules
npm install && npm run postinstall
