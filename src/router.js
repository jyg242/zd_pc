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
        component: () =>
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
            path: '/news/news_list',
            name: 'news_list',
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
        }]
    }
    ]
})
router.beforeEach((to, from, next) => {
    //进度条
    Nprogress.start()
    next()
    // 登录权限 admin
    let isLogin = localStorage.getItem('isLogin') || undefined
    if (to.meta.requireAuth) {
        if (isLogin) {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
    // login状态判断
    // if (to.name == 'login') {
    //     if (isLogin == 'admin') {
    //         alert('您已登录')
    //         router.push('admin')
    //     }
    // }

})
router.afterEach((to, from, next) => {
    Nprogress.done()
})

export default router