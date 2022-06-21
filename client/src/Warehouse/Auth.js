import router from '../router/index';
import axios from 'axios';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: ''
};

const getters = {
    // isLoggedIn: state => !!state.token,
    // isLoggedIn(state) {
    //     if(state.token != '') {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user
};

const actions = {
    async login({ commit }, user) {
        commit('auth_request');
        let res = await axios.post('http://localhost:5000/users/login', user)
        if (res.data.success) {
            const token = res.data.token;
            const user = res.data.user;
            //Store token(localStorage)
            localStorage.getItem('token', token);
            //Axios defaults
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token, user)
        }
        return res;
    },
    async logOut({ commit }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/LogIn')
        return
    }
};

const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
    }
};


export default {
    state,
    mutations,
    getters,
    actions
}
