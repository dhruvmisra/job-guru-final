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
                  -<li> <span>Make the payment</span> </li>
                  <li> <span>Get the login details to the course on E-mail</span> </li>
                  <li> <span>Attain Job Excellence</span> </li>
                </ol>
              </div>
            </div>
          </div> -->
        </div>

        <div class="container text-center jumbo-text" v-else>
          <h1 class="text-white" v-if="language === 'en'">Having talent and still not getting suitable jobs?</h1>
          <h1 class="text-white" v-else>क्या आपके पास टैलेंट होते हुए भी एक अच्छी नौकरी नहीं है?</h1>
          <p class="text-muted" v-if="language === 'en'">So here is JobGuru for you to get your dream jobs by hand-crafting your resume.</p>
          <p class="text-muted" v-else>अगर ऐसा है तो आपको चिंता करने की जरूरत नहीं है क्यूंकि आपके पास है OURJOBGURU तो देर किस बात की</p>
          <router-link to="/signup" tag="button" class="btn btn-primary btn-lg mb-5" v-if="language === 'en'">Sign Up</router-link>
          <router-link to="/signup" tag="button" class="btn btn-primary btn-lg mb-5" v-else>साइन अप</router-link>
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
                <p class="number-text" v-if="language === 'en'">Courses sold</p>
                <p class="number-text" v-else>कोर्सेस बिक चुके हैं</p>
              </div>
            </div>

            <div class="card number-card">
              <div class="card-body text-center">
                <p class="number">1,700</p>
                <p v-if="language === 'en'">Users currently viewing</p>
                <p v-else>खरीदने की तयारी में हैं</p>
              </div>
            </div>

            <div class="card number-card">
              <div class="card-body text-center">
                <p class="number">1,000</p>
                <p v-if="language === 'en'">Candidates helped</p>
                <p v-else>लोग अब तक लाभ उठा चुके हैं</p>
              </div>
            </div>

          </div>


          <div class="card how-it-works border-0" v-if="isLoggedIn ">
            <div class="card-title">
              <div class="heading text-center" v-if="!hasPaid">
                <h2 v-if="language === 'en'"><span>How </span> It Works?</h2>
                <h2 v-else><span>ये कैसे काम करेगा</span></h2>
              </div>
              <div class="heading text-center" v-else>
                <h2 v-if="language === 'en'"><span>Congratulations </span></h2>
                <h2 v-else><span>बधाई हो</span></h2>
              </div>
            </div>
            <div class="card-body" v-if="!hasPaid">
              <ol>
                <li v-if="language === 'en'">Click on the button below to proceed and make the payment.</li>
                <li v-else>इस कोर्स को खरीदने के लिए आप नीचे दिए हुए BUY NOW के बटन पर क्लिक करें और पेमेंट करें</li>
                <li v-if="language === 'en'">Once the payment is done you will
                 need to fill a resume form so that our experts can generate a perfect resume for you.</li>
                <li v-else>जैसे ही आप पेमेंट करेंगे आपको एक फॉर्म भरने की जरूरत है जिसके बाद हमारे एक्सपर्ट आपके लिए प्रोफेशनल रिज़्यूम बनाएंगे</li>
                <li v-if="language === 'en'">Within 24 hrs a mail will be sent to your registered mail id with the link of course and your resume.</li>
                <li v-else>पेमेंट करने के 24 घंटे के अंदर ही आपको आपका रिज़्यूम और पर्सनालिटी डेवलॅपमेंट के कोर्स का लिंक आपकी ईमेल आईडी पर मिल जायेगा</li>
                <li v-if="language === 'en'">You can click on the link to start your job excellence course.</li>
                <li v-else>और इसके तुरंत बाद ही आप बेहतरीन कोर्स की शुरुआत कर सकते हैं.</li>
              </ol>
            </div>
            <div class="card-body text-center" v-else>
              <p>The course login details will be sent to your E-mail address</p>
            </div>



            <div class="spinner-border mx-auto my-5" role="status" v-if="axiosLoading">
              <span class="sr-only">Loading...</span>
            </div>
            <section v-if="!hasPaid && !axiosLoading">
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

                </div>
            </section>

            <section v-if="!axiosLoading && hasPaid">
              <div class="row mx-auto justify-content-center">
                <router-link to="/resume-form" tag="button" class="btn btn-primary m-5 py-4">Create your resume</router-link>
                <router-link to="/resume" tag="button" class="btn btn-info m-5 py-4">View your resume</router-link>
              </div>
            </section>

          </div>


        </div>

        <div class="pb-5 mb-5" v-if="!isLoggedIn">
          <h4 class="text-center" v-if="language === 'en'">Only limited registrations available</h4>
          <h4 class="text-center" v-else>लिमिटेड रेजिस्ट्रेशन</h4>
          <router-link to="/signup" tag="button" class="btn sign-btn" v-if="language === 'en'">Sign Up</router-link>
          <router-link to="/signup" tag="button" class="btn sign-btn" v-else>साइन अप</router-link>
        </div>
      
      </div>

      <section v-if="!isLoggedIn">
        <div class="card curve what-you-get">
          <div class="heading">
            <h2 v-if="language === 'en'"><span>What will </span> you get?</h2>
            <h2 v-else><span>इससे आपको  </span> क्या मिलेगा</h2>
            <p class="text-muted text-sm" v-if="language === 'en'">We give you the best personality development course
                which will help you get closer to your dream job.</p>
              <p class="text-muted text-sm" v-else>हम आपको एक पर्सनालिटी बनने में मदद में मदद करेंगे जो आपको आपकी ड्रीम जॉब के करीब लेकर जाएगी.</p>
          </div>

          <div class="row justify-content-center">

            <div class="card feature">
              <div class="feature-img">
                <img src="../assets/feature1.jpg" alt="" class="w-100 h-100">
              </div>
              <div class="card-body" v-if="language === 'en'">
                <h4 class="card-title">50 Days Online Training</h4>
                <p>You Will Get An Online Course of 50+ Training Video Sessions To 
                  Learn Everything It Takes To transform Yourself Completely.</p>
              </div>
              <div class="card-body" v-else>
                <h4 class="card-title">2 महीने की ऑनलाइन ट्रेनिंग</h4>
                <p>आपको 50+ वीडियो का ऑनलाइन ट्रेनिंग कोर्स मलेगा जिसमें आप वो सब सीखेंगे जो आपको एक बेहतर व्यक्तित्व में बदलने में मददगार होगा।</p>
              </div>
            </div>

            <div class="card feature">
              <div class="feature-img">
                <img src="../assets/feature2.jpg" alt="" class="w-100 h-100">
              </div>
              <div class="card-body" v-if="language === 'en'">
                <h4 class="card-title">E - Book</h4>
                <p>A Complete Guide To All Your Questions Which In Itself Is The Complete Course Elaborated!</p>
              </div>
              <div class="card-body" v-else>
                <h4 class="card-title">ई-बुक</h4>
                <p>आपके सभी प्रश्नों के लिए एक पूर्ण गाइड जो अपने आप में ही विस्तृत और संपूर्ण पाठ्यक्रम है।</p>
              </div>
            </div>

            <div class="card feature">
              <div class="feature-img">
                <img src="../assets/feature3.jpg" alt="" class="w-100 h-100">
              </div>
              <div class="card-body" v-if="language === 'en'">
                <h4 class="card-title">Workbook</h4>
                <p>A WorkBook To Do It Yourself! Action Plans To Work On and 
                  Question To Answer To Deepen Your Understanding and 
                  Preparing The Warrior Inside You For The Real Battle Of Life!</p>
              </div>
              <div class="card-body" v-else>
                <h4 class="card-title">वर्कबुक</h4>
                <p>खुद से काम करने के लिए वर्कबुक। और आपकी समझ को और गहरा करने के लिए और आपको हर चुनौती के लिए तैयार करने के लिए ऐक्शन प्लान्स भी।</p>
              </div>
            </div>

            <div class="card feature">
              <div class="feature-img">
                <img src="../assets/feature4.jpg" alt="" class="w-100 h-100">
              </div>

              <div class="card-body" v-if="language === 'en'">
                <h4 class="card-title">Certificate</h4>
                <p>This Course Will Transform Your Personality and Will Make You The 
                  Best Version Of YourSelf!On Completing The Comprehensive Course 
                  Provide You With The Certificate Signed By PRT!</p>
              </div>
              <div class="card-body" v-else>
                <h4 class="card-title">सर्टिफिकेट</h4>
                <p>यह कोर्स आपकी पर्सनालिटी को बदल देगा और आपको खुद का सबसे अच्छा संस्करण बना देगा। इस कोर्स को पूरा करने के बाद आपको  पुष्कर राज ठाकुर(PRT) द्वारा हस्ताक्षरित प्रमाणपत्र (Certificate) भी मिलेगा।</p>
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
                    <h1 v-if="language === 'en'"><span>Building</span> <br>your resume</h1>
                    <h1 v-else>आपका रिज़्यूम हमारी जिम्मेदारी:</h1>
                    <p class="text-muted text-sm" v-if="language === 'en'">We create a professional looking resume just from the basic information
                      you provide to us.</p>
                    <p class="text-muted text-sm" v-else>आपकी दी हुई जानकारी से हम आपका प्रोफेशनल रिज़्यूम बनाएंगे</p>
                  </div>
                  <ul class="points">
                    <li v-if="language === 'en'">Fill the form to share us your basic information.</li>
                    <li v-else>जिसके लिए आप वेबसाइट पे दिया हुआ फॉर्म भरें</li>
                    <li v-if="language === 'en'">Sit back and relax, our team will build the resume for you and email you within 24 hrs.</li>
                    <li v-else>हमारी टीम आपका रिज़्यूम बनाकर 24 घंटे के अंदर आपको मेल कर देगी</li>
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
                    <h1 v-if="language === 'en'"><span>Personality Development </span> <br>course to shape your future</h1>
                    <h1 v-else>आपके बेहतर भविष्य के लिए क्यों है ये कोर्स जरूरी:</h1>
                  </div>
                  <ul class="points">
                    <li v-if="language === 'en'">A good personality not only inspires confidence in others of your abilities and achievements,
                      but it also gives a boost to your self-confidence. </li>
                    <li v-else>एक अच्छी पर्सनालिटी न सिर्फ किसी इंसान के अंदर आत्मविश्वास लाती है बल्कि पॉजिटिविटी भी लाती है और साथ ही आपको जीवन में आगे बढ़ने के लिए भी प्रेरित करती है</li>
                    <li v-if="language === 'en'">Your social skill also reflects in your interviews, as the interviewer will keep a close watch
                      on how you carry yourself around other people and how you converse with them.</li>
                    <li v-else>आपकी स्किल्स और एक्सपर्टाइज़ (विशेषज्ञता) के अलावा आपकी बॉडी लैंगुएज, सॉफ्ट स्किल्स और बातचीत का तरीका भी आपको नौकरी दिलाने में मदद करता है </li>
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
import { setTimeout } from 'timers';

  export default {
    data() {
      return {
        isLoggedIn: false,
        hasPaid: false,
        user: null,
        loading: false,
        axiosLoading: true,
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
    computed: {
      language() {
        return this.$store.getters.language;
      }
    },
    mounted() {
      if(this.$store.getters.user) {
        this.user = this.$store.getters.user;
        this.isLoggedIn = true;
      }
      axios.get('getUserData/' + firebase.auth().currentUser.uid)
        .then(res => {
          this.axiosLoading = false;
          console.log(res.data);
          if(res.data) {
            this.user.deatails = res.data;
            if(this.user.payment) {
              this.hasPaid = true;
            }
          }
        });

        console.log("language ", this.language);
        //console.log(firebase.auth().currentUser);
        // let jumbo = document.getElementsByClassName('jumbotron', 'main');
        // jumbo = jumbo[0];
        // jumbo.classList.remove('default');
        // jumbo.classList.add('loggedIn');

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
