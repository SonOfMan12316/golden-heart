<template>
    <div class="LogIn h-full xl:h-full  xl:pb-24  bg-center bg-cover"  :style="{ backgroundImage: `url(${image})` }">
        <div class="md:px-10 lg:px-16 xl:px-32">
        <div class="px-6">
            <router-link to="/" class="image-div cursor-pointer flex items-center h-16">
                <img :src="logo"/>
            </router-link>
        </div>
        <div class="px-6 mt-14 pb-14 w-full xl:w-10/12 sm:mt-14 xl:mt-8">
        <div class="flex sm:justify-end">
        <div class="w-full sm:w-8/12 xl:w-7/12">
                <div class="relative bg-white w-full py-6 md:py-10 px-6 sm:px-10 lg:px-12  Form">
                    <div class="flex justify-between">
                        <router-link to="/LogIn">
                        <h1 class="text-black font-serif font-medium md:font-semibold lg:font-bold ">Log In</h1>
                        </router-link>
                        <router-link to="/SignUp">
                        <h2 :style="{color: `${textColor}`}" class="font-medium font-serif md:font-semibold lg:font-bold ">Sign Up</h2>
                        </router-link>
                    </div>
                    <div :style="{color: `${logintextColor}`}" class="py-4 font-normal text-xs font-serif">Make sure you fill out this with your information to register</div>
                    
                    <form @submit.prevent="registerUser" class="">
                      <LandingPageTopSvg class="hidden  xl:block absolute -right-12 -top-3"/>
                      <TopLandingPageSvg class="hidden z-50  xl:block absolute -left-5"/>
                      <LandingPageCenterSvg class="hidden z-50 xl:block absolute bottom-20 -right-16"/>
                        <div class="relative flex flex-col">
                            <label class=" text-xs  font-serif  font-normal mb-1">Name</label>
                            <input v-model="name" type="text" class="h-9 font-serif text-black outline-none text-xs font-normal pl-10 pr-4" placeholder="Enter your full name" required/>
                            <img class="absolute top-7 md:top-7 xl:top-7 left-3" :src="svg"/>
                        </div>
                        <div class="relative flex flex-col mt-2 sm:mt-4">
                            <label class=" text-xs  font-serif  font-normal mb-1">Level</label>
                            <input v-model="level" type="number" class="h-9 font-serif text-black outline-none text-xs font-normal pl-10 pr-4" placeholder="Enter your current level" required/>
                            <img class="absolute top-7 md:top-7 xl:top-7 left-3" :src="svg"/>
                        </div>
                        <div class="relative flex flex-col mt-2 sm:mt-4">
                            <label class=" text-xs  font-serif  font-normal mb-1">Faculty</label>
                            <input v-model="faculty" type="text" class="h-9 font-serif text-black outline-none text-xs font-normal pl-10 pr-4" placeholder="Enter your faculty" required/>
                            <img class="absolute top-7 md:top-7 xl:top-7 left-3" :src="svg"/>
                        </div>
                        <div class="relative flex flex-col mt-2 sm:mt-4">
                            <label class=" text-xs  font-serif  font-normal mb-1">Department</label>
                            <input v-model="department" type="text" class="h-9 font-serif text-black outline-none text-xs font-normal pl-10 pr-4" placeholder="Enter your department" required/>
                            <img class="absolute top-7 md:top-7 xl:top-7 left-3" :src="svg"/>
                        </div>
                        <div class="relative flex flex-col mt-2 sm:mt-4">
                            <label class=" text-xs  font-serif font-normal mb-1">Email</label>
                            <input v-model="email" type="email" class="h-9 font-serif text-black outline-none text-xs font-normal pl-10 pr-4" placeholder="Enter email address" required/>
                            <img class="absolute top-7 md:top-7 xl:top-8 left-3" :src="svg1"/>
                        </div>
                        <div class="relative flex flex-col mt-2 sm:mt-4">
                            <label class=" text-xs  font-serif font-normal mb-1">Password</label>
                            <input v-model="password" type="password" class="h-9 font-serif text-black outline-none text-xs font-normal pl-10 pr-4" placeholder="Enter password" required/>
                            <img class="absolute top-6 md:top-7 xl:top-7 left-3" :src="svg2"/>
                        </div>
                        <div class="relative flex items-center spACE-x-2 mt-2 sm:mt-4">
                            <img v-show="!awesome" @click="toggleAwesome2"  :src="ticked" class=" font-serif font-serifleft-0 top-0 right-0 bottom-0"/>
                            <div @click="toggleAwesome" v-show="awesome" class="awesome2 rounded-sm border-2 border-dotted bg-white h-4 w-4"></div>
                            <div class="ml-1.5 text-xs font-serif">Remember me</div>
                        </div>
                        <div class="flex justify-center items-center w-full px-6 mt-2 sm:mt-4 lg:mt-6">
                        <input type="submit" class="cursor-pointer outline-none font-serif h-11 w-full flex justify-center items-center text-white" value="SignUp" />
                        </div>
                    </form>
                    <div class="text-xs font-serif mt-2 mx-auto flex justify-center">Already have an account? &nbsp;
                         <router-link to="/LogIn">
                        <span :style="{color: `${textColor}`}"> Sign in </span>
                         </router-link>
                        </div>
                </div>
            </div>
            </div>
      </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import Navigation from '../components/Navigation.vue'
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
            name: "",
            level: "",
            faculty: "",
            department: "",
            email: "",
            password: "",
            confirm_password: "",
            textColor: 'rgba(226, 184, 94, 1)',
            logintextColor: '#4F4F4F',
            image: require('../assets/images/GoldenHeartBg.png'),
            svg: require('../assets/svgs/Vector1.svg'),
            svg1: require('../assets/svgs/Vector2.svg'),
            svg2: require('../assets/svgs/Vector3.svg'),
            ticked: require('../assets/svgs/Group118.svg'),
            awesome: true
        }
      },
      methods: {
        toggleAwesome() {
            this.awesome = !this.awesome
        },
        toggleAwesome2() {
            this.awesome = !this.awesome
        },
        ...mapActions(["register"]),
        registerUser() {
            let user = {
                name: this.name,
                level: this.level,
                faculty: this.faculty,
                department: this.department,
                password: this.password,
                confirm_password: this.confirm_password,
                email: this.email
            };
            this.register(user).then(res => {
                if(res.data.success) {
                    this.$router.push("/LogIn");
                }
            })
        }
    }
        
}
</script>

<style scoped>
h2 {
  border-bottom: 2px solid rgba(226, 184, 94, 1);
}
h1:hover {
    border-bottom: 2px solid #000;
}


.awesome2 {
    border-color: #E2B85E;
}
input[type=submit] {
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

