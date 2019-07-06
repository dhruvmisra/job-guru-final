<template>
  <div class="container">
    <form class="col-md-10 mt-5 mx-auto" v-on:submit.prevent="submit">

      <!-- Personal -->
      <section v-show="step == 1">
        <h4 class="heading">Step 1</h4>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="firstName">First Name</label>
            <input type="text" 
                    class="form-control" 
                    id="firstName" 
                    placeholder="First Name"
                    v-model="user.firstName">
          </div>
          <div class="form-group col-md-6">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" placeholder="Last Name" v-model="user.lastName">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="email">Email ID</label>
            <input type="email" class="form-control" id="email" placeholder="Email" v-model="user.email">
          </div>
          <div class="form-group col-md-6">
            <label for="contactNo">Contact Number</label>
            <input type="tel" class="form-control" id="contactNo" placeholder="Number" v-model="user.contact">
          </div>
        </div>

        <div class="form-group">
          <label for="Address">Address</label>
          <input type="text" class="form-control" id="Address" placeholder="Address" v-model="user.address.addressLine">
        </div>
        
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="city">City</label>
            <input type="text" class="form-control" id="city" v-model="user.address.city">
          </div>
          <div class="form-group col-md-4">
            <label for="state">State</label>
            <select id="state" class="form-control" v-model="user.address.state" placeholder="Choose">
              <option>Choose...</option>
              <option>New Delhi</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="zip">Zip</label>
            <input type="number" class="form-control" id="zip" v-model="user.address.zip">
          </div>
        </div>

        <div class="form-row">
          <input type="file" class="w-100" @change="onFileUpload">
        </div>

      </section>

      <!-- Professional Skills -->
      <section v-show="step == 2">
        <h4 class="heading">Step 2</h4>

        <h4 class="heading">Professional Skills</h4>
        <p>Choose no more than 5</p>
        <div class="card block" @click="professionalStateChange" :id="skill" v-for="skill in professionalSkills" :key="skill">
          <div class="card-body">
            {{ skill }}
          </div>
        </div>

        <div class="d-block spinner-border mx-auto my-5 text-info" v-if="professionalSkills == null" role="status">
          <span class="sr-only">Loading...</span>
        </div>

      </section>

      <!-- Education -->
      <section v-show="step == 3">
        <h4 class="heading">Step 3</h4>

        <h4 class="heading">Eduction</h4>
        <form v-for="item in user.education" :key="item">
          <div class="form-group">
            <label for="school">School/College</label>
            <input type="text" class="form-control" id="school" v-model="item.schoolName">
          </div>

          <div class="form-group">
            <label for="degree">Degree</label>
            <input type="text" class="form-control" id="degree" v-model="item.degree">
          </div>

          <div class="form-group">
            <label for="field">Field of Study</label>
            <input type="text" class="form-control" id="field" v-model="item.field">
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="startYear">Start Year</label>
              <input type="number" class="form-control" id="startYear" v-model="item.startYear">
            </div>
            <div class="form-group col-md-6" v-show="!item.present">
              <label for="endYear">End Year</label>
              <input type="number" class="form-control" id="endYear" v-model="item.endYear">
            </div>
          </div>
          <div class="form-check text-center">
            <input class="form-check-input" type="checkbox" value="" id="presentEdu" v-model="item.present">
            <label class="form-check-label" for="presentEdu">
              Present
            </label>
          </div>
          
          <div class="form-group">
            <label for="activities">Activities and Societies</label>
            <textarea name="activities" id="activities" rows="5" class="form-control" v-model="item.activities"></textarea>
          </div>
          <hr class="my-5">
        </form>
        
        <button type="button" @click="addEducation" class="btn btn-small btn-outline-primary mb-5">Add Education</button>
      </section>

      <!-- Experience -->
      <section v-show="step == 4">
        <h4 class="heading">Step 4</h4>

        <h4 class="heading">Experience</h4>
        <form v-for="item in user.experience" :key="item">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" v-model="item.title">
          </div>

          <div class="form-group">
            <label for="companyName">Company Name</label>
            <input type="text" class="form-control" id="companyName" v-model="item.companyName">
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="startDate">Start Date</label>
              <input type="date" class="form-control" id="startDate" v-model="item.startDate">
            </div>
            <div class="form-group col-md-6" v-show="!item.present">
              <label for="endDate">End Date</label>
              <input type="date" class="form-control" id="endDate" v-model="item.endDate">
            </div>
          </div>
          <div class="form-check text-center">
            <input class="form-check-input" type="checkbox" value="" id="presentExp" v-model="item.present">
            <label class="form-check-label" for="presentExp">
              Present
            </label>
          </div>
          
          <div class="form-group mt-2">
            <label for="desc">Description</label>
            <textarea name="activities" id="desc" rows="5" class="form-control" v-model="item.desc"></textarea>
          </div>
          <hr class="my-5">
        </form>

        <button type="button" @click="addExperience" class="btn btn-small btn-outline-primary mb-5">Add Experience</button>
      </section>

      <!-- Skills -->
      <section v-show="step == 5">
        <h4 class="heading">Step 5</h4>

        <h4 class="heading">Skills</h4>

        <div class="card block" @click="skillStateChange" :id="skill" v-for="skill in skills" :key="skill">
          <div class="card-body">
            {{ skill }}
          </div>
        </div>

        <div class="d-block spinner-border mx-auto my-5 text-info" v-if="skills == null" role="status">
          <span class="sr-only">Loading...</span>
        </div>



        <form class="form-inline my-3" v-for="item in skillSelected" :key="item">
          <div class="form-group col-sm-3">
            <label for="skill">{{ item.skill }}</label>
          </div>

          <div class="form-group mx-3" >
            <label for="level">Level: </label>
            <input type="range" class="custom-range mx-sm-3" min="0" max="5" id="level" v-model="item.level">
          </div>

        </form>
      </section>

      <!-- Achievements -->
      <section v-show="step == 6">
        <h4 class="heading">Step 6</h4>

        <h4 class="heading">Achievements</h4>

        <form class="form-group my-3" v-for="item in user.achievements" :key="item">
          <div class="form-group">
            <label for="achievement">Title</label>
            <input type="text" class="form-control" id="achievement" v-model="item.title">
          </div>

          <div class="form-group mt-2">
            <label for="achievement-desc">Description</label>
            <textarea name="activities" id="achievement-desc" rows="5" class="form-control" v-model="item.desc"></textarea>
          </div>
          <hr class="my-5">
        </form>

        <button type="button" @click="addAchievement" class="btn btn-small btn-outline-primary mb-5">Add Achievement</button>

      </section>


    </form>

    <div class="row justify-content-center">
      <button type="button" @click="prevStep" v-if="step != 1" class="btn btn-secondary m-2">Previous</button>
      <button type="button" @click="nextStep" v-if="step != totalSteps" class="btn btn-secondary m-2">Next</button>
    </div>

    <button type="submit" @click="submit" class="d-block btn btn-primary my-5 mx-auto">Generate</button>

  </div>
