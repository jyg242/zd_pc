import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue';
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import Load from './components/Loading/Loading.vue'
Vue.use(Router)

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/load',
            name: 'load',
            component: Load
        },

        {
            path: '/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
router.beforeEach((to, from, next) => {
    Nprogress.start()
    next()
})
router.afterEach((next, from, to) => {
    Nprogress.done()
})
export default router