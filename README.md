# exnight.github.io [![Node.js CI](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml/badge.svg)](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml)

## Introduction

An informal profile built with React.js, Typescript, Tailwind CSS

This is created for practicing my limited frontend (and poor visual design) skills, as well as for documenting my progress in software engineering

## Usage

The project works with Node version 12 or above

### Installation

```zsh
$ cd project-directory
$ npm ci
```

### Development

```zsh
$ npm start
```

### Build Locally

```zsh
$ npm run build
```

### Deploy to GitHub pages

The project makes use of the **master** branch as the deployment branch (instead of **gh-page**), please set another branch as the

- default repository branch, or
- deployment branch

```zsh
$ npm run deploy
```

The npm script will build the project locally (_important_: on your current branch) then publish the built artifacts to the specified deployment branch
