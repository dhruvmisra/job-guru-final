<template>
    <div>
      <!-- Jumbotron -->
      <div class="jumbotron jumbotron-fluid">
        <div class="jumbo-text container">
          <div class="heading text-center">
            <h2><span>You are one</span> <br>click away</h2>
            <p class="text-muted text-sm">To changing your future</p>
          </div>
        </div>
      </div>

      <div class="card curve course">
        <div class="row justify-content-center">

          <div class="image col-md-12 col-lg-6">
            <img src="../assets/prt.jpg" alt="">
          </div>

          <div class="card package standard mx-auto my-auto">
            <div class="card-body">
              <h2 class="price"> <del>₹9,999</del> ₹1,999</h2>
              <ul class="package-info align-middle pb-3 pt-2">
                <li>Resume Building</li>
                <li>Personality Development Course</li>
              </ul>
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
                <h2 class="price">₹1,499</h2>
                <ul class="package-info align-middle">
                  <li>Resume Building</li>
                  <li>Personality Development Course</li>
                  <li>Specialised Support</li>
                </ul>
                <button class="btn buy-btn">Buy Now</button>
              </div>
            </div> -->

        </div>

      </div>

      <div class="card curve about-course">

        <div class="heading text-center">
          <h2><span>About</span> the course</h2>
        </div>
          
        <!-- About cards -->
        <div class="row justify-content-center mt-0">
          <div class="card about-card text-center bg-transparent border-0">
            <div class="card-body">
              <div class="card-img-top mx-auto my-3">
                <img src="../assets/features/communication.png" alt="" class="w-100 h-100">
              </div>
              <h4 class="card-title">Improve communication skills</h4>
            </div>
          </div>
          
          <div class="card about-card text-center bg-transparent border-0">
            <div class="card-body">
              <div class="card-img-top mx-auto my-3">
                <img src="../assets/features/presentation.png" alt="" class="w-100 h-100">
              </div>
              <h4 class="card-title">Advanced presentation</h4>
            </div>
          </div>

          <div class="card about-card text-center bg-transparent border-0">
            <div class="card-body">
              <div class="card-img-top mx-auto my-3">
                <img src="../assets/features/impress.png" alt="" class="w-100 h-100">
              </div>
              <h4 class="card-title">Impress & attract anyone</h4>
            </div>
          </div>

          <div class="card about-card text-center bg-transparent border-0">
            <div class="card-body">
              <div class="card-img-top mx-auto my-3">
                <img src="../assets/features/looks.png" alt="" class="w-100 h-100">
              </div>
              <h4 class="card-title">Develop stunning looks</h4>
            </div>
          </div>

          <div class="card about-card text-center bg-transparent border-0">
            <div class="card-body">
              <div class="card-img-top mx-auto my-3">
                <img src="../assets/features/classy.png" alt="" class="w-100 h-100">
              </div>
              <h4 class="card-title">Become classy & royal</h4>
            </div>
          </div>

          <div class="card about-card text-center bg-transparent border-0">
            <div class="card-body">
              <div class="card-img-top mx-auto my-3">
                <img src="../assets/features/confidence.png" alt="" class="w-100 h-100">
              </div>
              <h4 class="card-title">Boost your confidence</h4>
            </div>
          </div>

          <div class="card about-card text-center bg-transparent border-0">
            <div class="card-body">
              <div class="card-img-top mx-auto my-3">
                <img src="../assets/features/discipline.png" alt="" class="w-100 h-100">
              </div>
              <h4 class="card-title">Discipline for success</h4>
            </div>
          </div>

        </div>

        <h4 class="text-center mt-5">Only limited registrations available</h4>
        <button @click="buyNow" class="btn buy-btn">
          <div class="spinner-border mx-2 my-0" v-if="loading" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <span v-else>Buy Now</span>
        </button>


      </div>

    </div>
</template>

<script>
  import axios from '../axios';

  export default {
    data() {
      return {
        user: null,
        loading: false
      }
    },
    mounted() {
      this.user = this.$store.getters.user;
      console.log(this.user.uid);
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

    }

  }
</script>

<style scoped>
  .jumbotron {
    padding-top: 0;
    padding-bottom: 6em;
  }
  
  .curve.course > .row {
    margin-top: 6em;
  }
  .about-course {
    padding-top: 8em;
    padding-bottom: 2em;
  }
  .about-card {
    width: 300px;
    margin: 10px;
  }
  .card-img-top {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 1024px) {
    .package.standard {
      margin: 50px !important;
    }

  }

</style>
