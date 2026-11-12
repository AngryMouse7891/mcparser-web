# mcparser-web

*简体中文* | [English](./README_en.md)

> [!INFO]
> 此项目八九成使用AI辅助编写（因为我不懂Vue awa）

该仓库为MCParser的官网代码，使用Vue.js+MDUI 2实现，欢迎大家来提issue和PR

## 使用依赖

| 包名 | 最新版本 | 描述 |
| :-----: | :-----: | :-----: |
| [`vue`](https://www.npmjs.com/package/vue) | ![latest](https://img.shields.io/npm/v/vue) | 渐进式 JavaScript 框架 |
| [`vue-router`](https://www.npmjs.com/package/vue-router) | ![latest](https://img.shields.io/npm/v/vue-router) | Vue.js官方推荐的路由管理工具 |
| [`pinia`](https://www.npmjs.com/package/pinia) | ![latest](https://img.shields.io/npm/v/pinia) | 符合直觉的 Vue.js 状态管理库 |
| [`mdui`](https://www.npmjs.com/package/mdui) | ![latest](https://img.shields.io/npm/v/mdui) | 使用Web Components实现，遵循Material You设计规范的Web前端组件库 |
| [`@fortawesome/fontawesome-svg-core`](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core) | ![latest](https://img.shields.io/npm/v/@fortawesome/fontawesome-svg-core) | Font Awesome SVG核心 |
| [`@fortawesome/free-brands-svg-icons`](https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons) | ![latest](https://img.shields.io/npm/v/@fortawesome/free-brands-svg-icons) | Font Awesome 品牌图标 |
| [`@fortawesome/free-solid-svg-icons`](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons) | ![latest](https://img.shields.io/npm/v/@fortawesome/free-solid-svg-icons) | Font Awesome 实心图标 |
| [`@fortawesome/vue-fontawesome`](https://www.npmjs.com/package/@fortawesome/vue-fontawesome) | ![latest](https://img.shields.io/npm/v/@fortawesome/vue-fontawesome) | Font Awesome Vue 组件 |

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/)   [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur）。

## 推荐的浏览器设置

- 基于 Chromium 的浏览器（Chrome、Edge、Brave 等）：
- [Vue.js 开发者工具](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [在 Chrome DevTools 中启用自定义对象格式器](http://bit.ly/object-formatters)
- Firefox：
- [Vue.js 开发者工具](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [在 Firefox DevTools 中启用自定义对象格式器](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## TypeScript 对 `.vue` 导入的类型支持

TypeScript 默认无法处理 `.vue` 导入的类型信息，因此我们用 `vue-tsc` 替换 `tsc` CLI 来进行类型检查。在编辑器中，我们需要 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 来让 TypeScript 语言服务识别 `.vue` 类型。

## 自定义配置

请参考 [Vite 配置参考](https://vite.dev/config/)。

## 项目设置

```sh
npm install
```

### 开发环境编译并热重载

```sh
npm run dev
```

### 类型检查、编译并压缩生产环境代码

```sh
npm run build
```

### 使用 [Vitest](https://vitest.dev/) 运行单元测试

```sh
npm run test:unit
```

### 使用 [Playwright](https://playwright.dev) 运行端到端测试

```sh
# 首次运行时安装浏览器
npx playwright install

# 在 CI 上测试时，必须先构建项目
npm run build

# 运行端到端测试
npm run test:e2e
# 仅运行 Chromium 测试
npm run test:e2e -- --project=chromium
# 运行指定文件的测试
npm run test:e2e -- tests/example.spec.ts
# 以调试模式运行测试
npm run test:e2e -- --debug
```

### 使用 [ESLint](https://eslint.org/) 检查代码

```sh
npm run lint
```
