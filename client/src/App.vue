<template>
  <div>
    <Errors class="absolute top-10 right-1" v-if="error" :msg="error" />
    <router-view/>
  </div>
  
</template>
<script>
import { mapGetters } from 'vuex'

import Errors from './components/Errors.vue'
export default {
  // data(){
  //   return {
  //     error: true
  //   }
  // },
  components: {
    Errors
  }, 
  computed: {
    ...mapGetters(['error'])
  }
}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');

/* @font-face {
  font-family: 'Proxima Nova';
  src: local('Proxima Nova')
  url('./assets/fonts/FontsFree-Net-proxima_nova_reg-webfont.ttf');
} */

body,
html {
  font-family: 'Open Sans';
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
