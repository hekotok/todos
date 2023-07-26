import {createRouter, createWebHistory} from "vue-router";

import HelloWorld from "@/components/HelloWorld";

const routes = [
    {
        path: '/',
        component: HelloWorld
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;