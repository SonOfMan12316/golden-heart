<template>
    <div>
    <div class="goldenHeartFunaab h-screen pb-20 xl:pb-24  bg-center bg-cover"  :style="{ backgroundImage: `url(${image})` }">
        <header :class="{ 'scrolled-nav' : scrolledNav }" class="relative transition duration-500">
        <nav>
            <div class="px-6 sm:px-6 lg:px-16 lg:py-4 xl:px-32">
                <div class="nav-content flex items-center justify-between">
                    <div @click="reloadPage" class="image-div cursor-pointer flex items-center h-16">
                        <img :src="logo"/>
                    </div>
                    <div class="nav-links hidden lg:block" v-show="!mobile">
                        <ul class="flex items-center">
                            <li class="cursor-pointer text-white uppercase font-serif font-medium lg:text-sm text-base mx-6"><router-link to="/">Home</router-link></li>
                            <li @click="scrollToGallery" class="cursor-pointer text-white uppercase font-serif font-medium lg:text-sm mx-2"><router-link to="/">Gallery</router-link></li>
                            <li @click="scrollToWhoWeAre" class="cursor-pointer text-white uppercase font-serif font-medium lg:text-sm text-base mx-2 xl:mx-4"><router-link to="/">Who We Are</router-link></li>
                            <li @click="scrollToWhatWeDo" class="cursor-pointer text-white uppercase font-serif font-medium lg:text-sm text-base mx-2 xl:mx-4"><router-link to="/">What We Do</router-link></li>
                        </ul>
                    </div>
                    <div class="hidden lg:block lg:mr-3 xl:mr-0" v-show="!mobile">
                            <div class="flex items-center w-full rounded-3xl lg:px-2 lg:h-7">
                                <div class="flex items-center space-x-2">
                                    <router-link to="/Profile" class=" flex items-center cursor-pointer text-white uppercase font-serif font-medium lg:text-sm text-base p-2">
                                        <img :src="Profile"/>
                                    </router-link>
                                    <div>
                                        <img @click.prevent="logOutUser" :src="power" alt="Power Icon" class="my-4 mr-2 w-6 h-6 cursor-pointer"/>
                                    </div>
                                    <!-- <h1 class="text-white font-medium">Logout</h1> -->
                                </div>
                                <!-- <LoveSvg/> -->
                            </div>
                    </div>
                </div>
            </div>
            <div class="icon flex absolute items-center right-6 lg:right-16 top-1/3"> 
                <BurgerSvg @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav}" class="h-10"/>
            </div>
            <transition 
            name="mobile-nav"
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
            >
                <ul 
                v-show="mobileNav"
                :style="{ backgroundColor: dropDownNavBg }"
                class="dropdown-nav z-50  absolute h-10  w-screen  top-0 right-0  py-4 flex flex-col">  
                    <div class="flex justify-end px-6 lg:px-14 lg:mt-2">
                        <CancelSvg @click="toggleIsSelected" :class="{ 'selected' : isSelected }"/>
                    </div>    
                    <div class="flex flex-col items-center">
                        <div class="flex flex-col justify-center items-center">
                            <li class="py-0 font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold hover:cursor-pointer active:cursor-pointer hover:active:ease-in-out active:ease-in-out duration-1000"><router-link to="/">Home</router-link></li>
                            <!-- <li class="py-1 font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">Gallery</li> -->
                            <li class="py-1 font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">Who We Are</li>
                            <li class="py-1 font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">What We Do</li>
                            <router-link to="/Profile" class="py-1 font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">Account</router-link>
                        </div>      
                        <div class="flex space-x-1 justify-center items-center w-5/12 md:w-4/12 rounded-3xl lg:px-2 lg:h-7">
                            <!-- <LoveSvg/> -->
                            <div @click.prevent="logOutUser" to="/LogOut">
                            <img :src="logOut" />
                            </div>
                            <h1 class=" font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">Log Out</h1>
                        </div>              
                    </div>
                </ul>
            </transition>
        </nav>
        
        </header>
        <!-- <div class=""> -->
            <div class="home-content">
                  <div class="mt-4 md:mt-32 xl:mt-32 px-6 md:px-10 lg:px-24 xl:px-40 w-full sm:w-10/12 md:w-9/12 xl:w-11/12"> 
                      <!-- <TopLandingPageSvg class="hidden z-50  xl:block absolute -left-5"/> -->
                      <!-- <LandingPageCenterSvg class="hidden z-50 xl:block absolute bottom-20 -right-16"/> -->
                      <div class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-serif text-white">Welcome to</div>  
                      <div class="sm:w-full  text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium sm:font-semibold lg:font-bold font-serif text-white mr-6 sm:mr-10"><span class="relative" :style="{color: `${textColor}`}">Golden Heart Funaab<LandingPageBottomSvg class="absolute hidden xl:block -bottom-4 xl:right-0"/>
                      <TopLandingPageSvg class="hidden xl:block absolute -right-14 -top-12"/>
                      <LandingPageTopSvg class="hidden  xl:block absolute -right-96 -top-36"/></span></div>  
                      <LandingPageCenterSvg class="hidden xl:block absolute xl:right-56"/>  
                      <div class="text-sm md:text-base lg:text-lg xl:text-xl font-serif  sm:w-full md:w-full lg:w-10/12 xl:w-8/12 text-white mt-10"> Brief  intro on Golden Heart Funaab Brief  intro on Golden Heart Funaab Brief  intro on Golden Heart Funaab Brief  intro on Golden Heart Funaab Brief  i</div>  
                      <GoldButton  title="Learn More" class="mt-8 xl:mt-10"/>
                  </div>
            </div> 
            <!-- <div class="mx-auto w-10/12 sm:w-8/12 md:w-full">
                <div class="bg-white py-4 px-6 Form">
                    <div class="flex justify-between">
                        <div class="text-black font-medium md:font-semibold lg:font-bold ">Log In</div>
                        <div :style="{color: `${textColor}`}" class="font-medium md:font-semibold lg:font-bold ">Sign Up</div>
                    </div>
                    <div :style="{color: `${logintextColor}`}" class="py-2 font-normal text-xs">Login to your account</div>
                    <form class="mt-4">
                        <div class="relative flex flex-col">
                            <label class=" text-xs md:text-sm xl:text-base font-normal mb-1">Name</label>
                            <input type="text" class="h-9 text-black outline-none text-sm font-normal pl-10 pr-4" placeholder="Enter your name"/>
                            <img class="absolute top-7 md:top-9 left-3" :src="svg"/>
                        </div>
                        <div class="relative flex flex-col mt-4">
                            <label class=" text-xs md:text-sm xl:text-base font-normal mb-1">Email</label>
                            <input type="email" class="h-9 text-black outline-none text-sm font-normal pl-10 pr-4" placeholder="Enter email address"/>
                            <img class="absolute top-7 md:top-9 left-3" :src="svg"/>
                        </div>
                        <div class="relative flex flex-col mt-4">
                            <label class=" text-xs md:text-sm xl:text-base font-normal mb-1">Password</label>
                            <input type="email" class="h-9 text-black outline-none text-sm font-normal pl-10 pr-4" placeholder="Enter password"/>
                            <img class="absolute top-7 md:top-9 left-3" :src="svg"/>
                        </div>
                        <div class="relative flex items-center spACE-x-2 mt-1">
                            <img v-show="!awesome" @click="toggleAwesome2"  :src="ticked" class=" font-serifleft-0 top-0 right-0 bottom-0"/>
                            <div @click="toggleAwesome" v-show="awesome" class=" font-serifawesome2 rounded-sm border-2 border-dotted bg-white h-4 w-4"></div>
                            <div class="ml-1.5 text-sm font-serif">Remember me</div>
                        </div>
                        <div class="flex justify-center items-center w-full px-6 mt-4">
                        <button type="submit" class=" font-serif h-11 w-full flex justify-center items-center text-white">Login</button>
                        </div>
                    </form>
                    <div class="text-xs font-serif mt-2 mx-auto">Can't remember password?<span :style="{color: `${textColor}`}"> Forgot Password</span></div>
                </div>
            </div>
        </div>  -->
        
    </div>
      <OurName/>
      <OurGoals/>
      <WhyStudentHelp/>
      <OurStudent/>
      <Footer/>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

