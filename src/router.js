import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WhyUs from './views/WhyUs.vue'
import CaseStudies from './views/CaseStudies.vue'
import AboutUs from './views/AboutUs.vue'
import Plan from './views/Plan.vue'
import ResumeForm from './views/ResumeForm.vue'
import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn.vue'
import Resume from './views/Resume.vue'
import PaymentCheck from './views/PaymentCheck.vue'

import store from './store';
import firebase from './firebase';

Vue.use(Router)

let router = new Router({
  //base: '',
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/why-us',
    //   name: 'why-us',
    //   component: WhyUs
    // },
    {
      path: '/case-studies',
      name: 'case-studies',
      component: CaseStudies
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentCheck,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/resume-form',
      name: 'resume-form',
      component: ResumeForm,
      meta: {
        requiresAuth: true,
        requiresPayment: true
      }
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
      meta: {
        requiresAuth: true,
        requiresPayment: true
      }
    },
  ]
});

//Nav guards
router.beforeEach((to, from, next) => {
  //Chekc for requiresAuth
  if(to.matched.some(record => record.meta.requiresAuth)) {
    //Check !loggedIn
    if(!store.getters.user) {
      //Go to Signin page
      next({
        path: '/signin',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      //Check for requiresPayment
      if(to.matched.some(record => record.meta.requiresPayment)) {
        if(!store.getters.hasPaid) {
          //Go to payment page
          next({
            path: '/plan',
            query: {
              redirect: to.fullPath
            }
          });
        }
      }
      //Proceed
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    //Check loggedIn
    if(firebase.auth().currentUser) {
      //Go to Signin page
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      //Proceed
      next();
    }

  } else {
    //Proceed
    next();
  }
})

export default router;