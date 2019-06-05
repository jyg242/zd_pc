import Vue from 'vue'
import Router from 'vue-router'
// import Index from './views/index_0.vue';
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import Load from './components/Loading/Loading.vue'
import notfound from './views/404.vue'
Vue.use(Router)

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/upload',
        name: 'upload',
        component: () => import('../src/views/test.vue')
    },
    {
        path: '/',
        name: 'index',
        meta: { title: '北京中迪投资股份有限公司' },
        component: () => import('../src/views/Index.vue')
    }, {//进度条
        path: '/load',
        name: 'load',
        component: Load
    }, {
        path: '/about',
        name: 'about',
        meta: { keepAlive: true },
        component: () =>
            import('./views/About.vue'),
        children: [{
            path: '/about/intro',
            name: 'intro',
            // meta: { keepAlive: true },
            component: () =>
                import('./components/About/Intro/index.vue')
        }, {
            path: '/about/history',
            name: 'history',
            // meta: { keepAlive: true },
            component: () =>
                import('./components/About/History/index.vue')
        }]
    }, {
        path: '/news',
        name: 'news',
        meta: { keepAlive: true },
        component: () =>
            import('./views/News.vue'),
        children: [{
            path: '/news/news_list',
            name: 'news_list',
            // meta: { keepAlive: true },
            component: () =>
                import('./components/News/newsList.vue')
        }]
    }, {
        path: '/new_detail',
        name: 'new_detail',
        component: () =>
            import('./components/News/newsDetail.vue')
    }, {
        path: '/rec_detail',
        name: 'rec_detail',
        component: () =>
            import('./components/Join/recruit/recruit_detail.vue')
    }, {
        path: '/join',
        name: 'join',
        meta: { keepAlive: true },
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
            meta: { keepAlive: true },
            component: () =>
                import('./components/Join/recruit/recruit_list.vue')
        }]
    }, {
        path: '/distribution',
        name: 'distribution',
        meta: { keepAlive: true },

        component: () => import('./views/Distribution.vue'),
        children: [{
            path: '/distribution/list',
            name: 'distribution1',
            meta: { keepAlive: true },
            component: () => import('./components/Distribution/index.vue')
        }, {
            path: '/distribution/list_2',
            name: 'distribution2',
            component: () => import('./components/Distribution/index.vue')
        }]
    }, {
        path: '/duty',
        name: 'duty',
        meta: { keepAlive: true },
        component: () =>
            import('./views/Duty.vue'),
        children: [{
            path: '/duty/public',
            name: 'public',
            meta: { keepAlive: true },
            component: () =>
                import('./components/Duty/index.vue')
        },]
    }, {
        path: '/login',
        name: 'login',
        component: () => import('../src/views/Login.vue')
    }, {
        path: '/admin',
        name: 'admin',
        meta: { requireAuth: true },
        component: () => import('../src/views/Admin.vue'),
        children: [{
            path: '/admin/update_img',
            name: 'update_img',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/imgList/update_img.vue')
        }, {
            path: '/admin/add_img',
            name: 'add_img',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/imgList/add_img.vue')
        }, {
            path: '/admin/add_news',
            name: 'add_news',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/newsList/add_news')
        }, {
            path: '/admin/update_news',
            name: 'update_news',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/newsList/update_news')
        }, {
            path: '/admin/control_industry',
            name: 'control_industry',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/industry/control_industry.vue')
        }, {
            path: '/admin/add_industry',
            name: 'add_industry',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/industry/add_industry.vue')
        }, {
            path: '/admin/add_duty',
            name: 'add_duty',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/dutyList/add_duty.vue')
        }, {
            path: '/admin/update_duty',
            name: 'update_duty',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/dutyList/update_duty.vue')
        }, {
            path: '/admin/add_recruit',
            name: 'add_recruit',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/recruitList/add_recruit.vue')
        }, {
            path: '/admin/reomove_recruit',
            name: 'reomove_recruit',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/recruitList/remove_recruit.vue')
        }, {
            path: '/admin/edit',
            name: 'industry_edit',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/industry/edit.vue')
        }, {
            path: '/admin/edit_news',
            name: 'news_edit',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/newsList/edit_news.vue')
        }, {
            path: '/admin/edit_duty',
            name: 'duty_edit',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/dutyList/eidt_duty.vue')
        }, {
            path: '/admin/password_center',
            name: 'password_center',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/myCenter/passWord.vue')
        }, {
            path: '/admin/admin_control',
            name: 'admin_control',
            meta: { requireAuth: true },
            component: () => import('./components/Admin/myCenter/admin_control.vue')
        }]
    }, { //404页面
        path: '*',
        name: '404',
        meta: {
            title: '404'
        },
        component: notfound
    }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    //进度条
    Nprogress.start()
    next()
    // 登录权限 admin
    let isLogin = localStorage.getItem('jygToken') || undefined
    // 判断是否需要登录权限
    if (to.meta.requireAuth) {
        // 根据是否有token值进行判断
        if (isLogin) {
            next() //有的话直接进
        } else {
            next({  //没有的话进入登录页面
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else { //不需要登录权限的页面直接进
        next()
    }
})
router.afterEach((to, from, next) => {
    Nprogress.done()
})

export default router