import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// 导入需要的图标
import { faUser, faHome, faCoffee, faCloudDownload, faDownload, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// MDUI 2：引入样式 + 组件定义（全量引入最简单）
import 'mdui/mdui.css'
import 'mdui'

import '@/css/font.css'

// 添加到图标库
library.add(faUser, faHome, faCoffee, faGithub, faCloudDownload, faDownload, faStar)

const app = createApp(App)

// 全局注册组件
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
