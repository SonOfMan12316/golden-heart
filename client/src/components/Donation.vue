<template>
    <div class="donation bg-center sm:bg-cover md:bg-cover bg-no-repeat h-56 sm:h-64 lg:h-80" :style="{ backgroundImage: `url(${image})` }">
        <div class="donation-content py-6 sm:pt-20 px-6 md:px-8 lg:px-16 xl:px-32 lg:py-24 xl:py-16">
            <h1 class="font-serif font-semibold text-2xl lg:text-3xl xl:text-4xl text-white sm:w-9/12 lg:w-8/12 xl:w-6/12">Donate<span :style="{color: `${textColor}`}"> today to save a Life and keep them off the</span> Streets.</h1>
            <div class="mt-4 lg:mt-6 xl:mt-6">
            <p class="text-white font-serif text-xs lg:text-sm xl:text-base w-full flex space-x-2">We are Really Proud of Our Kind 
                <svg class="px-1 xl:pt-1" width="24" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.88571 0C2.70759 0 0 2.2944 0 5.27426C0 7.32993 0.996967 9.06062 2.31827 10.4943C3.63504 11.923 5.33388 13.1222 6.86968 14.1259L9.51953 15.8578C9.80973 16.0474 10.1903 16.0474 10.4805 15.8578L13.1303 14.1259C14.6661 13.1222 16.365 11.923 17.6817 10.4943C19.003 9.06062 20 7.32993 20 5.27426C20 2.2944 17.2924 0 14.1143 0C12.476 0 11.0345 0.74167 10 1.70133C8.96553 0.74167 7.52397 0 5.88571 0Z" fill="#E2B85E"/>
                </svg> 
              Donators
            </p>
            </div>
            <div class="mt-4 lg:mt-6 xl:mt-6">
                <div class="Goldbutton flex items-center justify-center rounded-3xl w-28 h-7 lg:h-8 lg:w-36 xl:w-40 xxl:text-base gap-x-2 px-2">
                    <button class="firstButton font-serif font-medium text-sm text-white flex justify-center items-center">Donate Now</button> 
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: require('../assets/images/DonationBg.png'),
            textColor: '#E2B85E',
        }
    }
}
</script>

<style scoped>
.Goldbutton {
    background: #E2B85E;
    box-sizing: border-box;
}

@media (min-width: 900px) {
    .donation {
        height: 19.5rem;
    }
}

@media (min-width: 1000px) {
    .donation {
        height: 19.5rem;
    }

    /* .donation-content {
        padding-top: 7rem;
    } */
}

@media (min-width: 1100px) {
    .donation {
        height: 21.5rem;
    }

    .donation-content {
        padding-top: 7rem;
    } 
}

@media (min-width: 1200px) {
    .donation {
        height: 25rem;
    }

    .donation-content {
        padding-top: 8rem;
    } 
}

@media (min-width: 1300px) {
    .donation {
        height: 28rem;
        
    }

    .donation-content {
        padding-top: 11rem;
    } 
}

@media (min-width: 1400px) {
    .donation {
        height: 29rem;
    }
}

@media (min-width: 1500px) {
    .donation {
        height: 30rem;
    }
}

@media (min-width: 1600px) {
    .donation {
        height: 31rem;
    }

    .donation-content {
        padding-top: 10rem;
    } 
}

@media (min-width: 1700px) {
    .donation {
        height: 33rem;
    }
}

@media (min-width: 1800px) {
    .donation {
        height: 35rem;
    }
}

@media (min-width: 1900px) {
    .donation {
        height: 37rem;
    }
}

@media (min-width: 1950px) {
    .donation {
        height: 45rem;
    }
}
</style>