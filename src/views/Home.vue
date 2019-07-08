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

        <div class="container text-center jumbo-text">
          <h1 class="text-white">Having talent and still not getting suitable jobs?</h1>
          <p class="text-muted">So here is JobGuru for you to get your dream jobs by hand-crafting your resume.</p>
          <button @click="buyNow" class="btn btn-primary btn-lg mb-5">Buy Now</button>
        </div>

        <!-- Who are we -->
        <h1 class="who-text text-center"> <span>Job</span> Excellence Course</h1>
        <div class="whoWeAre">

          <div class="video card row">
            <div class="text col-md-12 col-lg-6">
              <h2>A STEP BY STEP ONLINE TRAINING COURSE</h2>
              <br>
              <p style="font-size: 2em">For Complete</p>
              <h1>Personality Transformation</h1>
              <button class="btn btn-primary">Buy Now</button>
            </div>
            <div class="course h-100 col-md-12 col-lg-6">
              <img src="../assets/course-book.png" alt="" class="h-100">
            </div>
          </div>

        </div>


      </div>


      <!-- What we can do -->
      <div class="card numbers curve">    
        <!-- Numbers -->
        <div class="container">
          <div class="row justify-content-around">
            
            <div class="card number-card">
              <div class="card-body text-center">
                <p class="number">500+</p>
                <p class="number-text">Courses sold</p>
              </div>
            </div>

            <div class="card number-card">
              <div class="card-body text-center">
                <p class="number">340</p>
                <p>Users currently viewing</p>
              </div>
            </div>

            <div class="card number-card">
              <div class="card-body text-center">
                <p class="number">540</p>
                <p>Users currently viewing</p>
              </div>
            </div>

          </div>
        </div>

        <h4 class="text-center">Only limited registrations available</h4>
        <a class="btn sign-btn sign-btn" 
            style="width: fit-content; margin: 15px auto;" 
            href="#" 
            role="button">Buy Now</a>
      
      </div>

      <div class="card curve what-you-get">
        <div class="heading">
          <h2><span>What will </span> you get?</h2>
          <p class="text-muted text-sm">We give you the best personality development course
              which will help you get closer to your dream job.</p>
        </div>

        <div class="row justify-content-center">

          <div class="card feature">
            <div class="feature-img">
              <img src="../assets/feature1.jpg" alt="" class="w-100 h-100">
            </div>
            <div class="card-body">
              <h4 class="card-title">50 Days Online Training</h4>
              <p>You Will Get An Online Course of 50+ Training Video Sessions To 
                Learn Everything It Takes To transform Yourself Completely.</p>
            </div>
          </div>

          <div class="card feature">
            <div class="feature-img">
              <img src="../assets/feature2.jpg" alt="" class="w-100 h-100">
            </div>
            <div class="card-body">
              <h4 class="card-title">E - Book</h4>
              <p>A Complete Guide To All Your Questions Which In Itself Is The Complete Course Elaborated!</p>
            </div>
          </div>

          <div class="card feature">
            <div class="feature-img">
              <img src="../assets/feature3.jpg" alt="" class="w-100 h-100">
            </div>
            <div class="card-body">
              <h4 class="card-title">Workbook</h4>
              <p>A WorkBook To Do It Yourself! Action Plans To Work On and 
                Question To Answer To Deepen Your Understanding and 
                Preparing The Warrior Inside You For The Real Battle Of Life!</p>
            </div>
          </div>

          <div class="card feature">
            <div class="feature-img">
              <img src="../assets/feature4.jpg" alt="" class="w-100 h-100">
            </div>
            <div class="card-body">
              <h4 class="card-title">Certificate</h4>
              <p>This Course Will Transform Your Personality and Will Make You The 
                Best Version Of YourSelf!On Completing The Comprehensive Course 
                Provide You With The Certificate Signed By PRT!</p>
            </div>
          </div>

        </div>

      </div>

      <!-- Resume section -->
      <div class="card resume curve">
          <!-- <p class="fact col-md-6 mx-auto text-center text-muted">According to a study/research, it is found that over 
            65% of the candidates don’t get an interview call because of how their resume is built.</p> -->
            
        <div class="card-body">
          <div class="row justify-content-center pt-5">
            <div class="col-md-4 resume-img">
              <img src="../assets/resume.png" alt="" class="h-100">
            </div>

            <div class="col-md-5 p-4">
                <div class="heading">
                  <h1><span>Building</span> <br>your resume</h1>
                  <p class="text-muted text-sm">We create a professional looking resume just from the basic information 
                    you provide to us.</p>
                </div>
                <ul class="points">
                  <li>Fill the form to share us your basic information.</li>
                  <li>Sit back and relax, our team will build the resume for you and email you within 24 hrs.</li>
                </ul>

                <!-- <p class="text-muted mt-5">Your future resume:</p>
                <button class="btn btn-info">View a template</button> -->
            </div>
          </div>
        </div>
      </div>

      <!-- PD section -->
      <div class="card pd curve">
        <!-- <p class="fact col-md-6 mx-auto text-center text-muted">Over 70% of the candidates are rejected 
          within the initial five seconds of the interview because they lack the right attitude and 
          personality to impress the recruiter/interviewee.</p> -->
        <div class="card-body">
          <div class="row justify-content-center pt-5">
            <div class="col-md-5">
                <div class="heading">
                  <h1><span>Personality Development </span> <br>course to shape your future</h1>
                  <p class="text-muted text-sm">We give you the best personality development course
                    which will help you get closer to your dream job.</p>              
                </div>
                <ul class="points">
                  <li>Unnecessary information</li>
                  <li>Some more unnecessary information</li>
                  <li>Making no sense whatsoever</li>
                </ul>

            </div>

            <div class="col-md-3">
              <img src="../assets/pd.png" alt="" class="resume-img">
            </div>
          </div>
        </div>

      </div>

      <div class="card curve">
        <div class="card-body">
            <!-- <div class="offer-section border">
              
              <div class="course-book">
                <img src="../assets/course-book.png" alt="" class="w-100 h-100">
              </div>
              <div class="offer card">
                <div class="card-header">
                  <h3 class="card-title">Limited period offer</h3>
                </div>
                <div class="card-body text-center">
                  <h3>Discount <br> 80% off</h3>
                </div>
              </div>

            </div> -->

        </div>
      </div>

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

  .card.curve > .card-body {
    padding-top: 150px;
  }
  
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
  .jumbo-text {
    padding-top: 6em;
  }

  /* Who we are */
  .who-text {
      padding-top: 1em;
  }
  .who-text > span {
      color: var(--primary);
  }
  .video {
      height: 550px;
      width: 80%;
      margin: 30px auto;
      border-radius: 10px;
      background-color: black;
      box-shadow: 0px -2px 20px rgb(218, 218, 218);
      z-index: 2;
  }
  .video > .text {
    padding: 3em;
  }
  .video > .text > button {
    margin-top: 5em;
  }

  /* .video > .text > h1::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 5em;
    height: 8px;
    background-color: var(--secondary);
  } */

  /* Numbers */
  .numbers {
      margin-top: -25em;
      padding-top: 22em;
      padding-bottom: 8em;
  }
  .number-card {
      margin: 20px;
      border: none;
  }
  .number {
      font-size: 4.5em;
      color: var(--primary);
      margin-bottom: 0;
  }

  /* Curve classes */
  .curve > .row {
    margin-top: 8em;
  }

  .curve:nth-child(odd) {
      background-color: var(--light);
  }

  /* Resume */
  .resume-img {
      width: 350px;
      height: 350px;
  }
  .resume-img::before {
      content: '';
      position: absolute;
      top: 30px;
      left: 100px;
      width: 200px;
      height: 300px;
      opacity: 0;
      background-color: rgba(46, 196, 181, 0.5);
      z-index: -1;
      animation: fade-in-up 0.6s ease-out forwards;
  }
  .points {
    font-size: 1.1em;
    padding: 10px 0;
    padding-left: 1em;
    list-style-type: square;
  }
  .points > li {
    margin-top: 10px;
  }

  /* Course book section */
  .course-book {
    width: 300px;
    height: fit-content;
    padding-top: 2em;
  }
  .offer {
    position: relative;
    width: fit-content;
    height: fit-content;
    padding-top: 20px;
    margin-left: -20px;
    border-radius: 5px;
    color: white;
    background: linear-gradient(45deg, rgba(1,22,39,1) 0%, rgba(0,79,141,1) 100%);
  }
  .offer > .card-header {
    margin-left: -2em;
    width: 100%;
    padding: 20px 30px;
    color: white;
    background-color: red;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.30);
  }

  .contact.card {
    border-radius: 0;
    color: white;
  }
  .contact.card > .card-body > h2 {
    background-color: var(--dark);
    padding: 20px;
    margin-left: -20px;
    color: rgba(255, 255, 255, 0.8);
  }

  /* Features */
  .what-you-get > .heading {
    padding-top: 6em;
    text-align: center;
  }
  .feature {
    width: 18em;
    border: none;
    background: transparent;
    text-align: center;
  }
  .feature > .card-body > .card-title {
    transition: all 0.2s ease-out;
  }

  .feature:hover > .card-body > .card-title {
    color: var(--primary);
  }
  .feature-img {
    height: 280px;
    width: 280px;
  }

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
