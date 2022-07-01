// import {createRouter,createWebHistory} from 'vue-router'

//define router components
//we can import all vue component
import loginUser from '@/components/loginUser.vue';
import showUser from '@/components/showUser.vue';
import Home from '@/components/Home.vue';
import Router from 'vue-router'
// import VueAxios from 'vue-axios';
import Vue from 'vue';

//define some routers
//each router should map  to a component.


// const routes = [
//     {path: '/',component:loginUser},
//     {path: '/user',component:showUser},
// ]

//create router instance and pass the 'routes' option
//you can pass in additional option here
// const router = createRouter({
//     //provide the history implemnentation to use we are using the hash history for simplicity
//     history: createWebHistory(process.env.BASE_URL),
//     routes  // short for 'routes:routes'
// })

Vue.use(Router)
export const router = new Router({
    mode :'history',
    routes: [
        {
            path:'/',
            name:'homeVue',
            component:Home
        },
        {
            path:'/homeVue',
            component:Home
        },
        {
           path : '/',
           name:'showUser',
           component:showUser
    
    },
    {
        path:'/login',
        name:'login',
        component:loginUser
    },
    // {
    //     path:'/user',
    //     name:'user',
    //     component: () => import('./components/Home.vue')
    // }
    ]
});

