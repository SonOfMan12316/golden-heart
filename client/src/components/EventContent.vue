<template>
    <div class="mt-4">
        <img :src="image" class="rounded-t-2xl h-56 w-full"/>
        <div class="h-28">
            <div class="eventcontent relative bg-white rounded-md w-56 mx-auto -top-28 sm:-top-32 p-2 lg:px-3">
                <h1 class="font-serif bg-white font-semibold text-xl w-9/12">{{ header }}</h1>
                <div class="line"></div>
                <p class="font-serif  font-normal lg:font-semibold text-xs">{{ paragraph }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    props: ['image', 'header', 'paragraph'],
    components: {
       Carousel,
        Slide
   }
}
</script>

<style scoped>
    .line {
        content: '';
        display: block;
        width: 5rem;
        height: 0.1rem;
        background-color: #000;
        margin: 0.75rem 0;
    }
</style>