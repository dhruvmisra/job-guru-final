<template>
  <div>
      <!-- Jumbotron -->
      <div class="jumbotron main default jumbotron-fluid">

        <div class="loggedIn-section" v-if="isLoggedIn">
          <div class="row mx-auto justify-content-center">
            <router-link to="/resume-form" tag="button" class="btn btn-primary">Create your resume</router-link>
            <router-link to="/resume" tag="button" class="btn btn-info">View your resume</router-link>
          </div>
        </div>

        <div class="categories container" v-else>
          <div class="row mx-auto justify-content-around">

            <div class="card category bg-primary">
              <h1 class="card-title">Student</h1>
              <hr>
              <button type="button" class="btn card-body" data-toggle="modal" data-target="#studentModal">
                Looking for an internship
              </button>
            </div>

            <!-- Student Modal -->
            <div class="modal fade" id="studentModal" tabindex="-1" role="dialog" aria-labelledby="studentModal" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header my-4 mx-4">
                    <h4 class="modal-title text-center" id="exampleModalCenterTitle">Looking for an internship?</h4>
                  </div>

                  <div class="modal-body my-4">
                    <ul>
                      <li>Some very convincing stuff</li>
                      <li>How can you say no after this point?</li>
                      <li>Just buy it man</li>
                    </ul>
                  </div>
                  <div class="modal-footer mx-auto">
                    <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                    <a href="/signup" class="btn btn-primary">Register now</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card category bg-primary">
              <h1 class="card-title">Fresher</h1>
              <hr>
              <button type="button" class="btn card-body" data-toggle="modal" data-target="#fresherModal">
                Looking for a job
              </button>
            </div>

            <!-- Fresher Modal -->
            <div class="modal fade" id="fresherModal" tabindex="-1" role="dialog" aria-labelledby="fresherModal" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalCenterTitle">Looking for a job?</h4>
                  </div>

                  <div class="modal-body">
                    <ul>
                      <li>Some very convincing stuff</li>
                      <li>How can you say no after this point?</li>
                      <li>Just buy it man</li>
                    </ul>
                  </div>
                  <div class="modal-footer mx-auto">
                    <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                    <a href="/signup" class="btn btn-primary">Register now</a>
                  </div>
                </div>
              </div>
            </div>


            <div class="card category bg-primary">
              <h1 class="card-title">Professional</h1>
              <hr>
              <button type="button" class="btn card-body" data-toggle="modal" data-target="#professionalModal">
                Looking for a job change
              </button>
            </div>

            <!-- Professional Modal -->
            <div class="modal fade" id="professionalModal" tabindex="-1" role="dialog" aria-labelledby="professionalModal" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalCenterTitle">Looking for a job change?</h4>
                  </div>

                  <div class="modal-body">
                    <ul>
                      <li>Some very convincing stuff</li>
                      <li>How can you say no after this point?</li>
                      <li>Just buy it man</li>
                    </ul>
                  </div>
                  <div class="modal-footer mx-auto">
                    <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                    <a href="/signup" class="btn btn-primary">Register now</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="card-main curve">
          <div class="container text-center">
            <h1 class="text-dark">Having talent and still not getting suitable jobs?</h1>
            <p class="text-muted">So here is JobGuru for you to get your dream jobs by hand-crafting your resume.</p>
            <button @click="buyNow" class="btn btn-primary btn-lg mb-5">Buy Now</button>
          </div>
        </div>

      </div>

      <!-- What we can do
      <div class="card numbers curve">    -->

      <!-- Packages -->
      <!-- <div class="card curve packages" style="position: absolute">
        <div class="heading main container text-center">
          <h1 class="">Having talent and still not getting suitable jobs?</h1>
          <p class="lead">So here is JobGuru for you to get your dream jobs by hand-crafting your resume.</p>
          <button @click="buyNow" class="btn btn-primary btn-lg mb-5">Buy Now</button>
        </div>
      </div> -->

        <!-- <div class="heading packages text-center">
          <h2><span>Our</span> Packages</h2>
          <p class="text-muted text-sm">The services we provide are unparalleled</p>
        </div>
        

        <div class="row justify-content-center">
          
          <div class="card package standard">
            <div class="card-body">
              <h2 class="price">₹799</h2>
              <ul class="package-info align-middle pb-3 pt-2">
                <li>Resume Building</li>
                <li>Personality Development Course</li>
              </ul>
              <button class="btn buy-btn">Buy Now</button>
            </div>
          </div>
          
          <div class="card package premium">
            <div class="card-body">
              <h2 class="price">₹1,499</h2>
              <ul class="package-info align-middle">
                <li>Resume Building</li>
                <li>Personality Development Course</li>
                <li>Specialised Support</li>
              </ul>
              <button class="btn buy-btn">Buy Now</button>
            </div>
          </div>

        </div> -->


  </div>
