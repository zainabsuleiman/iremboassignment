import { createRouter, createWebHistory } from 'vue-router'
// import { authRoutes } from './authRoutes'
// import { DashboardRoutes } from './DashboardRoutes'
// import { store } from "../store";

const routes = [
{
    path: '/',
        name: 'Dashboard',
        // beforeEnter: () => auth.currentUser !== null || router.push({name: 'Login'}),
        component: () =>
            import ('../views/DashboardViews/Dashboard.vue'),
},

  
]

const router = createRouter({
    // scrollBehavior(to) {
    //     if (to.name != 'IndustryEntitiesPublic') {
    //         return { top: 0, behavior: 'smooth' }
    //     } else if (to.hash) {
    //         return {
    //             el: to.hash,
    //             behavior: 'smooth',
    //         }
    //     }
    // },
    history: createWebHistory(),
    routes
})

export { router }