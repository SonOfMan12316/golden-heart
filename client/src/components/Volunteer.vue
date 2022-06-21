<template>
    <div class="volunteer mt-10 py-6 lg:py-10"   :style="{ backgroundImage: `url(${image})` }">
        <div class="volunteer-content flex flex-col justify-center px-6 md:px-10 lg:px-24 xl:px-40 ">
            <h1 class="text-center font-serif font-semibold text-2xl" :style="{color: `${textColor}`}">Become a volunteer</h1>
            <div class="flex justify-center">
                <p class="font-serif text-white text-center text-base font-light lg:font-normal w-full md:w-11/12 lg:w-7/12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
            </div>
            <div class="flex justify-center mt-4">
                <GoldButton title="Join Us"/>
            </div>
        </div>
    </div>
</template>

<script>
import GoldButton from '../components/GoldButton.vue'
export default {
    data () {
        return {
            image: require('../assets/images/VolunteerBg.png'),
            textColor: '#E2B85E',
            // title: 'Join Us'
        }
    },
    components: {
        GoldButton
    }
}
</script>

<style scoped>
h1::after {
    content: '';
    display: block;
    width: 4rem;
    height: 0.2rem;
    background-color: #fff;
    border-radius: 1rem;
    /* margin: 0.5rem 0; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin: 1rem auto;
}
</style>