<template>
  <div>
    <ImgBanner :pagename="routeName()">
      <div style="line-height:1.2em; font-size:10vw; font-family: Aladdin; " slot="text">Post</div>
    </ImgBanner>
    <v-container>

      <!-- Post -->
      <v-layout>
        <v-flex xs12>
          <PostList :load-more="true"></PostList>
        </v-flex>
      </v-layout>

    </v-container>
    <PostWriteBtn />
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PostList from '../components/PostList'
import PostWriteBtn from '../components/PostWriteBtn.vue'

export default {
	name: 'PostPage',
	components: {
		ImgBanner,
		PostList,
    PostWriteBtn
	},
  methods: {
    routeName(){
      return this.$route.name
    }
  }
}
</script>
