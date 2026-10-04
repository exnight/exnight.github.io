# Personal Website [![Node.js CI](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml/badge.svg)](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml)

This is a personal website built with Astro.js, TypeScript, and Tailwind CSS.

## Approved design and migration

**Drafting Notebook is approved for migration; production still uses Open Field Folio.**

- [Product context](PRODUCT.md)
- [Approved visual system](DESIGN.md)
- [Production migration hand-off and new-session prompt](docs/design/MIGRATION.md)
- [Approved preview references](docs/design/reference/README.md)
- [Historical Folio specification](docs/design/archive/open-field-folio.md) (not migration authority)

Page-specific direction contracts live in `.impeccable/surfaces/`; `.impeccable/design.json` carries visual-system extensions. These are durable, tracked documentation. Generated Impeccable reviews/state remain ignored.

Prototype previews are available in dev at `/prototypes/notebook-v2/` and `/prototypes/notebook-v2/writing/`; normal production builds exclude them. Read the hand-off before porting.

## Getting Started

The project works with Node version 24 or above.

### Local Developement

The project utilizes DEV containers for consistent developement environments. The configuration assumes VS Code as the code editor.

#### Set Up DEV Containers

You may want to set up local SSH agent to share Git credentials following [this guide](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials#_using-ssh-keys).

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
