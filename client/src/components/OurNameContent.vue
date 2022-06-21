<template>
    <div class="our-name-content lg:flex w-11/12 sm:w-3/12">
        <div class="flex flex-col justify-center items-center">
            <img :src="image" class="w-3/12 pb-2"/>
            <h3 class="text-center font-serif text-sm sm:text-base lg:text-lg xl:text-2xl  font-semibold md:font-bold mb-2">{{ header }}</h3>
            <div class="line"></div>
            <p class="pt-2 text-sm font-normal md:font-medium font-serif w-full sm:w-10/12 lg:w-11/12">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'header', 'description']
}
</script>

<style scoped>
.line {
    border-bottom: 2px solid #000;
    width: 3rem;
}
</style>