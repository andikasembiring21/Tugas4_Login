import { createRouter , createWebHistory } from 'vue-router'; 

const routes = [
    {
        path : '/tugas4',
        name : 'tugas4.tugas4',
        component:()=> import('../views/tugas4/tugas4.vue'),
    },
    {
        path : '/tugas2',
        name : 'transaksi.tugas2',
        component:()=> import('../views/transaksi/tugas2.vue')
    },
    {
        path : '/tugas3',
        name : 'transaksi.tugas3',
        component:()=> import('../views/transaksi/tugas3.vue')
    },
    {
        path : '/dftruser',
        name : 'tugas4.dftruser',
        component:()=> import('../views/tugas4/dftruser.vue')  
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;