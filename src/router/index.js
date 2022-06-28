import {createRouter,createWebHistory} from 'vue-router'

//define router components
//we can import all vue component
import loginUser from '@/components/loginUser.vue';
import showUser from '@/components/showUser.vue';


//define some routers
//each router should map  to a component.


const routes = [
    {path: '/',component:loginUser},
    {path: '/user',component:showUser},
]

//create router instance and pass the 'routes' option
//you can pass in additional option here
const router = createRouter({
    //provide the history implemnentation to use we are using the hash history for simplicity
    history: createWebHistory(process.env.BASE_URL),
    routes  // short for 'routes:routes'
})
export default router
