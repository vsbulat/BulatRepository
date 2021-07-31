import {createRouter, createWebHistory} from "vue-router"

import Main from "@/pages/Main"
import UserPage from "@/pages/UserPage";
import PostIdPage from "@/pages/PostIdPage";
import UserPageWithStore from "@/pages/UserPageWithStore";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: UserPage
    },
    {
        path: '/store',
        component: UserPageWithStore
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
