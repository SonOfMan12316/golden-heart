<template>
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
                            <li @click="scrollToGallery" class="cursor-pointer text-white uppercase font-serif font-medium lg:text-sm mx-2">Gallery</li>
                            <li @click="scrollToWhoWeAre" class="cursor-pointer text-white uppercase font-serif font-medium lg:text-sm text-base mx-2 xl:mx-4">Who We Are</li>
                            <li @click="scrollToWhatWeDo" class="cursor-pointer text-white uppercase font-serif font-medium lg:text-sm text-base mx-2 xl:mx-4">What We Do</li>
                            <li class="text-white uppercase font-serif font-medium lg:text-sm text-base mx-2 xl:mx-4">Contacts</li>
                        </ul>
                    </div>
                    <div class="hidden lg:block lg:mr-3 xl:mr-0" v-show="!mobile">
                        <router-link to="/goldenHeartFunaab">
                            <div class="buttonNavBg flex items-center w-full rounded-3xl lg:px-2 lg:h-7">
                                <button class=" font-medium text-xs uppercase h-10 lg:w-40 xl:w- rounded-xl text-white font-serif">Golden Heart funaab</button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="icon flex absolute items-center right-6 lg:right-16 top-1/3"> 
                <BurgerSvg @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav}" class="h-10"/>
            </div>
            <transition 
            name="mobile-nav">
                <ul 
                v-show="mobileNav"
                :style="{ backgroundColor: dropDownNavBg }"
                class="dropdown-nav z-50 absolute h-10  w-screen  top-0 right-0  py-4 flex flex-col">  
                    <div class="flex justify-end px-6 lg:px-14 lg:mt-2">
                        <CancelSvg @click="toggleIsSelected" :class="{ 'selected' : isSelected }"/>
                    </div>    
                    <div class="flex flex-col items-center">
                        <div class="flex flex-col justify-center items-center">
                            <li class="py-0 font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold hover:cursor-pointer active:cursor-pointer hover:active:ease-in-out active:ease-in-out duration-1000"><router-link to="/">Home</router-link></li>
                            <li @click="scrollToGallery" class="py-1 font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">Gallery</li>
                            <li @click="scrollToWhoWeAre" class="py-1 font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">Who We Are</li>
                            <li @click="scrollToWhatWeDo" class="py-1 font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">What We Do</li>
                            <li class="py-1 font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">Contact Us</li>
                            <router-link to="/goldenHeartFunaab">
                            <li class="py-1 font-serif font-medium text-lg text-white lg:text-2xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">Golden Heart funaab</li>
                            </router-link>
                        </div>      
                    </div>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
import CancelSvg from './SvgComponent/CancelSvg.vue'
import BurgerSvg from './SvgComponent/BurgerSvg.vue'
import LoveSvg from './SvgComponent/LoveSvg.vue'
export default {
    data(){
        return {
            logo: require('../assets/images/GoldenHeartLogo.png'),
            mobile: false,
            isSelected: false,
            scrolledNav: null,                 
            mobileNav: null,
            windowWidth: null,
            dropDownNavBg: 'rgba(226, 184, 94, 1)',
            firstLi: 'rgba(226, 184, 94, 1)',
            buttonNavBg: '#E2B85E'
        }
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
        }
    },
    components: {
        CancelSvg,
        BurgerSvg,
        LoveSvg
        
    }
}
</script>

<style scoped>
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