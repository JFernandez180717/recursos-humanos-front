import HomeView from '@/views/HomeView.vue';
import AreaView from '@/views/AreaView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/about', component: import('@/views/AboutView.vue') },
        { path: '/areas', component: () => import('@/views/AreaView.vue') },
        { path: '/areas/editar/:idArea', component: () => import('@/views/EditarAreaView.vue') }
    ]
})

export default router