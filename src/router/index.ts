import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/roadmap'
    },
    {
        path: '/roadmap',
        name: 'RoadMap',
        component: () => {
            return import('@/views/RoadMap.vue');
        },
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: () => {
            return import('@/views/Calculator.vue');
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;