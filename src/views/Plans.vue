<template>
    <div>
      <!-- Jumbotron -->
      <div class="jumbotron jumbotron-fluid">
        <div class="jumbo-text container">
          <div class="heading text-center">
            <h2><span>Choose</span> <br>your plan</h2>
            <p class="text-muted text-sm">The services we provide are unparalleled</p>
          </div>
        </div>
      </div>

      <div class="card curve">
        <div class="row justify-content-center">
            <div class="card package standard">
              <div class="card-body">
                <h2 class="price">₹799</h2>
                <ul class="package-info align-middle pb-3 pt-2">
                  <li>Resume Building</li>
                  <li>Personality Development Course</li>
                </ul>
                <button @click="buyStudent" class="btn buy-btn">Buy Now</button>
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

        </div>
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
      let boltScript = document.createElement('script');    
      boltScript.setAttribute('id', "bolt");
      boltScript.setAttribute('src', "https://sboxcheckout-static.citruspay.com/bolt/run/bolt.min.js");
      boltScript.setAttribute('bolt-color', "e34524");
      boltScript.setAttribute('bolt-logo', "http://boltiswatching.com/wp-content/uploads/2015/09/Bolt-Logo-e14421724859591.png");
      document.head.appendChild(boltScript);

      this.user = this.$store.getters.getUser;
      this.payObj.email = this.user.email;
    },
    methods: {
      buyStudent() {
        axios.post('http://localhost:3000/', this.payObj)
          .then(res => {
            this.payObj.hash = res.data;
          });
        axios.get('http://localhost:3000/config')
          .then(res => {
            this.payObj.key = res.data;
          });  
        this.launchBOLT();
      },
      launchBOLT() {
        bolt.launch({
          key: this.payObj.key,
          txnid: this.payObj.key, 
          hash: this.payObj.key,
          amount: this.payObj.key,
          firstname: this.payObj.key,
          email: this.payObj.key,
          phone: this.payObj.key,
          productinfo: this.payObj.key,
          surl : 'http://localhost:8080/case-studies',
          furl: 'http://localhost:8080/case-studies'
        }, { responseHandler: function(BOLT) {
              console.log( BOLT.response.txnStatus );		
              if(BOLT.response.txnStatus != 'CANCEL')
              {
                //Salt is passd here for demo purpose only. For practical use keep salt at server side only.
                var fr = '<form action=\"'+$('#surl').val()+'\" method=\"post\">' +
                '<input type=\"hidden\" name=\"key\" value=\"'+BOLT.response.key+'\" />' +
                '<input type=\"hidden\" name=\"txnid\" value=\"'+BOLT.response.txnid+'\" />' +
                '<input type=\"hidden\" name=\"amount\" value=\"'+BOLT.response.amount+'\" />' +
                '<input type=\"hidden\" name=\"productinfo\" value=\"'+BOLT.response.productinfo+'\" />' +
                '<input type=\"hidden\" name=\"firstname\" value=\"'+BOLT.response.firstname+'\" />' +
                '<input type=\"hidden\" name=\"email\" value=\"'+BOLT.response.email+'\" />' +
                '<input type=\"hidden\" name=\"mihpayid\" value=\"'+BOLT.response.mihpayid+'\" />' +
                '<input type=\"hidden\" name=\"status\" value=\"'+BOLT.response.status+'\" />' +
                '<input type=\"hidden\" name=\"hash\" value=\"'+BOLT.response.hash+'\" />' +
                '</form>';
                var form = jQuery(fr);
                jQuery('body').append(form);
                form.submit();
              }
            },
            catchException: function(BOLT) {
              alert( BOLT.message );
            }
        });
      }

    }

  }
</script>

<style scoped>
  .jumbotron {
    padding-top: 2em;
    padding-bottom: 6em;
  }
  
  .curve > .row {
    margin-top: 10em;
  }

</style>
