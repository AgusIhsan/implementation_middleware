import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index.vue'
import Konten from './pages/konten.vue'
import Konten2 from './pages/konten2.vue'

Vue.use(Router)

function routes(){
    const route = [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/konten',
            name: 'konten',
            component: Konten
        },
        {
            path: '/konten2',
            name: 'konten2',
            component: Konten2
        },
    ]
    return route
}

export function createRouter(){
    return new Router({
        mode: 'history',
        routes: routes()
    })
}