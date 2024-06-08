import { createRouter, createWebHistory } from 'vue-router';

import AdminUserRequest from '@/components/AdminUserRequest';
import AdminUserJoin from '@/components/AdminUserJoin';
import AdminUserLogin from '@/components/AdminUserLogin';
import CompletionPage from '@/components/CompletionPage';


const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/request',
            name: 'AdminUserRequest',
            component: AdminUserRequest
        },
        {
            path: '/join',
            name: 'AdminUserJoin',
            component: AdminUserJoin
        },
        {
            path: '/login',
            name: 'AdminUserLogin',
            component: AdminUserLogin
        },
        {
            path: '/completion',
            name: 'CompletionPage',
            component: CompletionPage
        }
    ]
});

export default router;