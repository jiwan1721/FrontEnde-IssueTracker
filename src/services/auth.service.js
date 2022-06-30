import api from './api'
import TokenService from "./token.service"; //import token service

class AuthService {
    login({ username, password}){
        return api
            .post("/api/auth/token",{
                username,
                password
            })
            .then((response)=> {
                if (response.data.accessToken){
                    TokenService.setUser(response.data);
                }
                return response.data;

            });
    }
    logout(){
        TokenService.removeUser();
    }

// This is for future purpose to register user
    // register({
    //     username,email,password
    // }){
    //     return api("/auth/signup",{
    //         username,
    //         email,
    //         password
    //     })
    // }
}

export default new AuthService();