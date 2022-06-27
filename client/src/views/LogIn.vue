<template>
    <div class="LogIn h-screen xl:pb-0  bg-center bg-cover"  :style="{ backgroundImage: `url(${image})` }">
        <div class="md:px-10 lg:px-16 xl:px-32">
        <div class="px-6">   
            <router-link to="/" class="image-div cursor-pointer flex items-center h-16">
                <img :src="logo"/>
            </router-link>
        </div>
        <div class="px-6 my-14  w-full  xl:w-10/12 sm:mt-14 xl:mt-8 xl:my-0">
        <div class="flex sm:justify-end">
        <div class="w-full sm:w-8/12 xl:w-7/12">
                <div class="relative  bg-white py-6 md:py-10 sm:py-5 px-6 sm:px-10 lg:px-12  Form">
                    <div class="flex justify-between">
                        <router-link to="/LogIn">
                        <h1 class="text-black font-serif font-medium sm:font-semibold lg:font-bold ">Log In</h1>
                        </router-link>
                        <router-link to="/SignUp">
                        <h2 :style="{color: `${textColor}`}" class="font-medium font-serif md:font-semibold lg:font-bold ">Sign Up</h2>
                        </router-link>
                    </div>
                    <div :style="{color: `${logintextColor}`}" class="pt-4 font-serif font-normal text-xs">Login to your account</div>
                    <form @submit.prevent="loginUser" class="">
                      <LandingPageTopSvg class="hidden  xl:block absolute -right-12 -top-3"/>
                      <TopLandingPageSvg class="hidden z-50  xl:block absolute -left-5"/>
                      <LandingPageCenterSvg class="hidden z-50 xl:block absolute bottom-20 -right-16"/>
                        
                        <div class="relative flex flex-col mt-4">
                            <label class=" text-xs font-serif  font-normal mb-1">Email</label>
                            <input v-model="email" type="email" class="h-9 font-serif text-black outline-none text-xs font-normal pl-10 pr-4" placeholder="Enter email address" required/>
                            <img class="absolute top-8 md:top-8 xl:top-8 left-3" :src="svg1"/>
                        </div>
                        <div class="relative flex flex-col mt-4">
                            <label class=" text-xs font-serif  font-normal mb-1">Password</label>
                            <input v-model="password" type="password" class="h-9 font-serif text-black outline-none text-xs font-normal pl-10 pr-4" placeholder="Enter password" required/>
                            <img class="absolute top-7 md:top-7 xl:top-7 left-3" :src="svg2"/>
                        </div>
                        <div class="relative flex items-center spACE-x-2 mt-1 sm:mt-2">
                            <img v-show="!awesome" @click="toggleAwesome2"  :src="ticked" class=" font-serifleft-0 top-0 right-0 bottom-0"/>
                            <div @click="toggleAwesome" v-show="awesome" class=" font-serifawesome2 rounded-sm border-2 border-dotted bg-white h-4 w-4"></div>
                            <div class="ml-1.5 text-xs font-serif ">Remember me</div>
                        </div>
                        <div class="flex justify-center items-center w-full px-6 mt-4 lg:mt-6">
                            <input type="submit" class="cursor-pointer outline-none font-serif h-11 w-full flex justify-center items-center text-white" value="Login"/>
                        </div>
                    </form>
                    <div class="text-xs font-serif  mt-2 mx-auto flex justify-center">Don't have an account? 
                        <span class=" font-serif" :style="{color: `${textColor}`}">
                            <router-link to="/SignUp">&nbsp;  Register
                            </router-link>
                        </span>
                    </div>
                    <div>
                        <span class="text-xs font-serif  mt-2 mx-auto flex justify-center" :style="{color: `${textColor}`}">
                            <router-link to="/ForgotPassword">&nbsp;  Forgot Password?    
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
import { mapActions } from 'vuex'
// import validations from '../utils/validations'
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
            email: "",
            password: "",
            textColor: 'rgba(226, 184, 94, 1)',
            logintextColor: '#4F4F4F',
            image: require('../assets/images/GoldenHeartBg.png'),
            svg: require('../assets/svgs/Vector1.svg'),
            svg1: require('../assets/svgs/Vector2.svg'),
            svg2: require('../assets/svgs/Vector3.svg'),
            ticked: require('../assets/svgs/Group118.svg'),
            awesome: true,
            // valid: false
        }
    },
    computed: {
        full_name: {
        get() {
            return `${this.first_name} ${this.surname}`;
        },
        set(newValue) {
            const m = newValue.match(/(\S*)\s+(.*)/);

            this.firstName = m[1];
            this.lastName = m[2];
        }
        }
    },
    methods: {
       
        toggleAwesome() {
            this.awesome = !this.awesome
        },
        toggleAwesome2() {
            this.awesome = !this.awesome
        },
        ...mapActions(["login"]),
        loginUser() {
            let user = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            this.login(user)
            .then(res => {
                if(res.data.success) {
                    this.$router.push("/goldenHeartFunaab");
                }
            }).catch(err => {
             console.log(err);
         });
        },
        // setName: function(first_name,surname ) {
        //     this.first_name = first_name,
        //     this.surname = surname,
        // }
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