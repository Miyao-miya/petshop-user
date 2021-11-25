import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

    //主目录

    {
        path: '/home',
        name: '测试',
        component: () => import(/* webpackChunkName: "about" */ '../views/homePage/Function/home/Index.vue')
    },
    {
        path: '/homes',
        name: '首页',
        component: () => import(/* webpackChunkName: "about" */ '../views/homePage/Function/home/Index.vue')
    },
    {
        path: '/shop',
        name: '商店',
        component: () => import(/* webpackChunkName: "about" */ '../views/homePage/Function/shop/Index')
    },
    {
        path: '/forum',
        name: '论坛',
        component: () => import(/* webpackChunkName: "about" */ '../views/homePage/Function/forum/Index')
    },
    {
        path: '/photo',
        name: '相册',
        component: () => import(/* webpackChunkName: "about" */ '../views/homePage/Function/photo/Index')
    },
    {
        path: '/doctor',
        name: '医生',
        component: () => import(/* webpackChunkName: "about" */ '../views/homePage/Function/doctor/Index')
    },
    {
        path: '/individual',
        name: '个人',
        component: () => import(/* webpackChunkName: "about" */ '../views/homePage/Function/individual/Index')
    },
    {
        path: '/about',
        name: '相关',
        component: () => import(/* webpackChunkName: "about" */ '../views/homePage/Function/about/Index')
    },
    {
        path: '/login',
        name: '登入',
        component: () => import(/* webpackChunkName: "about" */ '../views/homePage/Function/login/Index')
    },
    {
        path: '/logout',
        name: '登出',
        component: () => import(/* webpackChunkName: "about" */ '../views/homePage/Function/logout/Index')
    },

    // {
    //     path: '/postdetails',
    //     name: 'postDetails',
    //     components: () => import('../views/homePage/Function/forum/PostDetails')
    // }

    // {
    //     path: '/reservation',
    //     name: '预约',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/homePage/Function/reservation/Index')
    // }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
