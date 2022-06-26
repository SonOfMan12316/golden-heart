<template>
    <div class="gallery">
        <div class="gallery-content px-10 lg:px-16 xl:px-28  py-4 lg:py-10">
            <h1 class="text-center font-serif font-medium lg:font-semibold text-base lg:text-lg">Our <span :style="{color: `${textColor}`}"> Gallery</span></h1>
            <div class=" sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-x-4 sm:w-full">
                <div v-for="image in images" :key="image.index" class="relative flex justify-center sm:justify-start">
                    <img class="mt-4 w-72 sm:w-64" :src="image.image"/>
                    <PlayButtonSvg class="PlayButtonSvg absolute inset-y-20"/>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import PlayButtonSvg from '../components/SvgComponent/PlayButtonSvg.vue'
export default {
    components: {
        PlayButtonSvg
    },
    data() {
        return {
            textColor: '#E2B85E',
            images: [
                {
                    id: 0,
                    image: require('../assets/images/OurGalleryFirst.png')
                },
                {
                    id: 1,
                    image: require('../assets/images/OurGallerySecond.png')
                },
                {
                    id: 2,
                    image: require('../assets/images/OurGalleryThird.png')
                },
                {
                    id: 3,
                    image: require('../assets/images/OurGalleryFourth.png')
                },
                {
                    id: 4,
                    image: require('../assets/images/OurGalleryFifth.png')
                },
                {
                    id: 5,
                    image: require('../assets/images/OurGallerySixth.png')
                },
                {
                    id: 6,
                    image: require('../assets/images/OurGallerySeventh.png')
                },
                {
                    id: 7,
                    image: require('../assets/images/OurGalleryEighth.png')
                }
            ]
        }
    }
}
</script>

<style scoped>
h1::after {
    content: '';
    display: block;
    width: 4rem;
    height: 0.2rem;
    background-color: #000;
    border-radius: 1rem;
    margin: 0.5rem auto;
}

@media (min-width: 375px) {
    .PlayButtonSvg {
        top: 6rem;
        bottom: 6rem;  
    }
}

@media (min-width: 640px) {
    .PlayButtonSvg {
        left: 7rem;
        right: 7rem;  
    }
}

@media (min-width: 768px) {
    .PlayButtonSvg {
        left: 6rem;
        right: 6rem;  
        top: 5rem;
        bottom: 5rem;  
    }
}

@media (min-width: 900px) {
    .PlayButtonSvg {
        left: 7rem;
        right: 7rem;  
        top: 6rem;
        bottom: 6rem;  
    }
}

@media (min-width: 900px) {
    .PlayButtonSvg {
        left: 7rem;
        right: 7rem;  
        top: 5.5rem;
        bottom: 5.5rem;  
    }
}

@media (min-width: 1024px) {
    .PlayButtonSvg {
        left: 6.5rem;
        right: 6rem;  
        top: 5rem;
        bottom: 5.5rem;  
    }
}

@media (min-width: 1200px) {
    .PlayButtonSvg {
        left: 7rem;
        right: 6rem;  
        top: 5.5rem;
        bottom: 5.5rem;  
    }
}

@media (min-width: 1280px) {
    .PlayButtonSvg {
        left: 5.5rem;
        right: 6rem;  
        top: 4.5rem;
        bottom: 5rem;  
    }
}
</style>