#!/bin/sh

mkdir ~/.config -p
cp -r ./.devcontainer/config/* ~/.config

sudo chown node node_modules
npm install && npm run postinstall
