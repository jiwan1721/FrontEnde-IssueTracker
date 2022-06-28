<template>
<main>
    <from @submit.prevent="setup()">
        <h1>Please Sign in</h1>
        <div>
            <input type="Username" class = "from-control" name = "Username" placeholder="Username">
            <label>Username</label>
        </div>
        <div>
            <input type="password" class = "from-control" name = "Password" placeholder="Enter password">
            <label>Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </from>
</main>
    
</template>
<script>
import {useRouter} from "vue-router";
import axios from "axios";
export default {
    name: "loginUser",
    setup(){
        const router = useRouter();
        const submit = async e => {
            const form = new FormData(e.target);
            const inputs = Object.fromEntries(form.entries());

            console.log(inputs)
            const {data} = await axios.post('/auth/login/',inputs,{
                withCredentials:true
            });
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            await router.push('/')
        }
        console.log(submit);
        return {
            
            submit
        }
    }
}
</script>
