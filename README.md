# Personal Website [![Node.js CI](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml/badge.svg)](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml)

This is a personal website built with Astro.js, TypeScript, and Tailwind CSS.

## Approved design and migration

**Drafting Notebook is implemented in production.**

- [Product context](PRODUCT.md)
- [Approved visual system](DESIGN.md)
- [Completed migration and protected contracts](docs/design/MIGRATION.md)
- [MDX component authoring](docs/design/AUTHORING.md)
- [Production verification and remaining limits](docs/design/VERIFICATION.md)
- [Approved preview references](docs/design/reference/README.md)
- [Historical Folio specification](docs/design/archive/open-field-folio.md) (not migration authority)

Page-specific direction contracts live in `.impeccable/surfaces/`; `.impeccable/design.json` carries visual-system extensions. These are durable, tracked documentation. Generated Impeccable reviews/state remain ignored.

Prototype routes/tooling have been removed after production verification. Approved reference captures remain in `docs/design/reference/`; test-only acceptance fixtures live in `test/fixtures/` and are never published.

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

npm run test # Component and behavior regressions

npm run build # Static production build plus route/content invariant checks

npm run test:browser # Explicit Chromium acceptance of dist; no second dev server
```

### Deployment

The project deploys to both GitHub pages and Cloudflare pages.

#### GitHub Pages

Currently paused due to site revamp work. Refer to GitHub workflow files for more details.

The project uses the **master** branch for deployment instead of the **gh-page** branch.

#### Cloudflare Pages

TBD
