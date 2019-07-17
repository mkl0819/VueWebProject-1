<template>
  <v-layout mt-5 wrap>
    <v-flex v-for="i in boards.length > limits ? limits : boards.length" xs12 sm6 md4 lg3>
      <Board class="ma-3"
              :date="boards[i - 1].created_at.toString()"
              :title="boards[i - 1].title"
              :body="boards[i - 1].body"
              :imgSrc="boards[i - 1].img"
      ></Board>
    </v-flex>

    <v-flex xs12 text-xs-center round my-5 v-if="loadMore">
      <v-btn color="info" dark v-on:click="loadMoreBoards"><v-icon size="25" class="mr-2">fa-plus</v-icon> 더 보기</v-btn>
    </v-flex>

  </v-layout>
</template>
<script>
import Board from '@/components/Board'

import FirebaseService from '@/services/FirebaseService'

export default {
	name: 'BoardsList',
	props: {
		limits: {type: Number, default: 4},
    loadMore: {type: Boolean, default: false}
	},
	data() {
		return {
			boards: []
		}
	},
	components: {
		Board
	},
	mounted() {
		this.getBoards()
	},
	methods: {
		async getBoards() {
			this.boards = await FirebaseService.getBoards()
		},
		loadMoreBoards() {
      this.limits += 2;
    }
	},
}
</script>
<style>
  .mw-700 {
    max-width: 700px;
    margin: auto;
  }
</style>
