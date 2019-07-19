<style scoped>
  .v-dialog__content >>> .v-dialog {
    width: 50vw!important;
    height: auto!important;
  }
  @media screen and ( max-width:600px  ){
    .v-dialog__content >>> .v-dialog {
      width: 80vw!important;
      height: auto!important;
    }
  }
</style>
<template>
<v-layout>
  <v-dialog>
      <!-- <v-dialog v-model="dialog"> -->
    <template v-slot:activator="{ on }">
      <!-- <v-btn color="primary" dark >Open Dialog</v-btn> -->
      <v-hover>
      <v-card v-on="on"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto card-item"
      @click="updateBoardViewCountMethod"
      >
        <v-img :src="imgSrc" height="200px">
        </v-img>
        <v-card-title primary-title hover>
          <div>
            <div class="headline">{{title}}</div>
            <span class="grey--text body-txt">{{body}}</span>
            <v-spacer></v-spacer>
            <v-icon small>fas fa-eye</v-icon>
            <span class="grey--text ml-2">{{boardViewCount}}</span>
            <v-spacer></v-spacer>
            작성일 : <span class="grey--text ml-2">{{created_at}}</span>
            <v-spacer></v-spacer>
            작성자 : <span class="grey--text ml-2">{{author}}</span>
          </div>
        </v-card-title>
      </v-card>
    </v-hover>
    </template>

    <!-- <v-flex xs12 sm8 md6> -->
    <v-card  >
      <v-img :src="imgSrc" >
      </v-img>
      <v-card-title primary-title hover bottom>
        <div>
          <div class="headline">{{title}}</div>
          <span class="grey--text" >{{body}}</span>
        </div>
      </v-card-title>
    </v-card>

  <!-- </v-flex> -->
  </v-dialog>

</v-layout>

</template>

<script>
import FirebaseService from '@/services/FirebaseService'

export default {
	name: 'Board',
	props: {
		date: {type: String},
		title: {type: String},
		body: {type: String},
		imgSrc: {type: String},
    doc_id: {type:String},
    boardViewCount: {type:Number},
    created_at:{type:String},
    author:{type:String}
	},
	data() {
		return {
			dialog: false,
		}
	},
  methods:{
    updateBoardViewCountMethod(){
      FirebaseService.updateBoardViewCount(this.doc_id);
    }
  }
}
</script>
