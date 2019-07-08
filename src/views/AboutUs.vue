<template>
    <div>
      <!-- Jumbotron -->
      <div class="jumbotron jumbotron-fluid">
        <div class="jumbo-text container">
          <div class="heading text-center">
            <h1><span>About </span> Us</h1>
            <p class="text-muted text-sm">The services we provide are unparalleled</p>
          </div>
        </div>
      </div>

      <!-- PRT -->
      <div class="">
        <div class="card about main curve"></div>

        <div class="about-img-section main row justify-content-center container mx-auto">
          <div class="about-img main">
            <img src="../assets/prt.jpg" alt="about-img" class="">
          </div>
        
          <div class="col-md-6">
            <h4 class="about-name main">PRT Global Solutions</h4>
            <p class="about-text main">PRT GLOBAL SOLUTIONS is a personal and professional growth, 
              training and consultancy company-an educational corporation committed to the fundamental 
              principle that people have the possibility of success, fulfilment and greatness.
              <br>
              We offer Entrepreneurship Programs, seminars, workshops and training courses that are 
              innovative, effective and immediately creates a desired transformation in the mental framework 
              and skillset for success. The ideas,insights and distinctions on which our trainings are based 
              and the results it has produced make us a leader and innovator in the field of personal development.
              <br>
              The organisation was established as an initiative aimed at securing the much needed significance 
              for entrepreneurship and leadership as a subject of learning and helping people develop professional 
              skills to grow and achieve their desired goals. Since then, We are a forerunner in promoting entrepreneurship, 
              leadership and skill based education in the world.
              <br>
              The organisation works closely with high aimed professionals,educational institutions and corporates 
              with the objective of incorporating leadership and right skillset to accelerate their performance and 
              multiply their results.
            </p>
          </div>
        </div>
      </div>


        <div class="curve card contact-section">
          <div class="card-body row">

            <div class="card border-0 map col-sm-12 col-md-6">
              <div class="card-body">
                <div class="heading">
                  <h1><span>Where to </span> find us?</h1>
                </div>                    
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14030.334702711842!2d77.0964582!3d28.4619639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86913724f4788bf!2sPRT+Global+Solutions!5e0!3m2!1sen!2sin!4v1562573021767!5m2!1sen!2sin" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>                  </div>
                <p class="pl-4">820, PRT Gloabl Solutions, <br> Golf Course Road, Sec-42, <br> Gurugram Harayana</p>
            </div>
            <div class="card border-0 contact my-auto col-sm-12 col-md-6">
              <div class="d-block card-body">
                <div class="heading">
                  <h1><span>Contact </span> Us</h1>
                </div>                    
                <a href="mailto:prtglobalsolutions@gmail.com">prtglobalsolutions@gmail.com</a>
              </div>
            </div>

          </div>
        </div>

      
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .heading {
      z-index: 1;
  }
  .heading > h1 > span {
      color: var(--primary);
  }

  /* Jumbotron */
  .jumbotron {
      padding-bottom: 18em;
  }

  /* About */
  .about.main.curve {
      height: 45em; 
      margin-top: -15em;
      margin-bottom: -45em;
  }
  .about-img-section {
      position: relative;
      margin-top: -5em;
      margin-bottom: -20em;
      z-index: 1;
  }

  .about {
      padding-top: 100px;
      padding-bottom: 300px;
  }
  .about:nth-child(even) {
      background-color: var(--dark);
      color: white;
  }
  .about-img {
      width: 280px;
      height: 480px;
      background-color: rgb(224, 246, 255)
  }

  .about-text, .about-name {
      padding-left: 20px;
  }

  /* Main About */
  .about-img-section.main {
      position: relative;
      margin-top: -15em;
      z-index: 1;
  }
  .about.main {
      background-color: white;
      color: black;
  }

  .about-img.main {
      display: block;
      width: 400px;
      height: 475px;
      background-color: rgb(224, 246, 255)
  }
  .about-img > img {
      width: 100%;
      height: 100%;
      box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.25);
  }
  .about-name.main {
      color: white;
      padding-top: 40px;
      padding-bottom: 60px;
  }
</style>
