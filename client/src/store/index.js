import { createStore } from 'vuex'
import router from '../router/index';
window.axios = require('axios');
import axios from 'axios';

// import Auth from '../Warehouse/Auth';

export default createStore({
  // modules: {
  //   Auth
  // },
  state: {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null 
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
  },
  mutations: {
    auth_request(state) {
      state.error = null
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.error = null
        state.token = token
        state.user = user
        state.status = 'success'
    },
    auth_error(state, err) {
      state.error = err.response.data.msg
    },
    register_request(state) {
      state.error = null
        state.status = 'loading'
    },
    register_success(state) {
      state.error = null
      state.status = 'success'
    },
    register_error(state, err) {
      state.error = err.response.data.msg
    },
    logout(state, token) {
      state.token = ''
      state.user = ''
      state.status = ''
    },
    profile_request(state) {
      state.status = 'loading'
    },
    user_profile(state, user) {
      state.user = user
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        commit('auth_request');
        let res = await axios.post("/users/login", user)
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
      } catch (err) {
        commit('auth_error', err);
      }
    },
    async register({ commit }, userData) {
      try {
        commit('register_request');
        let res = await axios.post("/users/register", userData)
      if(res.data.success) {
        commit('register_success')
      }
      return res;
      } catch (err) {
        commit('register_error', err )
      }
    },
    async getProfile({ commit }) {
      commit('profile_request');
      let res = await axios.get('/users/profile')
      commit('user_profile', res.data.user)
      return res
    },
    async logout({ commit }) {
      await localStorage.removeItem('token');
      commit('logout');
      delete axios.defaults.headers.common['Authorization'];
      router.push('/LogIn')
      return
  }
  }

})
