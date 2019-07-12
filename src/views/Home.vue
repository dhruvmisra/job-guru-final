<template>
  <div>
      <!-- Jumbotron -->
      <div class="jumbotron main default jumbotron-fluid">

        <div class="loggedIn-section" v-if="isLoggedIn">


          <!-- <div class="container">
            <div class="card steps col-md-12 col-lg-6 mx-auto bg-transparent border">
              <div class="card-body">
                <h2 class="text-center">Steps</h2>
                <ol>
                  <li> <span>Make the payment</span> </li>
                  <li> <span>Get the login details to the course on E-mail</span> </li>
                  <li> <span>Attain Job Excellence</span> </li>
                </ol>
              </div>
            </div>
          </div> -->
        </div>

        <div class="container text-center jumbo-text" v-else>
          <h1 class="text-white">Having talent and still not getting suitable jobs?</h1>
          <p class="text-muted">So here is JobGuru for you to get your dream jobs.</p>
          <router-link to="/signup" tag="button" class="btn btn-primary btn-lg mb-5">Sign Up</router-link>
        </div>

        <!-- Who are we -->
        <h1 class="who-text text-center" v-if="!isLoggedIn"> <span>Job</span> Excellence Course</h1>
        <h1 class="who-text text-center" v-else> <span>What</span> We Do?</h1>
        <div class="whoWeAre">

          <div class="video card">
            <div class="row" v-if="!isLoggedIn">
              <div class="text col-md-12 col-lg-6">
                <h2>A STEP BY STEP ONLINE TRAINING COURSE</h2>
                <br>
                <p style="font-size: 2em">For Complete</p>
                <h1>Personality Transformation</h1>
                <router-link to="/signup" v-if="!isLoggedIn" tag="button" class="btn btn-primary">Sign Up</router-link>
              </div>
              <div class="course col-md-12 col-lg-6 ml-auto">
                <img src="../assets/course-book.png" alt="" class="">
              </div>
            </div>

            <!-- <video class="video-fluid intro" autoplay="autoplay" loop="loop" v-else>
                <source src="../assets/vid.mp4" type="video/mp4"/>
            </video> -->
            <div class="embed-responsive embed-responsive-16by9" v-else>
              <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/0N_2ZFp8X4g?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

          </div>

        </div>


      </div>


      <!-- What we can do -->
      <div class="card numbers curve">    
        <!-- Numbers -->
        <div class="container">
          <div class="row justify-content-around" v-if="!isLoggedIn">
            
            <div class="card number-card">
              <div class="card-body text-center">
                <p class="number">5,000+</p>
                <p class="number-text">Courses sold</p>
              </div>
            </div>

            <div class="card number-card">
              <div class="card-body text-center">
                <p class="number">1,700</p>
                <p>Users currently viewing</p>
              </div>
            </div>

            <div class="card number-card">
              <div class="card-body text-center">
                <p class="number">1,000</p>
                <p>Candidates helped</p>
              </div>
            </div>

          </div>


          <div class="card how-it-works border-0" v-else>
            <div class="card-title">
              <div class="heading text-center">
                <h2><span>How </span> It Works?</h2>
              </div>
            </div>
            <div class="card-body">
              <ol>
                <li>Click on the button below to proceed and make the payment.</li>
                <li>Once the payment is done you will 
              need to fill a resume form so that our experts can generate a perfect resume for you.</li>
                <li>Within 24 hrs a mail will be sent to your registered mail id with the link of course and your resume.</li>
                <li>You can click on the link to start your job excellence course.</li>
              </ol>
            </div>

            <section v-if="!hasPaid">
                <div class="row justify-content-center">
                  <div class="card package standard mx-auto">
                    <div class="card-body pt-5">
                      <h2 class="price">What you get?</h2>
                      <ul class="package-info align-middle">
                        <li>Resume Building</li>
                        <li>Job Excellence Course</li>
                      </ul>

                      <h2 class="price pt-4"> <del>₹9,999</del> ₹1,999</h2>
                      <button @click="buyNow" class="btn buy-btn">
                        <div class="spinner-border mx-2 my-0" v-if="loading" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <span v-else>Buy Now</span>
                      </button>
                    </div>
                  </div>

                  <!-- <div class="card package premium">
                    <div class="card-body">
                      <h2 class="price">What you get?</h2>
                      <ul class="package-info align-middle">
                        <li>Resume Building</li>
                        <li>Personality Development Course</li>
                      </ul>
                    </div>
                  </div> -->
                </div>
            </section>

            <section v-else>
              <div class="row mx-auto justify-content-center">
                <router-link to="/resume-form" tag="button" class="btn btn-primary">Create your resume</router-link>
                <router-link to="/resume" tag="button" class="btn btn-info">View your resume</router-link>
              </div>
            </section>

          </div>


        </div>

        <div class="pb-5 mb-5" v-if="!isLoggedIn">
          <h4 class="text-center">Only limited registrations available</h4>
          <router-link to="/signup" tag="button" class="btn sign-btn">Sign Up</router-link>
        </div>
      
      </div>

      <section v-if="!isLoggedIn">
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
            <div class="row justify-content-around pt-5">
              <div class="col-md-5">
                  <div class="heading">
                    <h1><span>Personality Development </span> <br>course to shape your future</h1>
                    <p class="text-muted text-sm">A good personality influences the people around, the charm 
                      and aura of a refined personality creates an approachable and friendly image.</p>              
                  </div>
                  <ul class="points">
                    <li>A good personality not only inspires confidence in others of your abilities and achievements, 
                      but it also gives a boost to your self-confidence. </li>
                    <li>Your social skill also reflects in your interviews, as the interviewer will keep a close watch 
                      on how you carry yourself around other people and how you converse with them.</li>
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
      </section>

  </div>
