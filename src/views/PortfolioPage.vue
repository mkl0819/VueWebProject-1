<template>
  <div>
    <ImgBanner :pagename="routeName()">
      <div style="line-height:1.2em; font-size:10vw; font-family: Aladdin;" slot="text">PORTFOLIO</div>
    </ImgBanner>
    <v-container>

      <!-- Portfolio -->
      <v-layout>
        <v-flex xs12>
          <PortfolioList :load-more="true"></PortfolioList>
        </v-flex>
      </v-layout>

    </v-container>
    <PortfolioWriteBtn />

  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import PortfolioWriteBtn from '../components/PortfolioWriteBtn.vue'

export default {
	name: 'PortfolioPage',
  components: {
		ImgBanner,
		PortfolioList,
    PortfolioWriteBtn
	},
  methods: {
    routeName(){
      return this.$route.name
    }
  }
}
</script>
