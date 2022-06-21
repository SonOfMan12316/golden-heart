<template>
    <div class="bg-white">
        <div class="eventsContent px-6 sm:px-6 py-4 lg:px-16 lg:py-8 xl:pl-32">
            <h2 class="text-center font-serif font-semibold text-2xl text-black">Upcoming <span :style="{color: `${textColor}`}"> Events</span></h2>
            <div class="line flex justify-center"></div>
            <div class="flex flex-col justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-x-2 lg:space-x-4 xl:space-x-6">
                <EventContent
                class="EventContent sm:w-11/12 md:w-9/12 lg:w-11/12 xl:w-8/12 mx-auto xl:mx-0 sm:mx-2 rounded-2xl"
                style="background: #F2F2F2" 
                v-for="(article, index ) in articles"
                :key="index"
                :header="article.header"
                :image="article.image"
                :paragraph="article.paragraph"
                />
            </div>
        </div>
    </div>
</template>

<script>
import EventContent from '../components/EventContent.vue'
export default {
    components: {
        EventContent
    },
    data() {
        return {
            textColor: 'rgba(226, 184, 94, 1)',
            articles: [
                {
                    id: 0,
                    image: require('../assets/images/firstArticle.png'),
                    header: 'Operation Feed the Nation.',
                    paragraph: '“Thank You and the others working with this tremendous organization. This is more the Lord’s work than perhaps any other mission on this planet other than caring for our own family. I wish we could do much more. May God be with you!”'
                },
                {
                    id: 1,
                    image: require('../assets/images/secondArticle.png'),
                    header: 'Take a child off The street.',
                    paragraph: '“Thank You and the others working with this tremendous organization. This is more the Lord’s work than perhaps any other mission on this planet other than caring for our own family. I wish we could do much more. May God be with you!”'
                },
                {
                    id: 2,
                    image: require('../assets/images/thirdArticle.png'),
                    header: 'Sponsor a child To School.',
                    paragraph: '“Thank You and the others working with this tremendous organization. This is more the Lord’s work than perhaps any other mission on this planet other than caring for our own family. I wish we could do much more. May God be with you!”'
                }
                // },
                // {
                //     id: 1,
                //     image: require('../assets/images/firstArticle.png'),
                //     header: 'Operation Feed the Nation.',
                //     paragraph: '“Thank You and the others working with this tremendous organization. This is more the Lord’s work than perhaps any other mission on this planet other than caring for our own family. I wish we could do much more. May God be with you!”'
                // },
            ]
        }
    }
}
</script>

<style scoped>
    h1 {
        color: #E2B85E;
    }

   .line {
        content: '';
        display: block;
        width: 5rem;
        height: 0.1rem;
        background-color: #000;
        margin: 0.75rem auto;
    }

    .eventcontent {
        background: #F2F2F2;
    }
@media (max-width: 320px) {
   .EventContent {
        width: 100%;
    } 
}

@media (min-width: 321px) {
    .EventContent {
        width: 80%;
    }
}

@media (min-width: 400px) {
    .EventContent {
        width: 70%;
    }
}

@media (min-width: 500px) {
    .EventContent {
        width: 60%;
    }
}

@media (min-width: 600px) {
    .EventContent {
        width: 50%;
    }
}

@media (min-width: 640px) {
    .EventContent {
        width: 91.666667%;
    }
}
    
@media (min-width: 768px) {
    .EventContent {
        width: 75%;
    }
}   

@media (min-width: 900px) {
    .EventContent {
        width: 65%;
    }
} 

@media (min-width: 1000px) {
    .EventContent {
        width: 60%;
    }
} 

@media (min-width: 1024px) {
    .EventContent {
        width: 91.666667%;
    }
}

@media (min-width: 1100px) {
    .EventContent {
        width: 85%;
    }
}

@media (min-width: 1200px) {
    .EventContent {
        width: 80%;
    }
}

@media (min-width: 1300px) {
    .EventContent {
        width: 73%;
    }
}

@media (min-width: 1400px) {
    .EventContent {
        width: 65%;
    }
}
</style>