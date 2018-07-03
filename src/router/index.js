import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import VuexTest from '@/components/VuexTest'
import ViewBlog from '@/components/ViewBlog'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage

        },
        {

            path: '/VuexTest',
            name: 'VuexTest',
            component: VuexTest

        },
        {

            path: '/blog/:id',
            name: 'ViewBlog',
            component: ViewBlog

        }
    ]
})
