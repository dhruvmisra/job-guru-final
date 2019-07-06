import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from './firebase'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
});


