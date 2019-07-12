import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'
import axios from './axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    hasPaid: false,
    language: 'en'
  },
  getters: {
    user(state) {
      return state.user;
    },
    hasPaid(state) {
      return state.hasPaid;
    },
    language(state) {
      return state.language;
    }
  },
  mutations: {
    set_user(state, user) {
      state.user = user;
    },
    set_details(state, details) {
      state.user.details = details;
      //console.log(state.user.details);
    },
    set_payment(state, payment) {
      state.user.payment = payment;
    },
    clear_user(state) {
      state.user = null;
      state.hasPaid = false;
    },
    has_paid_true(state) {
      state.hasPaid = true;
    },
    set_language(state, lang) {
      state.language = lang;
    }
  },
  actions: {
    setUser({commit, dispatch}) {
      if(firebase.auth().currentUser) {
        commit('set_user', firebase.auth().currentUser);
        axios.get('getUserData/' + firebase.auth().currentUser.uid)
          .then(res => {
            if(res.data) {
              commit('set_details', res.data.details);
              commit('set_payment', res.data.payment);
              dispatch('checkHasPaid');
            } else {
              commit('set_details', null);
            }
          });
      }
    },
    setPayment({commit}, payment) {
      commit('set_payment', payment);
    },
    clearUser({commit}) {
      commit('clear_user');
    },
    checkHasPaid({commit, state}) {
      if(state.user.payment != null) {
        console.log('has paid');
        commit('has_paid_true');
      }
    },
    set_language({commit}, lang) {
      commit('set_language', lang);
    }
  }
})
