<template>
<main>
    <h1>Please Sign in</h1>
    <from class="ui large form" @submit.prevent="loggedIn">

        <input type="Username"  id ="username" class = "from-control" v-model = "username" placeholder="Username">
        <label>Username</label>

        <input type="password" id="password" class = "from-control" v-model = "password" placeholder="Enter password">
        <label>Password</label>
    
        <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </from>
</main>
    
</template>
<script>
import User from '@/models/user';

export default {
    name: "loginUser",
    data() {
        return {
           user:new User('',''),
           loading: false,
           message: ''
        };
    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        }
    },
    created(){
        if (this.loggedIn){
            this.$router.push('/home');
        }
    },
    methods : {
        handleLogin(){
            this.loading=true;
            this.$validator.validateAll().then(isValid=>{
                if (!isValid){
                    this.loading=false;
                    return
                }
                if (this.user.username && this.user.password){
                    this.$store.dispatch('api/token',this.user).then(
                        ()=> {
                            this.$router.push('/home');
                        },
                        error=>{
                            this.loading=false;
                            this.message=(error.response && error.response.data && error.response.data.message) ||
                            error.message ||
                            error.toString();
                        }
                    );
                }
            })
            }
        }
    }
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
//     methods: {
//         login(){
//             // const header={'Authorization':'token a64c9bcf7b2575d0539f97e85065738ebfc3ebaf'}
//             axios.post('api/token/', {
//                 username : this.username,
//                 password: this.password,
//             })
//             .then(resp => {
//                 this.token = resp.data.token;
//                 console.log(this.token)
//                 localStorage.setItem('user-token',resp.data.token)
//             })
//             // .catch( err=> {
//             //     localStorage.removeItem('user-token')
//             // })
//         }
    // }

</script>
<style scoped>
label {
  display: block;
  margin-top: 10px;
}
.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}
.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>