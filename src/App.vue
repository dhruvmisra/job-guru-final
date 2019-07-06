<template>
  <div id="app">
    <app-navbar :key="$route.fullPath"></app-navbar>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'; 
  
  export default {
    components: {
      'app-navbar': Navbar
    },
    data() {
      return {

      }
    },
    created() {
      let jquery = document.createElement('script');    
      let popper = document.createElement('script');    
      let bootstrapJS = document.createElement('script');    
      jquery.setAttribute('src', "https://code.jquery.com/jquery-3.3.1.slim.min.js");
      jquery.setAttribute('integrity', "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo");
      jquery.setAttribute('crossorigin', "anonymous");

      popper.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js");
      popper.setAttribute('integrity', "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1");
      popper.setAttribute('crossorigin', "anonymous");

      bootstrapJS.setAttribute('src', "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js");
      bootstrapJS.setAttribute('integrity', "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM");
      bootstrapJS.setAttribute('crossorigin', "anonymous");
      document.head.appendChild(jquery);
      document.head.appendChild(popper);
      document.head.appendChild(bootstrapJS);

      this.$store.dispatch('setUser');

    }
  }
</script>

<style scoped>
  @import "./css/bootstrap.min.css";
  @import "./css/bootstrap-custom.css";
  /* @import "https://unpkg.com/aos@next/dist/aos.css"; */
  /* @import "./slick/slick.css";
  @import "./slick/slick-theme.css"; */
  @import "./css/styles.css";


</style>
