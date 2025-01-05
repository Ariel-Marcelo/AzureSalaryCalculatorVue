import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        "path": '/',
        "redirect": '/roadmap'
    },
    {
        "path": '/roadmap',
        "name": 'RoadMap',
        "component": () => import('@/views/RoadMap.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({ y: 0 }),
});

export default router;