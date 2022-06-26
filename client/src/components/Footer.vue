<template>
    <div class="footer bg-black">
        <div class="footer-content px-6 md py-6 sm:py-8 lg:px-16 xl:pl-28">
            <div class="flex flex-col gap-y-8 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 sm:gap-y-8 xl:gap-x-10">
                <div>
                    <div>
                        <img :src="image" class="w-24 sm:w-28 lg:w-32 xl:w-36 mb-6"/>
                    </div>
                    <div class="grid gap-y-6">
                        <h1 class="text-white uppercase font-serif font-normal text-xs">1050 24th St Des Moines, lagos.</h1>
                        <h1 class="text-white uppercase font-serif font-normal text-xs">+234-515-393-4226</h1>   
                    </div>
                </div>
                <div class="grid gap-y-6">
                    <h1 @click="scrollToTop" class="cursor-pointer text-white uppercase font-serif font-normal text-xs "><router-link to="/">HOME</router-link></h1>
                        <h1 @click="scrollToGallery" class="cursor-pointer text-white uppercase font-serif font-normal text-xs">gallery</h1>   
                        <h1 @click="scrollToWhoWeAre" class="cursor-pointer text-white uppercase font-serif font-normal text-xs">Who We Are</h1>
                        <h1 @click="scrollToWhatWeDo" class="cursor-pointer text-white uppercase font-serif font-normal text-xs">What We Do</h1>
                </div>
                <div class="grid gap-y-6">
                    <h1 class="text-white uppercase font-serif font-normal text-xs">Volunteers</h1>
                        <h1 class="text-white uppercase font-serif font-normal text-xs">Latest News</h1>   
                        <h1 class="text-white uppercase font-serif font-normal text-xs">Meet The team</h1>
                        <h1 class="text-white uppercase font-serif font-normal text-xs">Services Provided</h1>
                        <h1 class="text-white uppercase font-serif font-normal text-xs">Recent causes</h1>
                </div>
                <div class="grid gap-y-6">
                    <h2 class="text-white uppercase font-serif font-normal text-xs">Subscribe to Us</h2>
                    <h1 class="text-white font-serif font-normal text-xs">Subscribe to our Newsletter!</h1>   
                    <form @submit.prevent="handleSubmit" class="relative w-72 md:w-80">
                        <input v-model="emailAddress" class="pl-4 pr-2 w-60 bg-white rounded-3xl h-9 md:h-10 font-normal text-xs outline-none font-serif" style="color: #828282" type="email" placeholder="Enter your email address here"/>
                        <button class="absolute right-0 md:right-10 lg:right-5 xl:right-3 text-white h-9 md:h-10 font-serif px-2 lg:text-base">Subscribe</button>
                    </form>
                    <h1 class="text-white font-serif font-normal text-xs">Our charity helps those people who have no hope.</h1>
                </div>
                <div 
                class="flex flex-col justify-end gap-y-12 w-5 md:ml-16 xl:ml-36">
                    <img
                    v-for="image in images"
                    :key="image.index" 
                     :src="image.image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoldenHeartBg from '../components/SvgComponent/GoldenHeartBg.vue'
export default {
    components: {
        GoldenHeartBg
    },
    data() {
        return {
            image: require('../assets/images/footerLogoo.png'),
            emailAddress: '',
            images: [
                {
                    id: 0,
                    image: require('../assets/svgs/facebook.svg')
                },
                {
                    id: 1,
                    image: require('../assets/svgs/twitter.svg')
                },
                {
                    id: 2,
                    image: require('../assets/svgs/instagram.svg')
                }
            ]
        }
    },
     methods: {
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
        handleSubmit() {
            let data = {
                EmailAddress: this.emailAddress
            };
            console.log(data)
            this.this.emailAddress = '';
        }
     }
}
</script>

<style scoped>
h2::after {
    content: '';
    display: block;
    width: 5rem;
    height: 0.1rem;
    border: 1px solid #E2B85E;
    background-color: #E2B85E;
    border-radius: 1rem;
    margin-top: 0.2rem
}
button {
    background: #E2B85E;
    border-radius: 0px 30px 30px 0px;
}
</style>