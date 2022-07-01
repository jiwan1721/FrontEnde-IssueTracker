<template>
    <div class="container">
        <header class="jonbtron">
            <h3>{{content}}</h3>
        </header>
    </div>
</template>
<script>

import userService from '@/services/user.service';
export default {
    name : 'homeVue',
    data() {
        return {
            content:''
        };
    },
    created(){
        userService.getUserInfo().then(
            response=> {
                this.content=response.data;
            },
            error => {
                (error.response && error.response.data && error.response.data.message)||
                error.message ||error.toString();
            }
        )
    }
}
</script>
