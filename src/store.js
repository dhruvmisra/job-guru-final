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
    user(state) {
      return state.user;
    },
    hasPaid(state) {
      return state.hasPaid;
    }
  },
  mutations: {
    set_user(state, user) {
      state.user = user;
    },
    set_details(state, details) {
      state.user.details = details;
      console.log(state.user.details);
    },
    clear_user(state) {
      state.user = null;
      state.hasPaid = false;
    },
    has_paid_true(state) {
      state.hasPaid = true;
    }
  },
  actions: {
    setUser({commit, dispatch}) {
      if(firebase.auth().currentUser) {
        commit('set_user', firebase.auth().currentUser);
        axios.get('getUserData/' + firebase.auth().currentUser.uid)
          .then(res => {
            if(res.data) {
              commit('set_details', res.data);
              dispatch('checkHasPaid');
            } else {
              commit('set_details', null);
            }
          });
      }
    },
    clearUser({commit}) {
      commit('clear_user');
    },
    checkHasPaid({commit, state}) {
      if(state.user.details.payment != null) {
        commit('has_paid_true');
      }
    }
  }
})
