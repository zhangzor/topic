import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// css初始化
import "@/assets/css/result.css"
// rem适配方案基准
import 'amfe-flexible'

createApp(App).use(store).use(router).use(Vant).use(Vant.Lazyload).mount('#app')
