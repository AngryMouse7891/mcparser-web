# mcparser-web

MCParser的官网代码

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
