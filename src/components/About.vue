<template>
    <v-layout my-5>
        <v-flex xs12 sm6>

                <router-link to="/" style="text-decoration:none; color:black">
                    <h2 class="display-1 font-weight-medium mb-3 text-xs-center text-sm-right mr-4"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                    style="color:white;"
                    >We Are</h2>
                </router-link>

            <p class="mr-4 my-5 text-xs-center text-sm-right grey--text"
            data-aos="zoom-in-right"
               data-aos-duration="1000"
            >
                개발을 개발하는<br>
                "321Pancake" 입니다.<br>
                같이 열심히 개발을 해봐요<br>
                감사합니다ㅎㅎ<br>
            </p>
        </v-flex>
        <v-flex  sm6>
            <v-img class="aboutImg" :src="img" aspect-ratio="1.5"
              data-aos="zoom-in-left"
                   data-aos-duration="1000"
            />
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                img: require('@/assets/ming.png')
            }
        }
    }
</script>

<style scoped>

</style>