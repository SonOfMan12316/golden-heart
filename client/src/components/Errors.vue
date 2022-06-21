<template>
    <transition name="toast" 
    enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
        <div v-if="show" class="alert rounded h-10 w-1/2 sm:w-2/5 lg:w-1/4 text-gray-500 bg-white text-xs font-medium flex items-center justify-center">{{ msg }}
        <div class="w-1 rounded-t  rounded-l h-10 bg-red-500 absolute left-0"></div>
    </div>
    </transition>
</template>

<script>
export default {
    props: ["msg"],
    data(){
        return {
            show: true
        }
    },
    mounted(){
        setTimeout(() => this.show = false, 3000)
  }
}
</script>

<style scoped>
.toast-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}
.toast-enter-to {
    opacity: 1;
    transform: translateY(0);
}
.toast-enter-active {
   transition: all 0.3s ease-in;
}

.toast-leave-from {
    opacity: 1;
    transform: translateY(0);
}
.toast-leave-t0 {
    opacity: 0;
    transform: translateY(-60px);
}
.toast-leave-active {
   transition: all 0.3s ease;
}
</style>