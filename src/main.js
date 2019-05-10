import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/css/style.css'
import scroll from 'vue-seamless-scroll'


Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(scroll)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')