# Personal Website [![Node.js CI](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml/badge.svg)](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml)

This is a personal website built with Astro.js, TypeScript, and Tailwind CSS.

## Getting Started

The project works with Node version 24 or above.

### Local Developement

The project utilizes DEV containers for consistent developement environments. The configuration assumes VS Code as the code editor.

#### Set Up DEV Containers

The `devcontainer.json` works with Podman. You may want to set up local SSH agent to share Git credentials following [this guide](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials#_using-ssh-keys).

```sh
ssh -T git@github.com # Test your SSH connection to GitHub, or other remote repos
ssh-add -L # List available SSH key(s)
ssh-add $HOME/.ssh/YOUR_SSH_PRIVATE_KEY # Add a new SSH key
```

Note that SSH keys with a passphrase [may not work](https://code.visualstudio.com/docs/devcontainers/containers#_known-limitations).

#### Coding

```bash
npm ci # Install dependencies

npm run dev # Start a local DEV server

npm run build # Generate production optimized code and export as static HTML
```

### Deployment

The project deploys to both GitHub pages and Cloudflare pages.

#### GitHub Pages

Currently paused due to site revamp work. Refer to GitHub workflow files for more details.

The project uses the **master** branch for deployment instead of the **gh-page** branch.

#### Cloudflare Pages

TBD
