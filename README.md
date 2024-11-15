# exnight.github.io [![Node.js CI](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml/badge.svg)](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml)

## Introduction

This is a personal website built with Next.js, React.js, TypeScript, and Tailwind CSS.

## Usage

The project works with Node version 22 or above.

### Local Developement

The project now utilizes DEV containers for consistent developement environments. The configuration assumes VS Code as the code editor.

#### Set Up DEV Containers

The `devcontainer.json` works with Podman. You may want to set up local SSH agent to share Git credentials following [this guide](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials#_using-ssh-keys).

```sh
ssh-add $HOME/.ssh/YOUR_SSH_PRIVATE_KEY
```

Note that SSH keys with a passphrase [may not work](https://code.visualstudio.com/docs/devcontainers/containers#_known-limitations).

#### Coding

```bash
npm ci # Install dependencies

npm run dev # Start a local DEV server

npm run build # Generate production optimized code and export as static HTML

npm start # Start a local Next.js server
```

### Deploy to GitHub pages

The project uses the **master** branch for deployment instead of the **gh-page** branch.

I build and deploy to GitHub pages with GitHub actions. You may refer to the workflow files for more details.
