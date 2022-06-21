<template>
    <div class="home relative xl:h-screen  pb-20 xl:pb-24  bg-center bg-cover"  :style="{ backgroundImage: `url(${image})` }">
            <Navigation class="absolute top-0 z-50" />
            <div class="relative">
            <div class="home-content px-6">
                  <div class="mt-32 md:mt-28 xl:mt-28 px-6 md:px-10 lg:px-24 xl:px-40 sm:w-7/12 md:w-9/12 lg:w-7/12 xl:w-9/12">
                      <TopLandingPageSvg class="hidden xl:block absolute left-3/4"/>
                      <div class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-serif text-white">Give a <span class="relative" :style="{color: `${textColor}`}">helping<LandingPageTopSvg class="absolute -top-2 -right-12"/></span></div>  
                      <div class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-serif text-white mr-6 sm:mr-10"><span class="" :style="{color: `${textColor}`}">Hand</span> to those </div>  
                      <div class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-serif text-white mr-6 sm:mr-10 relative">Who<LandingPageBottomSvg class="absolute -bottom-4 left-0"/> need it</div>  
                      <LandingPageCenterSvg class="hidden xl:block absolute right-0"/>  
                      <div class="text-sm md:text-base lg:text-lg xl:text-xl font-serif  sm:w-full md:w-10/12 lg:w-11/12 xl:w-7/12 text-white mt-10">Our charity helps take a child off the street and provide for <span class="" :style="{color: `${textColor}`}"> children at risk.</span></div>  
                      <GoldButton  title="Learn More" class="mt-8 xl:mt-10"/>
                  </div>
            </div>  
            </div>
        </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import GoldButton from '../components/GoldButton.vue'
import LandingPageTopSvg from '../components/SvgComponent/LandingPageTopSvg.vue'
import LandingPageBottomSvg from '../components/SvgComponent/LandingPageBottomSvg.vue'
import ArrowRightSvg from '../components/SvgComponent/ArrowRightSvg.vue'
import LandingPageCenterSvg from '../components/SvgComponent/LandingPageCenterSvg.vue'
import TopLandingPageSvg from '../components/SvgComponent/TopLandingPageSvg.vue'
export default {
    data() {
        return {
            LandingPageBottomSvg,
            LandingPageTopSvg,
            ArrowRightSvg,
            Navigation,
            GoldButton,
            LandingPageCenterSvg,
            TopLandingPageSvg,
        }
    }
}
</script>

<style scoped>

</style>