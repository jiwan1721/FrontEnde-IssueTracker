import authService from "@/services/auth.service";

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status : {loggedIn:true},user}
    : {status: {loggedIn:false},user:null};

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({commit},user){
            return authService.login(user).then(
                user => {
                    commit('loginSucess',user);
                    return Promise.resolve(user);
                },
                error =>{
                commit('loginFaliure');
                return Promise.reject(error);
            }
            );
        },
        logout({ commit }) {
            authService.logout();
            commit('logout');
        },

        // this is for resgister purpose

        // register({ commit }, user) {
        //     return AuthService.register(user).then(
        //       response => {
        //         commit('registerSuccess');
        //         return Promise.resolve(response.data);
        //       },
        //       error => {
        //         commit('registerFailure');
        //         return Promise.reject(error);
        //       }
        //     );
        //   },
        refreshToken({commit},accessToken){
            commit('refreshToken',accessToken);
        }
    },
    mutations: {
        loginSucess(state,user){
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state){
            state.status.loggedIn=false;
            state.user=null;
        },
        logout(state){
            state.status.loggedIn=false;
            state.user = null;
        },

        //this for register we don't need it now

        // registerSuccess(state) {
        //     state.status.loggedIn = false;
        //   },
        //   registerFailure(state) {
        //     state.status.loggedIn = false;
        //   },
    refreshToken(state,accessToken){
        state.state.loggedIn = true;
        state.user = {...state.user,accessToken:accessToken};
    }
    }
};