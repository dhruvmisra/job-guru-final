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

          <div class="image col-md-12 col-lg-6 border">

          </div>

          <div class="card package standard mx-auto">
            <div class="card-body">
              <h2 class="price"> <del>₹9,999</del> ₹1,999</h2>
              <ul class="package-info align-middle pb-3 pt-2">
                <li>Resume Building</li>
                <li>Personality Development Course</li>
              </ul>
              <button @click="buyNow" class="btn buy-btn">Buy Now</button>
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
        <button @click="buyNow" class="btn buy-btn">Buy Now</button>



      </div>

    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        user: null,
        payObj: {
          txnid: 124,
          amount: 1,
          pinfo: 'P01',
          fname: 'tester',
          email: '',
          mobile: 9999999999
        }
      }
    },
    mounted() {
      this.user = this.$store.getters.getUser;
      this.payObj.email = this.user.email;
    },
    methods: {
      buyNow() {
        let req = {
          payment: {
            productinfo: 'Course',
            txnid: '129387',
            amount: '1',
            email: 'test@test.com',
            phone: '9999999999',
            lastname: 'abc',
            firstname: 'def',
            surl: 'http://192.168.0.116:3000/payu/success',
            furl: 'http://192.168.0.116:3000/payu/fail'
          },
          userData: {
            userId: 'cuikyb2nnIcgxmqVOf5QFETWuno2'
          }
        }

        console.log(JSON.stringify(req));
        axios.post('http://192.168.0.116:3000/v1/makePayment', req)
          .then(res => {
            console.log(res);
            window.open(res.data,'_blank');
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
    margin-top: 10em;
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

</style>