</template>

<script>  
  import axios from 'axios'; 
  import firebase from '../firebase';
  
  export default {
    data() {
      return {
        fileSelected: null,
        professionalSkills: null,
        professionalSelected: [],
        skills: null,
        skillSelected: [],
        step: 1,
        totalSteps: 6,
        user: {
          firstName: '',
          lastName: '',
          email: '',
          contact: null,
          address: {
            addressLine: '',
            city: '',
            state: '',
            zip: '',
          },
          professionalSkills: [],
          education: [],
          experience: [],
          skills: [],
          achievements: []
        }
      }
    },

    created() {
      setTimeout(() => {
        axios.get('http://localhost:4000/resume-form')
          .then(res => {
            this.professionalSkills = res.data.professionalSkills;
            this.skills = res.data.skills;
          });
      },2000);
    },

    methods: {
      submit() {
        this.user.userId = Date.now();
        console.log(this.user);
        firebase.database().ref('users/' + this.user.userId).set(this.user);
      },

      addSkill() {
        this.user.skills.push({
          skill: '',
          level: 1
        });
      },

      addEducation() {
        this.user.education.push({
          schoolName: '',
          degree: '',
          field: '',
          startYear: 2019,
          present: false,
          endYear: 0,
          activities: ''
        });
      },

      addExperience() {
        this.user.experience.push({
          title: '',
          companyName: '',
          location: '',
          startDate: '',
          endDate: '',
          present: false,
          desc: ''
        });
      },

      addAchievement() {
        this.user.achievements.push({
          title: '',
          desc: ''
        })
      },

      nextStep() {
        if(this.step == 2) {
          this.user.professionalSkills = this.professionalSelected;
        }
        else if(this.step == 5) {
          this.user.skills = this.skillSelected;
        }
        this.step++;
      },

      prevStep() {
        this.step--;
      },

      optionStateChange(event) {
        let option = event.currentTarget;
        if(option.classList.contains('block-selected')) {
          option.classList.remove('block-selected');
          let i = this.interests.indexOf(option.id);
          this.interests.splice(i, 1);

        } else {
          option.classList.add('block-selected');
          this.interests.push(option.id);
        }
      },

      skillStateChange(event) {
        let skill = event.currentTarget;
        if(skill.classList.contains('block-selected')) {
          skill.classList.remove('block-selected');
          let i = this.skillSelected.indexOf(skill.id);
          this.skillSelected.splice(i, 1);

        } else {
          skill.classList.add('block-selected');
          this.skillSelected.push({
            skill: skill.id,
            level: 1
          });
        }
      },

      professionalStateChange(event) {
        let professional = event.currentTarget;
        if(professional.classList.contains('block-selected')) {
          professional.classList.remove('block-selected');
          let i = this.professionalSelected.indexOf(professional.id);
          this.professionalSelected.splice(i, 1);

        } else {
          professional.classList.add('block-selected');
          this.professionalSelected.push(professional.id);
        }
      },

      onFileUpload(event) {
        console.log(event.target.files[0]);
        this.fileSelected = event.target.files[0];
      }
    }
  }
</script>

<style>
  .block {
    display: inline-block;
    width: fit-content;
    margin: 5px;
    padding: 0;
    font-size: 20px;
    color: rgb(0, 196, 0);
    border: 1px solid rgb(0, 196, 0);
    transition: transform 0.1s ease-out, background-color 0.2s;
    cursor: pointer;
  }
  .block:hover {
    transform: scale(1.05);
  }
  .block-selected {
    color: white;
    background-color: rgb(0, 196, 0);
  }
</style>
