# mcparser-web

[简体中文](./README.md) | *English*

> [!NOTE]
> About 80-90% of this project was written with AI assistance (because I don’t really know Vue, aha) <br>
> English README used Microsoft Translator to translate.

This repository contains the official code for MCParser's website, built using Vue.js and MDUI 2. Everybody is welcome to open issues and PRs!

## Features

- Get download counts, latest version, and last updater data via the GitHub API
- Uses MDUI 2 for a clean yet elegant interface
- Supports high-speed downloads of release files using `gh-proxy`
- Shows a "Thank you for downloading" message through `mdui-snackbar`

## Dependencies

| Package | Latest Version | Description |
| :-----: | :-----: | :-----: |
| [`vue`](https://www.npmjs.com/package/vue) | ![latest](https://img.shields.io/npm/v/vue) | Progressive JavaScript framework |
| [`vue-router`](https://www.npmjs.com/package/vue-router) | ![latest](https://img.shields.io/npm/v/vue-router) | Officially recommended routing tool for Vue.js |
| [`pinia`](https://www.npmjs.com/package/pinia) | ![latest](https://img.shields.io/npm/v/pinia) | Intuitive, type safe and flexible Store for Vue |
| [`mdui`](https://www.npmjs.com/package/mdui) | ![latest](https://img.shields.io/npm/v/mdui) | Material Design 3(Material You) UI components using Web Components. |
| [`@fortawesome/fontawesome-svg-core`](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core) | ![latest](https://img.shields.io/npm/v/@fortawesome/fontawesome-svg-core) | Core of Font Awesome SVG |
| [`@fortawesome/free-brands-svg-icons`](https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons) | ![latest](https://img.shields.io/npm/v/@fortawesome/free-brands-svg-icons) | Font Awesome brand icons |
| [`@fortawesome/free-solid-svg-icons`](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons) | ![latest](https://img.shields.io/npm/v/@fortawesome/free-solid-svg-icons) | Font Awesome solid icons |
| [`@fortawesome/vue-fontawesome`](https://www.npmjs.com/package/@fortawesome/vue-fontawesome) | ![latest](https://img.shields.io/npm/v/@fortawesome/vue-fontawesome) | Font Awesome Vue component |

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
