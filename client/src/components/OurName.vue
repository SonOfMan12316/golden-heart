<template>
    <div class="our-name bg-white">
        <div class="our-name-content lg:py-10 xl:py-16">
            <div class="lg:flex  px-6 lg:px-16 xl:px-32 md:py-10">
                <OurNameContent
                class="py-2 sm:w-full sm:px-6 lg:px-0 "
                v-for="content in contents" 
                :key="content.id"
                :image="content.contentImage" 
                :header="content.contentHeader"
                :description="content.contentDescription"
                />
            </div>
            <!-- <div class="aboutUs mx-6 sm:mx-8 mt-6 lg:mt-16 xl:mt-28 relative px-4 lg:px-12 lg:mx-10 sm:px-6 pt-14 lg:pt-16 pb-2 md:pb-10 lg:pb-6 rounded">
                <div class="cornerBox"></div>
                <div class=" sm:w-4/12 md:w-3/12">
                    <h1 class="text-xl lg:text-2xl xl:text-3xl font-medium lg:font-semibold xl:font-bold font font-serif text-black">What<span class="relative" :style="{color: `${textColor}`}"> People Say</span> About Us</h1>
                </div>
                <p class="pt-2 text-sm font-light md:font-medium font-serif w-full sm:w-10/12 md:w-4/12 xl:w-10/12">Our mission is to provide food, shelter, medical care, children’s Bibles, educational assistance, adoption advocacy and more in a manner that breaks the cycle of dependence and promotes individual and societal productivity as well as charitable character with the community.</p>
                <div class="w-full pt-2">
                    <img class="md:absolute sm:w-8/12 md:w-7/12 xl:w-2/12 md:top-10 md:right-5 lg:right-12 lg:-top-7" :src="image"/>
                </div>
            </div> -->
        </div>
        
    </div>
</template>

<script>
import OurNameContent from '../components/OurNameContent.vue'
import OurVision from '../components/OurVision.vue'
import WhatPeople from '../components/WhatPeople.vue'
export default {
    components: {
        OurNameContent,
        OurVision,
        WhatPeople
    },
    data() {
        return {
            contents: [
                {
                    id: 0,
                    contentImage: require('../assets/svgs/ourNameHand.svg'),
                    contentHeader: 'Adoption',
                    contentDescription: '“Thank You and the others working with this tremendous organization. This is more the Lord’s work than perhaps any other mission on this planet other than caring for our own family. I wish we could do much more. May God be with you!”',
                },
                {
                    id: 1,
                    contentImage: require('../assets/svgs/ourNameEducation.svg'),
                    contentHeader: 'Education',
                    contentDescription: '“Thank You and the others working with this tremendous organization. This is more the Lord’s work than perhaps any other mission on this planet other than caring for our own family. I wish we could do much more. May God be with you!”',
                },
                {
                    contentImage: require('../assets/svgs/ourNameHeartShape.svg'),
                    contentHeader: 'Help & Support',
                    contentDescription: '“Thank You and the others working with this tremendous organization. This is more the Lord’s work than perhaps any other mission on this planet other than caring for our own family. I wish we could do much more. May God be with you!”',
                }
            ],
            textColor: '#E2B85E',
            image: require('../assets/images/PeopleSayAboutUs.png')
        }
    }
}
</script>

<style scoped>

</style>