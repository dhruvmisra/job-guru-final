<template>
  <div>
    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="jumbo-text container">
        <div class="heading text-center">
          <h1><span>Sign </span> Up</h1>
          <p class="text-muted text-sm">Take a step closer...</p>
        </div>
      </div>
    </div>

    <div class="card curve">
      <form class="mx-auto col-sm-5">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" placeholder="Enter name" required>
        </div>

        <div class="form-group" :class="{invalid: ($v.email.$error) && ($v.email.$model!='')}">
          <label for="email">Email address</label>
          <input type="email" 
                  class="form-control" 
                  id="email" 
                  @blur="$v.email.$touch()"
                  v-model="email" 
                  placeholder="Enter email">
          <small v-if="($v.email.$error) && ($v.email.$model!='')">Please enter a valid Email address</small>
        </div>

        <div class="form-group" :class="{invalid: ($v.password.$error) && ($v.password.$model!='')}">
          <label for="password">Password</label>
          <input type="password" 
                  class="form-control" 
                  id="password" 
                  @blur="$v.password.$touch()"
                  v-model="password" 
                  placeholder="Password">
          <small v-if="($v.password.$error) && ($v.password.$model!='')">Password must be atleast {{ $v.password.$params.minLen.min }} characters long</small>
        </div>
        
        <div class="form-group" :class="{invalid: ($v.confirmPass.$error) && ($v.confirmPass.$model!='')}">
          <label for="confirmPass">Confirm Password</label>
          <input type="password" 
                  class="form-control" 
                  id="confirmPass" 
                  @blur="$v.confirmPass.$touch()"
                  v-model="confirmPass" 
                  placeholder="Enter password again">
          <small v-if="($v.confirmPass.$error) && ($v.confirmPass.$model!='')">Passwords do not match</small>
        </div>
        <div class="form-group" :class="{invalid: ($v.contact.$error) && ($v.contact.$model!='')}">
          <label for="number">Contact Number</label>
          <input type="tel" 
                  class="form-control" 
                  id="number" 
                  @blur="$v.contact.$touch()"
                  v-model="contact" 
                  placeholder="Number">
          <small v-if="($v.contact.$error) && ($v.contact.$model!='')">Please enter a valid Contact number</small>

        </div>
        <div class="custom-control custom-checkbox my-4">
          <input type="checkbox" 
                  v-model="terms" 
                  class="custom-control-input" 
                  id="terms">
          <label class="custom-control-label" for="terms">Accept <a href="">Terms and conditions</a></label>
          <br>
          <small v-if="!terms" style="color: red">Please accept terms and conditions</small>
        </div>
        <button @click.prevent="register" :disabled="$v.$invalid" type="submit" class="btn btn-primary mx-auto">
          <div class="spinner-border mx-2 my-0" v-if="loading" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <span v-else>Sign Up</span>
        </button>
      </form>
      
      <router-link to="/signin" tag="a" class="link mx-auto">Already have an account?</router-link>
    </div>
  </div>
</template>

<script>
  import firebase from '../firebase';
  import {required, email, numeric, maxLength, minLength, sameAs} from 'vuelidate/lib/validators';
  import { firestore } from 'firebase';
  import axios from '../axios';

  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPass: '',
        contact: null,
        terms: false,
        uid: '',
        loading: false
      }
    },
    validations: {
      email: {
        required,
        email
      },
      contact: {
        required,
        numeric,
        maxLen: maxLength(10),
        minLen: minLength(10),
      },
      password: {
        required,
        minLen: minLength(6),
      },
      confirmPass: {
        sameAs: sameAs('password')
      }
    },

    methods: {
      register() {
        this.loading = true;
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.uid = user.user.uid;
            return user.user.updateProfile({
              displayName: this.name
            }).then(res => {
              axios.post('saveUserData', {
                savePath: '/details',
                data: {
                  userId: this.uid,
                  contact: this.contact,
                }
              })
                .then(res => {
                  console.log(res);
                });
              this.$store.dispatch('setUser');
              //this.$router.go({path: this.$router.path});
              this.$router.push('/plan');
              this.loading = false;
            }).catch(err => {
              console.log(err);
            });
          },
          err => {
            this.loading = false;
            alert(err.message);
          });

      }
    }
  }
</script>

<style scoped>
  .jumbotron {
    padding-top: 1em;
    padding-bottom: 8em;
  }
  form {
    margin-top: 10em;
  }
  .invalid small {
    color: red;
  }
  .invalid input {
    border: 1px solid red;
  }
  .link {
    padding-top: 20px;
    text-decoration: none !important;
  }
</style>

