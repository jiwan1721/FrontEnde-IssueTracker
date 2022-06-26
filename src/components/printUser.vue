<template>
    <h1>Users</h1>
    <li v-for="user in users" :key="user.id">
        <h2>{{user.name}}</h2>
        <p>{{user.id}}</p>
        <h2>{{user.eamil}}</h2>
        <h2>{{user.mobile_number}}</h2>
        <h2>{{user.company}}</h2>
    </li>
    
</template>
<script>
import axios from 'axios';

    export default {
            data(){
                return{
            users: [],
            id:'',
            name: '',
            mobile_number:'',
            email:'',
            company:'',
            }
        },
        methods: {
            async getUserData(){
                try {
                    const response = await axios.get('http://127.0.0.1:8000/user/');
                    this.users=response.data;
                } catch (error){
                    console.log(error);
                }
            },
            created(){
                this.getUserData();
            }
        }
    }
    
</script>
