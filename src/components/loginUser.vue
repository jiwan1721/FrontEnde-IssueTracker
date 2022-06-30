<template>
<main>
    <h1>Please Sign in</h1>
    <from class="ui large form" @submit.prevent="login">

        <input type="Username"  id ="username" class = "from-control" v-model = "username" placeholder="Username">
        <label>Username</label>

        <input type="password" id="password" class = "from-control" v-model = "password" placeholder="Enter password">
        <label>Password</label>
    
        <button class="w-100 btn btn-lg btn-primary" type="submit" @click="login">Submit</button>
    </from>
</main>
    
</template>
<script>
// import {useRouter} from "vue-router";
import axios from "axios";
export default {
    name: "loginUser",
    data() {
        return {
            username:'',
            password:'',
            token: localStorage.getItem('user-token')|| null,
        }
    },
    // setup(){
    //     const router = useRouter();
    //     const submit = async e => {
    //         const form = new FormData(e.target);
    //         const inputs = Object.fromEntries(form.entries());

    //         // const inputs1 = {
    //         //     "username" : this.username,
    //         //     "password":this.password

    //         // }
    //         console.log(inputs)
    //         const {data} = await axios.post('/api-auth/login/',inputs,{
    //             // withCredentials:true
    //         });
    //         axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    //         await router.push('/')
    //     }
    //     console.log(submit);
    //     return { 
    //         submit
    //     }
    // }
    methods: {
        login(){
            // const header={'Authorization':'token a64c9bcf7b2575d0539f97e85065738ebfc3ebaf'}
            axios.post('api/token/', {
                username : this.username,
                password: this.password,
            })
            .then(resp => {
                this.token = resp.data.token;
                console.log(this.token)
                localStorage.setItem('user-token',resp.data.token)
            })
            // .catch( err=> {
            //     localStorage.removeItem('user-token')
            // })
        }
    }
}
</script>
