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
        path: '/aaaa',
        name: 'index',
        component: Index
    }, {
        path: '/load',
        name: 'load',
        component: Load
    }, {
        path: '/about',
        name: 'about',
        component: () =>
            import('./views/About.vue'),
        children: [{
            path: '/about/intro',
            name: 'intro',
            component: () =>
                import('./components/About/Intro/index.vue')
        }, {
            path: '/about/history',
            name: 'history',
            component: () =>
                import('./components/About/History/index.vue')
        }]
    }, {
        path: '/news',
        name: 'news',
        component:() =>
            import('./views/News.vue'),
        children: [{
            path: '/news/company',
            name: 'company',
            component: () =>
                import('./components/News/Company/index.vue')
        }, {
            path: '/news/media',
            name: 'media',
            component: () =>
                import('./components/News/Media/index.vue')

        }, {
            path: '/news/notice',
            name: 'notice',
            component: () =>
                import('./components/News/Notice/index.vue')
        }]

    }, {

        path: '/new_detail',
        name: 'new_detail',
        component: () =>
            import('./components/Detail/index.vue')
    }, {

        path: '/rec_detail',
        name: 'rec_detail',
        component: () =>
            import('./components/Detail/index_1.vue')
    }, {
        path: '/join',
        name: 'join',
        component: () =>
            import('./views/Join.vue'),
        children: [{
            path: '/join/contact',
            name: 'contact',
            component: () =>
                import('./components/Join/contact/index.vue')
        }, {
            path: '/join/recruit',
            name: 'recruit',
            component: () =>
                import('./components/Join/recruit/index.vue')
        }]
    }, {
        path: '/distribution',
        name: 'distribution',
        component: () => import('./views/Distribution.vue'),
        children: [{
            path: '/distribution/list_1',
            name: 'distribution1',
            component: () => import('./components/Distribution/index.vue')
        }, {
            path: '/distribution/list_2',
            name: 'distribution2',
            component: () => import('./components/Distribution/index.vue')
        }]
    }, {
        path: '/duty',
        name: 'duty',
        component: () =>
            import('./views/Duty.vue'),
        children: [{
            path: '/duty/public',
            name: 'public',
            component: () =>
                import('./components/Duty/public.vue')
        }, {
            path: '/duty/charity',
            name: 'charity',
            component: () =>
                import('./components/Duty/charity.vue')
        }]
    }, {
        path: '/',
        name: 'index1',
        component: () => import('../src/views/index1.vue')
    }, {
        path: '/login',
        name: 'login',
        component: () => import('../src/views/Login.vue')
    }, {
        path: '/admin',
        name: 'admin',
        component: () => import('../src/views/Admin.vue')
    }
    ]
})
router.beforeEach((to, from, next) => {
    //进度条
    Nprogress.start()
    next()
    // 登录权限 admin
    let isLogin = localStorage.getItem('isLogin') || undefined
    if (to.name == 'admin') {
        if (!isLogin) {
            router.push('/login')
        } else {
            next()
        }
    }
    //login状态判断
    if(to.name=='login'){
        if(isLogin=='admin'){
            alert('您已登录')
            router.push('admin')
        }
    }
    
})
router.afterEach((to, from, next) => {
    Nprogress.done()
})

export default router