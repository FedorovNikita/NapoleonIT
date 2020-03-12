import VueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/portfolio',
            component: Portfolio
        }
    ],
    mode: 'history'
})