import Vue from 'vue'
import Router from 'vue-router'
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
                import ('./views/About.vue'),
            children: [{
                    path: '/about/intro',
                    name: 'intro',
                    component: () =>
                        import ('./components/About/Intro/index.vue')
                },
                {
                    path: '/about/history',
                    name: 'history',
                    component: () =>
                        import ('./components/About/History/index.vue')
                }
            ]
        },
        {
            path: '/news',
            name: 'news',
            component: () =>
                import ('./views/News.vue'),
            children: [{
                path: '/news/company',
                name: 'company',
                component: () =>
                    import ('./components/News/Company/index.vue')
            }, {
                path: '/news/media',
                name: 'media',
                component: () =>
                    import ('./components/News/Media/index.vue')

            }, {
                path: '/news/notice',
                name: 'notice',
                component: () =>
                    import ('./components/News/Notice/index.vue')
            }, ]

        }, {

            path: '/detail',
            name: 'detail',
            component: () =>
                import ('./components/Detail/index.vue')
        }, {
            path: '/join',
            name: 'join',
            component: () =>
                import ('./views/Join.vue'),
            children: [{
                path: '/join/contact',
                name: 'contact',
                component: () =>
                    import ('./components/Join/contact/index.vue')

            }]
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