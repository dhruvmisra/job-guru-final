import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    set_user(state, user) {
      state.user = user;
    },
    clear_user(state) {
      state.user = null;
    }
  },
  actions: {
    setUser({commit}) {
      if(firebase.auth().currentUser) {
        commit('set_user', firebase.auth().currentUser);
      }
    },
    clearUser({commit}) {
      commit('clear_user');
    }
  }
})
