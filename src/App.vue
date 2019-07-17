<template>
  <!-- vapp -->
  <v-app>
    <!-- vcontent -->
    <v-content style=" padding-right: 0px;background-color:#E8EBD5">
      <Header />
      <!-- router -->
      <router-view/>
      <!-- scroll -->
    </v-content>
    <scroll />
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import store from './store'
import scroll from './components/Scroll.vue'
import Translate from './components/Translate.vue'

export default {
  name: 'App',
  store,
  components: {
    Header,
    Footer,
    scroll,
    Translate,

  },
  methods: {

  }
}
</script>

<style>
.body-txt {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.repo-txt {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.card-item {
  cursor: pointer;
  height: 100%;
  width: 100%;
}
</style>
