import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'
import axios from './axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    hasPaid: false
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    set_user(state, user) {
      state.user = user;
      console.log(state.user);
    },
    clear_user(state) {
      state.user = null;
    },
    has_paid_true(state) {
      state.hasPaid = true;
    }
  },
  actions: {
    setUser({commit, dispatch}) {
      if(firebase.auth().currentUser) {
        axios.get('getUserData' + firebase.auth().currentUser.uid)
          .then(res => {
            commit('set_user', res.data);
            dispatch('checkHasPaid');
          });
      }
    },
    clearUser({commit}) {
      commit('clear_user');
    },
    checkHasPaid({commit, state}) {
      if(state.user.payment != null) {
        commit('has_paid_true');
      }
    }
  }
})
