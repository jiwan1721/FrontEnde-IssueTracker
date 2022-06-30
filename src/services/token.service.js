class TokenService {
    getLocalRefreshToken(){
        const user = JSON.parse(localStorage.getItem("user"));
        return user?.refreshToken;
    }
    getLocalAccessToken(){
        let user = JSON.parse(localStorage.getItem("user"));
        return user?.accessToken;
    }
    updateLocalAccessToken(token){
        let user = JSON.parse(localStorage.getItem("user"));
        user.accessToken = token;
        localStorage.setItem("user",JSON.stringify(user));
    }
    getUser(){
        console.log(JSON.stringify(user));
        localStorage.setItem("user",JSON.stringify(user));
    }
    removeUser(){
        localStorage.removeItem("user");
    }
}
export default new TokenService();