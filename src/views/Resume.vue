<template>
  <div>
    <!-- <button class="d-block btn btn-secondary mx-auto my-5" @click="generate">Generate</button> -->
    <button @click="generate" type="submit" class="d-block btn btn-secondary mx-auto my-5">
      <div class="spinner-border mx-2 my-0" v-if="loading" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <span v-else>Generate</span>
    </button>    

    <h4 class="text-center mb-5">The resume will be emailed to you within 24 hours</h4>
    
    <div id="resume">
      <div class="">

        <div class="card resume-header bg-dark text-white">
          <div class="card-body">
            <div class="row">
              <div class="resume-img-section">
                <div class="mx-auto mt-2 resume-img border rounded-circle"></div>
              </div>
              <div class="resume-name-section my-auto">
                <h1 class="resume-name">{{ user.firstName }} {{ user.lastName }}</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="card resume-side">
            <div class="card-body">
              <div class="contact">
                <h2 class="title text-muted">CONTACT</h2>
                <p>{{ user.address.addressLine }} <br> {{ user.address.city }}, {{ user.address.state }} - {{ user.address.zip }} </p>
                <p> {{ user.email }} </p>
                <p>+91 {{ user.contact }}</p>
              </div>
              <div class="personal">
                <h2 class="title text-muted">PERSONAL INFO</h2>
                <!-- <p>Extremely motivated to constantly develop my skills and grow professionally. 
                  I am confident in my ability to come up with interesting ideas for unforgettable marketing campaigns.</p> -->
                <p>{{ user.aboutMe }}</p>
              </div>
              <div class="achievements">
                <h2 class="title text-muted">ACHIEVEMENTS</h2>
                <ul>
                  <li v-for="achievement in user.achievements" :key="achievement.title">
                    <h4> {{ achievement.title }} </h4>
                    <p> {{ achievement.desc }} </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card resume-main">
            <div class="card-body">
              <div class="education">
                <h2 class="title text-muted">EDUCATION</h2>

                <div v-for="school in user.education" :key="school.schoolName">
                  <p><span> {{ school.schoolName }} </span> ({{ school.startYear }} - {{ school.endYear }})</p>
                  <p class="small">{{ school.degree }}, {{ school.field }}</p>
                  <ul>
                    <li>{{ school.activities }}</li>
                  </ul>
                </div>
                
              </div>
              <div class="experience mt-5">
                <h2 class="title text-muted">EXPERIENCE</h2>
                
                <div v-for="job in user.experience" :key="job.companyName">
                  <p><span>{{ job.companyName }}</span>, {{ job.title }}</p>
                  <p class="small">{{ job.startDate }} - {{ job.endDate }}</p>
                  <ul>
                    <li>Job description through the tags</li>
                  </ul>
                </div>

              </div>
              <div class="skills mt-5">
                <h2 class="title text-muted">SKILLS</h2>

                <div class="row justify-content-start">
                  <div class="skill m-3" v-for="skill in user.skills" :key="skill.skill">
                    <span class="my-2"> {{ skill.skill }} </span>
                    <div class="progress" style="width: 200px">
                      <div class="progress-bar" role="progressbar" :style="'width: ' + skill.level/5*100 + '%'" :aria-valuenow="skill.level/5*100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import firebase from '../firebase';
  import axios from '../axios';
  import jsPDF from 'jspdf';
  import html2canvas from 'html2canvas';
  import map from '../skills-map';

  export default {
    data() {
      return {
        user: {
          id: '',
          email: '',
          loading: false,
          firstName: 'First',
          lastName: 'Last',
          email: 'test@testing.com',
          contact: 9999999999,
          address: {
            addressLine: 'Address line 1',
            city: 'New Delhi',
            state: 'Delhi',
            zip: '110059',
          },
          aboutMe: '',
          education: [
            {
              schoolName: 'School Name',
              degree: 'B.Tech',
              field: 'CSE',
              startYear: 2017,
              present: false,
              endYear: 2021,
              activities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
              schoolName: 'School Name',
              degree: 'High School',
              field: 'Science PCM',
              startYear: 2014,
              present: false,
              endYear: 2017,
              activities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
          ],
          experience: [
            {
              title: 'Title',
              companyName: 'Company Name',
              startDate: 'May 2019',
              endDate: 'July 2019',
              present: false,
              desc: ''
            },
            {
              title: 'Title',
              companyName: 'Company Name',
              startDate: 'May 2019',
              endDate: 'July 2019',
              present: false,
              desc: ''
            },
          ],
          skills: [
            {
              skill: 'C++',
              level: 5
            },
            {
              skill: 'JavaScript',
              level: 3
            },
            {
              skill: 'MS Office',
              level: 4
            },
          ],
          achievements: [
            {
              title: 'First position in HackDelhi',
              desc: 'Worked on an AI project'
            },
            {
              title: 'Third position in HackDTU',
              desc: 'Worked on an ML project'
            },
          ]
        }

      }
    },
    methods: {
      async generate() {
        // await firebase.database().ref('users').orderByChild('id').once('value', snap => {
        //   this.user = snap.val();
        //   this.user = this.user['-LiCMWrIFKu1k4TEhapU'];
        //   console.log(JSON.stringify(this.user));          
        //   this.checkPresent();
        //   this.fillAbout();
        // })  
        this.loading = true;
        await axios('getUserData/' + this.id)
          .then(res => {
            console.log(res.data);
            this.user = res.data.details;
            this.checkPresent();
            this.fillAbout();
          });

        let resume = document.getElementById('resume');   
        let height = resume.clientHeight/7.0142;
        resume.classList.remove('hide');
        html2canvas(resume).then(canvas => {
          let pdf = new jsPDF('p', 'mm', 'a4');
          pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, height, 'resume', 'SLOW');
          //pdf.save('Resume.pdf');
          const blob = pdf.output('blob');

          this.uploadFile(blob)
            .then(res => {
              console.log(res);
              this.loading = false;
              //this.sendEmail();
            });
          this.loading = false;
        });
      },
      uploadFile(file) {
        return new Promise(
          (resolve, reject) => {
            const upload = firebase.storage().ref()
              .child('users/' + this.email).put(file);
            upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
              () => {
                console.log('Uploaded');
              },
              (error) => {
                console.log('Error: ' + error);
                reject();
              },
              () => {
                // resolve(upload.snapshot.downloadURL);
                resolve();
              });
          });
      },

      // sendEmail() {
      //   const req = {
      //     userId: this.email
      //   }
      //   axios.post('sendEmail/', req)
      //     .then(res => {
      //       console.log(res);
      //     });
      // },

      checkPresent() {
        this.user.education.forEach(e => {
          if(e.present) {
            e.endYear = 'Present';
          }
        });
        this.user.experience.forEach(e => {
          if(e.present) {
            e.endDate = 'Present';
          }
        });
      },

      fillAbout() {
        this.user.aboutMe = '';
        this.user.professionalSkills.forEach(e => {
          this.user.aboutMe += map.get(e) + ' ';
        });
      }
    },
    mounted() {
      this.checkPresent();

      this.id = firebase.auth().currentUser.uid;
      this.email = firebase.auth().currentUser.email;
    }
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap');
  p {
    padding-left: 5px;
    margin: 0;
  }
  body {
    font-family: 'Lato' !important;
  }
  h1, h2 {
    font-family: 'Lato' !important;
    font-weight: 900;
  }
  h3, h4 {
    font-family: 'Lato' !important;
    font-weight: 700;
  }

  .title {
    padding: 10px 0;
  }
  .card {
    border-radius: 0;
  }
  .row {
    width: 100%;
    margin: 0 auto;
  }

  #resume {
    position: absolute;
    left: -1500px;
    width: 1480px;
    height: 2090px;
    font-size: 1.5em;
    margin: 20px;
  }
  .resume-header {
    height: 280px;
    background-image: url('../assets/bg.png');
    background-size: cover;
    background-position: center;
  }
  .resume-img-section {
    width: 35%;
  }
  .resume-img {
    width: 200px;
    height: 200px;
    background-color: rgb(240, 255, 254);
  }
  .resume-name-section {
    width: 65%;
  }
  .resume-name {
    font-size: 4em;
  }
  
  .resume-side {
    width: 32%;
    height: 2000px;
    background-color: rgb(241, 241, 241);
  }
  .resume-main {
    width: 68%;
  }

  .personal {
    margin-top: 50px;
  }
  .achievements {
    margin-top: 50px;
  }
  .achievements > ul {
    list-style-type: none;
    padding-left: 5px;
  }
  .education > div > p > span {
    font-weight: 700;
    font-size: 1.2em;
  }

  .title {
    position: relative;
  }

  .title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5px;
    width: 3em;
    background-color: var(--primary);
  }

  .experience > div > p > span {
    font-weight: 700;
    font-size: 1.2em;
  }
  .small {
      font-size: 0.8em;
  }
  .progress {
    height: 30px;
  }
  .progress > .progress-bar {
    background-color: var(--secondary);
  }
</style>