</template>

<script>
  import axios from 'axios';
  import firebase from '../firebase';

  export default {
    data() {
      return {
        isLoggedIn: false
      }
    },
    methods: {
      buyNow() {  
        let order = {
          ORDER_ID: 'ABC134',
          CUST_ID: 'testUser1',
          TXN_AMOUNT: '1',
        }
        axios.post('http://localhost:3000/testtxn', order)
          .then(res => {
            console.log(res);
            let pay = window.open("", "_blank");
            pay.document.write(res.data);
          })
      }

    },
    mounted() {
      if(this.$store.getters.getUser) {
        this.isLoggedIn = true;
        let jumbo = document.getElementsByClassName('jumbotron', 'main');
        jumbo = jumbo[0];
        jumbo.classList.remove('default');
        jumbo.classList.add('loggedIn');
      }
    }
  }
</script>

<style>
  @import "../css/styles-landing.css";
  
  .jumbotron.main {
    position: relative;
    padding-bottom: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  /* .default {
    background: linear-gradient(0deg, rgba(1, 22, 39, 0.5), rgba(1, 22, 39, 1)), url('../assets/default.jpg');
  }
  .loggedIn {
    background: linear-gradient(0deg, rgba(1, 22, 39, 0.5), rgba(1, 22, 39, 1)), url('../assets/loggedIn.jpg');
  } */
  .categories {
    padding-bottom: 10em;
  }
  .loggedIn-section {
    padding-bottom: 12em
  }
  .loggedIn-section > .row > button {
    font-size: 1.5em;
    padding: 1.5em 3em;
    margin: 2em;
    box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.25);
  }
  .category {
    width: 320px;
    background: linear-gradient(45deg, #005091 0%, #2EC4B6 100%);
    box-shadow: 0px 0px 25px  rgba(255, 255, 255, 0.20);
    border: none;
    margin: 20px;
    transition: transform 0.2s ease-out;
  }
  .category::before {
    content: '';
    position: absolute;
    right: 30px;
    top: 0;
    width: 80px;
    height: 110px;
    background-color: white;
    opacity: 0.1;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%);
    transition: height 0.2s ease-out;
  }

  .category > .card-title {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 20px;
    transition: padding-bottom 0.2s ease-out;
  }
  .category > hr {
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 auto;
    width: 80%;
    height: 0.5px;
  }
  .category > .card-body {
    color: white;
    opacity: 0.8;
    text-align: center;
    padding: 20px;
    margin: 10px 0;
    transition: opacity 0.2s ease-out, background 0.2s ease-out, margin 0.2s ease-out;
  }
  .category:hover {
    transform: scale(1.1);
  }
  .category:hover::before {
    height: 80px;
  }
  .category:hover > .card-title {
    padding-bottom: 5px;
  }
  .category:hover > .card-body {
    opacity: 1;
    cursor: pointer;
    background-color: black;
    margin: 10px 20px;
  }

  .modal-content {
    background: linear-gradient(45deg, #005091 30%, #2EC4B6 100%);
    border: none;
  }
  .modal-body > ul {
    list-style-type: square;
  }

  .packages {
    position: absolute;
    color: black;
    bottom: -20em;
  }

  .card-main {
    background-color: white;
    padding-top: 10em;
    padding-bottom: 0;
  }

</style>
