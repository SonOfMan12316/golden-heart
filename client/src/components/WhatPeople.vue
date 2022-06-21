<template>
    <div class="aboutUs mx-6 sm:mx-8 mt-6 relative px-4 lg:px-12 lg:mx-10 sm:px-6 pt-14 pb-2 md:pb-10 lg:pb-6 rounded">
        <div class="cornerBox"></div>
            <div class=" sm:w-4/12 md:w-3/12">
                <h1 class="text-xl lg:text-2xl xl:text-3xl font-medium lg:font-semibold xl:font-bold font font-serif text-black">What<span class="relative" :style="{color: `${textColor}`}"> People Say</span> About Us</h1>
            </div>
            <p class="pt-2 text-sm font-light md:font-medium font-serif w-full sm:w-10/12 md:w-4/12 xl:w-10/12">Our mission is to provide food, shelter, medical care, children’s Bibles, educational assistance, adoption advocacy and more in a manner that breaks the cycle of dependence and promotes individual and societal productivity as well as charitable character with the community.</p>
            <div class="w-full pt-2">
                <img class="md:absolute sm:w-8/12 md:w-7/12 xl:w-2/12 md:top-10 md:right-5 lg:right-12 lg:-top-7" :src="image"/>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return { 
            textColor: '#E2B85E',
            image: require('../assets/images/PeopleSayAboutUs.png')

        }

    }
}
</script>

<style scoped>
.aboutUs {
    background: #F2F2F2;
    position: relative;
}

h1::after {
    content: '';
    display: block;
    width: 3rem;
    height: 0.2rem;
    background-color: #000;
    margin: 0.5rem 0;

}

.aboutUs::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-left: 3.5rem solid white;
    border-bottom: 3.5rem solid #F2F2F2;
}

@media (min-width: 900px) {
    img {
        position: absolute;
        top: 1.5rem;
    }
}

@media (min-width: 950px) {
    img {
        position: absolute;
        top: -2.5rem;
    }
}

@media (min-width: 1000px) {
    img {
        position: absolute;
        top: -3.5rem;
    }
}

/* @media (min-width: 1000px) {
    img {
        width: 65%;
    }
} */

@media (min-width: 1024px) {
    .aboutUs::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-left: 4rem solid white;
        border-bottom: 4rem solid #F2F2F2;
    }
}

@media (min-width: 1100px) {
    img {
        width: 55%;
        position: absolute;
        top: -4.5rem;
    }
}

@media (min-width: 1150px) {
    img {
        width: 55%;
        position: absolute;
        top: -5.5rem;
    }
}

@media (min-width: 1200px) {
    p {
        width: 35%;
    }
    img {
        position: absolute;
        width: 50%;
        top: -5rem;
    }

    .aboutUs {
        padding-bottom: 4rem;
    }
}
@media (min-width: 1300px) {
    p {
        width: 45%;
    }
    img {
        position: absolute;
        width: 50%;
        top: -6rem;
    }
}

@media (min-width: 1350px) {
    p {
        width: 35%;
    }
    img {
        position: absolute;
        width: 50%;
        top: -7rem;
    }
}

@media (min-width: 1440px) { 
    img {
        position: absolute;
        width: 43%;
        top: -7rem;
    }
} 
</style>