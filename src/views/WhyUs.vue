<template>
  <div>
    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="jumbo-text container">
        <div class="heading text-center">
          <h1><span>What we can</span> <br> do for you</h1>
          <p class="text-muted text-sm">The services we provide are unparalleled</p>
        </div>
      </div>
    </div>

    <!-- Info -->
    <div class="card curve services">
      <div class="info card-body text-center">
        <p class="col-lg-6 mx-auto">According to a survey 80% of people in India aren’t aware about their job profiles and where to apply for correct job.</p>
        <img src="../assets/team.jpg" alt="" class="my-4" style="width: 500px;">
        <p class="col-lg-6 mx-auto">We at JobGuru help in solving this problem by building the perfect resume according to your knowledge/skills and 
        then our team of experts hunt for the jobs according to your preference and apply in the best companies.</p>
      </div>
    </div>

    <!-- Resume section -->
    <div class="card resume curve">
        <!-- <p class="fact col-md-6 mx-auto text-center text-muted">According to a study/research, it is found that over 
          65% of the candidates don’t get an interview call because of how their resume is built.</p> -->
          
      <div class="row justify-content-center pt-5">
        <div class="col-md-4 resume-img">
          <img src="../assets/resume.png" alt="" class="h-100">
        </div>

        <div class="col-md-5">
            <div class="heading">
              <h1><span>Building</span> <br>your resume</h1>
              <p class="text-muted text-sm">We create a professional looking resume just from the basic information 
                you provide to us.</p>
            </div>
            <ul class="points">
              <li>Fill the form to share us your basic information.</li>
              <li>Sit back and relax, our team will build the resume for you and email you within 24 hrs.</li>
            </ul>

            <p class="text-muted mt-5">Your future resume:</p>
            <button class="btn btn-info">View a template</button>
        </div>
      </div>
    </div>

    <!-- PD section -->
    <div class="card pd curve">
      <!-- <p class="fact col-md-6 mx-auto text-center text-muted">Over 70% of the candidates are rejected 
        within the initial five seconds of the interview because they lack the right attitude and 
        personality to impress the recruiter/interviewee.</p> -->
      
      <div class="row justify-content-center pt-5">
        <div class="col-md-5">
            <div class="heading">
              <h1><span>Get applied</span> <br>in companies</h1>
              <p class="text-muted text-sm">We will do the tough part for you.</p>
            </div>
            <ul class="points">
              <li>Our network of 10,000+ companies helps us in choosing the best fit job for you according to your profile.</li>
              <li>Our team will be sending your resumes to the companies and will inform you as soon as you are being called for interview.</li>
            </ul>

        </div>

        <div class="col-md-3">
          <img src="../assets/pd.png" alt="" class="resume-img">
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

.curve > .row {
  margin-top: 8em;
}

.curve:nth-child(odd) {
    background-color: var(--light);
}

/* Info */
.info {
  font-size: 1.2em;
  padding-top: 8em;
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


@keyframes fade-in-up {
    0% {
        opacity: 0;
        transform: rotate(30deg) translateY(100px);
    }
    70% {
        transform: rotate(30deg) translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: rotate(30deg) translateY(0);
    }
}

</style>
