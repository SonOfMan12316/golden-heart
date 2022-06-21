<template>
    <div class="LogIn h-screen xl:h-screen pb-10 xl:pb-0  bg-center bg-cover"  :style="{ backgroundImage: `url(${image})` }">
        <div class="md:px-10 lg:px-16 xl:px-32 py-4">
        <div class="px-6">   
            <router-link to="/" class="image-div cursor-pointer flex items-center h-16">
                <img :src="logo"/>
            </router-link>
        </div>
        <div class="px-6 my-10 w-full  xl:w-10/12 sm:mt-14 xl:mt-8 xl:my-0">
        <div class="flex sm:justify-end">
        <div class="w-full sm:w-8/12 xl:w-7/12">
                <div class="relative  bg-white py-6 md:py-10 sm:py-5 px-6 sm:px-10 lg:px-12 Form">
                    <div class="flex justify-between">
                        <router-link to="/LogIn">
                        <h1 class="text-black font-serif font-medium md:font-semibold lg:font-bold ">Forgot Password</h1>
                        </router-link>
                        
                    </div>
                    <div :style="{color: `${logintextColor}`}" class="py-4 font-normal font-serif text-xs lg:w-10/12">Having trouble to login? enter your email to retrieve your password. </div>
                    <form class="">
                      <LandingPageTopSvg class="hidden  xl:block absolute -right-12 -top-3"/>
                      <TopLandingPageSvg class="hidden z-50  xl:block absolute -left-5"/>
                      <LandingPageCenterSvg class="hidden z-50 xl:block absolute bottom-20 -right-16"/>
                        <div class="relative flex flex-col mt-2 sm:mt-4">
                            <label class=" font-serif text-xs  font-normal mb-1">Email</label>
                            <input type="email" class="h-9 text-black outline-none text-xs font-serif font-normal pl-10 pr-4" placeholder="Enter email address"/>
                            <img class="absolute top-8 md:top-9 xl:top-8 left-3" :src="svg1"/>
                        </div>
                        
                        <!-- <div class="relative flex items-center spACE-x-2 mt-1">
                            <img v-show="!awesome" @click="toggleAwesome2"  :src="ticked" class=" font-serifleft-0 top-0 right-0 bottom-0"/>
                            <div @click="toggleAwesome" v-show="awesome" class=" font-serifawesome2 rounded-sm border-2 border-dotted bg-white h-4 w-4"></div>
                            <div class="ml-1.5 text-xs font-serif">Remember me</div>
                        </div> -->
                        <div class="flex justify-center items-center w-full px-6 mt-2 sm:mt-4 lg:mt-6">
                        <button type="submit" class=" font-serif h-11 w-full flex justify-center items-center text-white">Reset Password</button>
                        </div>
                    </form>
                    <div class="text-xs font-serif mt-2 flex justify-center">Already have an account?                        
                        <span :style="{color: `${textColor}`}">
                            <router-link to="/LogIn">  Log In
                            </router-link>
                        </span>
                        
                    </div>
                </div>
            </div>
            </div>
      </div>
      </div>
    </div>
</template>

<script>
import LandingPageCenterSvg from '../components/SvgComponent/LandingPageCenterSvg.vue'
import TopLandingPageSvg from '../components/SvgComponent/TopLandingPageSvg.vue'
import LandingPageTopSvg from '../components/SvgComponent/LandingPageTopSvg.vue'
export default {
  components: {
    Navigation,
     LandingPageCenterSvg,
     TopLandingPageSvg,
     LandingPageTopSvg
  },
      data() {
        return {
            logo: require('../assets/images/GoldenHeartLogo.png'),
            textColor: 'rgba(226, 184, 94, 1)',
            logintextColor: '#4F4F4F',
            image: require('../assets/images/GoldenHeartBg.png'),
            svg: require('../assets/svgs/Vector1.svg'),
            svg1: require('../assets/svgs/Vector2.svg'),
            svg2: require('../assets/svgs/Vector3.svg'),
            ticked: require('../assets/svgs/Group118.svg'),
            awesome: false
        }
      },
      methods: {
        toggleAwesome() {
            this.awesome = !this.awesome
        },
        toggleAwesome2() {
            this.awesome = !this.awesome
        }
    }
        
}
</script>

<style scoped>
h1 {
  border-bottom: 2px solid #000;
}
h2:hover {
    border-bottom: 2px solid rgba(226, 184, 94, 1);
}


.awesome2 {
    border-color: #E2B85E;
}
button {
    background: #E2B85E;
    border-radius: 45px;
}
.Form {
    box-shadow: 0px 10.5969px 17.6614px rgba(159, 181, 201, 0.25);
    border-radius: 14.1291px;
}

input {
    background: #FFFFFF;
border: 0.883072px solid rgba(0, 0, 0, 0.09);
box-sizing: border-box;
border-radius: 10px;
color: black;
}

::placeholder {
    color: black;
    font-size: 0.8rem;
    font-weight: 400;
}
</style>