import CancelSvg from '../components/SvgComponent/CancelSvg.vue'
import BurgerSvg from '../components/SvgComponent/BurgerSvg.vue'
import LoveSvg from '../components/SvgComponent/LoveSvg.vue'
import Navigation from '../components/Navigation.vue'
import LandingPageTopSvg from '../components/SvgComponent/LandingPageTopSvg.vue'
import TopLandingPageSvg from '../components/SvgComponent/TopLandingPageSvg.vue'
import LandingPageBottomSvg from '../components/SvgComponent/LandingPageBottomSvg.vue'
import LandingPageCenterSvg from '../components/SvgComponent/LandingPageCenterSvg.vue'
import OurName from '../components/OurName.vue'
import OurGoals from '../components/OurGoals.vue'
import WhyStudentHelp from '../components/WhyStudentHelp.vue'
import OurStudent from '../components/OurStudent.vue'
import Footer from '../components/Footer.vue'

export default {
    data() {
        return {
            textColor: 'rgba(226, 184, 94, 1)',
            logintextColor: '#4F4F4F',
            image: require('../assets/images/GoldenHeartBg.png'),
            // svg: require('../assets/svgs/Vector.svg'),
            ticked: require('../assets/svgs/Group118.svg'),
            awesome: true,

            logo: require('../assets/images/GoldenHeartLogo.png'),
            mobile: false,
            isSelected: false,
            scrolledNav: null,                 
            mobileNav: null,
            windowWidth: null,
            dropDownNavBg: 'rgba(226, 184, 94, 1)',
            firstLi: 'rgba(226, 184, 94, 1)',
            buttonNavBg: '#E2B85E',
            power: require('../assets/svgs/Power.svg'),
            logOut: require('../assets/svgs/LogOut.svg'),
            Profile: require('../assets/svgs/Profile.svg'),
            firstLetter: "C"
        }
    },
    components: { 
        LandingPageBottomSvg,
        TopLandingPageSvg,
        LandingPageTopSvg,
        LandingPageCenterSvg,
        Navigation,
        OurName,
        OurGoals,
        WhyStudentHelp,
        OurStudent,
        Footer,
        CancelSvg,
        BurgerSvg,
        LoveSvg
    },
    created() {
            window.addEventListener("resize", this.checkScreen);
            this.checkScreen();
    },
    methods() {
        window.addEventListener( "scroll", this.updateScroll);
    },
    methods: {
        scrollToGallery() {
            window.scrollTo({
                top: 3500,
                behavior: "smooth"
            })
        },
        scrollToWhoWeAre() {
            window.scrollTo({
                top: 1050,
                behavior: "smooth"
            })
        },
        scrollToWhatWeDo() {
            window.scrollTo({
                top: 680,
                behavior: "smooth"
            })
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        toggleIsSelected() {
          this.mobileNav = !this.mobileNav;
        },
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
                this.scrolledNav = false;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 1024) {
                this.mobile = true;
                return; 
            }
                this.mobile = false;
                this.mobileNav = false;
                return;
        },
        reloadPage() {
            window.location.reload();
        },
        toggleAwesome() {
            this.awesome = !this.awesome
        },
        toggleAwesome2() {
            this.awesome = !this.awesome
        },
        ...mapActions(["logout"]),
        logOutUser() {
            this.logout();
        }
    },
    // methods: {
    //     toggleAwesome() {
    //         this.awesome = !this.awesome
    //     },
    //     toggleAwesome2() {
    //         this.awesome = !this.awesome
    //     }
    // }
}
</script>

<style scoped>
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
    font-size: 0.9rem;
    font-weight: 400;
}


nav li.router-link-exact-active {
    color: rgba(226, 184, 94, 1);
    border-bottom:  2px solid rgba(226, 184, 94, 1);
 }
.buttonNavBg {
    background: linear-gradient(180deg, #E2B85E 0%, #784E05 131.67%);
    border-radius: 30px;
}
li:hover, 
li:focus {
    color: rgba(226, 184, 94, 1);
    border-bottom:  2px solid rgba(226, 184, 94, 1);
}

/* a.router-link-active {
    color: rgba(226, 184, 94, 1);
    border-bottom:  2px solid rgba(226, 184, 94, 1); 
} */

.firstLi {
    border-bottom:  2px solid rgba(226, 184, 94, 1);
}
@media (min-width: 0px) {
    .dropdown-nav {
        height: 60vh;
    }
}
@media (min-width: 990px) {
    .dropdown-nav {
        height: 50vh;
    }
}
</style>