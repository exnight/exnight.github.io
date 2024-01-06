# exnight.github.io [![Node.js CI](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml/badge.svg)](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml)

## Introduction

An informal profile built with Next.js, React.js, Typescript, Tailwind CSS

This is created for practicing my limited frontend (and poor visual design) skills, as well as for documenting my progress in software engineering

## Usage

The project works with Node version 20 or above

### Local Developement

```bash
npm ci # Install dependencies

npm run dev # Start a local DEV server

npm run build # Generate production optimized code and export as static HTML

npm start # Start a local Next.js server
```

### Deploy to GitHub pages

The project makes use of the **master** branch as the deployment branch (instead of **gh-page**), please set another branch as the

- default repository branch, or
- deployment branch

The project triggers deployments via GitHub actions, please refer to the workflow files
