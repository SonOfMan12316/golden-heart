<template>
    <div>
        <div class="Goldbutton flex items-center justify-center rounded-3xl w-28 md:w-32 h-10 gap-x-2 px-2">
            <button class="firstButton font-serif font-medium text-sm text-white flex justify-center items-center">{{ title }}</button> 
            <ArrowRightSvg/>
        </div> 
    </div>
</template>

<script>
import ArrowRightSvg from '../components/SvgComponent/ArrowRightSvg.vue'
export default {
    components: {
        ArrowRightSvg
    },props: {
        title: String
    },
}
</script>

<style scoped>
.Goldbutton {
    border: 1.5px solid #E2B85E;
    box-sizing: border-box;
}
</style>