</template>

<script>
  import axios from '../axios';
  import firebase from '../firebase';

  export default {
    data() {
      return {
        isLoggedIn: false,
        hasPaid: false,
        user: null,
        loading: false
      }
    },
    methods: {
      buyNow() {
        this.loading = true;
        const contact = '' + this.user.details.contact;
        const txnid = Math.floor(100000000 + Math.random()*9999999999);
        let req = {
          payment: {
            productinfo: 'Job Excellence Course',
            txnid: txnid,
            amount: '1999',
            email: this.user.email, 
            phone: contact,
            lastname: 'abc',
            firstname: 'def',
            surl: 'https://floating-reef-97336.herokuapp.com/payu/success',
            furl: 'https://floating-reef-97336.herokuapp.com/payu/fail'
          },
          userData: {
            userId: this.user.uid
          }
        }

        console.log(JSON.stringify(req));
        axios.post('makePayment', req)
          .then(res => {
            this.loading = false;
            console.log(res);
            window.open(res.data);
          });
      },
    },
    mounted() {
      if(this.$store.getters.user) {
        this.user = this.$store.getters.user;
        this.isLoggedIn = true;
        if(user.payment) {
          this.hasPaid = true;
        }
        console.log(firebase.auth().currentUser);
        // let jumbo = document.getElementsByClassName('jumbotron', 'main');
        // jumbo = jumbo[0];
        // jumbo.classList.remove('default');
        // jumbo.classList.add('loggedIn');
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
    padding: 0;
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
  .steps {
    margin-top: 6em;
    font-size: 1.5em;
  }
  .steps > .card-body > ol {
    color: var(--primary);
  }
  .steps > .card-body > ol > li > span {
    color: white;
  }
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
    height: fit-content;
    width: 80%;
    margin: 30px auto;
    padding: 10px;
    border-radius: 10px;
    background-color: black;
    box-shadow: 0px -2px 20px rgb(218, 218, 218);
    z-index: 2;
  }
  .video > iframe {
    width: 100%;
    height:
  }
  .course > img {
    width: 300px;
    margin: 0 20%;
  }
  .text {
    padding: 3em;
  }
  .text > button {
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
      /* padding-bottom: 8em; */
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

  /* Features */
  .what-you-get > .heading {
    padding-top: 6em;
    text-align: center;
  }
  .feature {
    width: 18em;
    margin: 30px;
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
  .feature-img > img{
    height: 280px;
    width: 280px;
    border-radius: 20px;
  }

  .categories {
    padding-bottom: 10em;
  }
  .loggedIn-section {
    /* padding-bottom: 12em */
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

  .how-it-works {
    margin-top: 1em;
    font-size: 1.5em;
    padding: 30px;
    /* background-color: rgb(228, 250, 255) */
  }

  @media (max-width: 1024px) {
    .course > img {
      width: 80%;
    }
  }

</style>
