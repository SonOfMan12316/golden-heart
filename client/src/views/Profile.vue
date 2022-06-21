<template>
    <div :style="{ backgroundColor: `(${color})` }" class="profile px-6 sm:px-6 lg:px-16 lg:py-4 xl:px-32 bg-gradient-to-t h-screen">
        <router-link to="/" class="image-div cursor-pointer flex items-center h-16">
            <img :src="logo"/>
        </router-link>
        <h2 class="font-serif text-white text-lg lg:text-xl font-medium">Profile</h2>
        <div class=" border border-gray-500 mt-4 p-4">
            <ul>
                <li class="text-white border-b border-gray-500 pb-2 pt-2">Name : {{ user.name }}</li>
                <li class="text-white border-b border-gray-500 pb-2 pt-2">Email : {{ user.email }}</li>
                <li class="text-white border-b border-gray-500 pb-2 pt-2">Faculty : {{ user.faculty }}</li>
                <li class="text-white border-b border-gray-500 pb-2 pt-2">Department : {{ user.department }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {  mapGetters,  mapActions } from 'vuex'
export default {
    data() {
        return {
            logo: require('../assets/images/GoldenHeartLogo.png'),
            color: 'rgba(226, 184, 94, 1)'
        }
    },
    computed: mapGetters(['user']),
    methods: {
        ...mapActions(['getProfile'])
    },
    created() {
        this.getProfile();
    }
}
</script>

<style>
.profile {
    background-color: rgba(226, 184, 94, 1);
}
</style>