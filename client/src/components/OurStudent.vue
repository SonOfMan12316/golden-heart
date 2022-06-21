<template>
    <div class="ourVision mx-6 sm:mx-8 mt-6 relative px-4 lg:px-12 lg:mx-10 sm:px-6 md:mt-20 lg:mt-28 md:pb-6 pt-14 lg:pt-16 pb-2 lg:pb-6 mb-4 lg:mb-8 rounded">
        <div class="cornerBox"></div>
        <div class="w-full pt-2">
            <img class="md:absolute sm:w-8/12 md:w-7/12 xl:w-2/12 md:top-16 lg:-top-1 rounded-lg" :src="visionImage"/>
        </div>
        <div class="sm:w-4/12 md:w-full md:-ml-3 mt-4 md:-mt-2 md:flex  justify-end">
            <h1 class="text-xl lg:text-2xl xl:text-3xl font-medium lg:font-semibold xl:font-bold font font-serif text-black">Our Why<span class="relative ml-2" :style="{color: `${textColor}`}">Student Help </span>Africa</h1>
        </div>
        <div class="md:w-full md:flex flex-row justify-end">
            <p class="pt-2 text-sm font-light md:font-medium font-serif w-full sm:w-10/12 md:w-4/12 xl:w-8/12">Our goals is to provide food, shelter, medical care, children’s Bibles, educational assistance, adoption advocacy and more in a manner that breaks the cycle of dependence and promotes individual and societal productivity as well as charitable character with the community.
            <br>
            <br>
            provide food, shelter, medical care, children’s Bibles, educational assistance, adoption advocacy and more in a manner that breaks the cycle of dependence</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            textColor: '#E2B85E',
            visionImage: require('../assets/images/VisionBg.png')
        }
    }
}
</script>

<style scoped>
.ourVision {
    background: #F2F2F2;
    position: relative;
}
h1::after {
    content: '';
    display: block;
    width: 3rem;
    height: 0.1rem;
    background-color: #000;
    margin: 0.5rem 0;

}
.ourVision::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    border-right: 3.5rem solid white;
    border-bottom: 3.5rem solid #F2F2F2;
}

@media(min-width: 768px) {
    h1::after {
    margin: 0.5rem 0;

}
    h1 {
        width: 31.5%;
    }
}

@media (min-width: 800px) {
    p{
        width: 32%;
    }

    h1 {
        width: 30%;
    }
}

@media (min-width: 850px) {
    p{
        width: 31%;
    }
}

@media (min-width: 900px) {
    img {
        position: absolute;
        top: 1.5rem;
    }
}

@media (min-width: 1000px) {
    img {
        position: absolute;
        top: -1.5rem;
    }
    p{
        width: 29%;
    }
}

@media (min-width: 1050px) {
    h1 {
        width: 13%;
    }
}

@media (min-width: 1024px) {
    img {
        position: absolute;
        top: -1rem;
    }

    h1 {
        width: 27.5%
    }
}

@media (min-width: 1100px) {
    img {
        width: 55%;
        position: absolute;
        top: -3rem;
    }
}

@media (min-width: 1200px) {
    img {
        position: absolute;
        top: -4rem;
    }

    h1::after {
    content: '';
    display: block;
    width: 3rem;
    height: 0.2rem;
    background-color: #000;
    margin: 0.5rem 0;

}
}

@media (min-width: 1250px) {
    img {
        position: absolute;
        top: -4rem;
    }
}

@media (min-width: 1300px) {
    h1 {
        width: 21%;
    }
    p {
        width: 35%;
    }
    img {
        position: absolute;
        width: 70%;
        top: -5rem;
    }
}

@media (min-width: 1350px) {
    img {
        position: absolute;
        width: 50%;
        top: -6rem;
    }
}

@media (min-width: 1400px) {
    img {
        position: absolute;
        width: 50%;
        top: -10rem;
    }
}


/* 

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
        width: 45%;
        position: absolute;
        top: -2.5rem;
    }
}

@media (min-width: 1200px) {
    p {
        width: 35%;
    }
    img {
        position: absolute;
        width: 45%;
        top: -3rem;
    }
}
@media (min-width: 1300px) {
    p {
        width: 30%;
    }
    img {
        position: absolute;
        width: 45%;
        top: -4.5rem;
    }
}

@media (min-width: 1330px) {
    p {
        width: 30%;
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
}  */
</style>