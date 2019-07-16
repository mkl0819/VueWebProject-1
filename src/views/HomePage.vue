<template>
  <!-- div -->
  <div>
    <!-- imgbanner -->
    <ImgBanner :pagename="routeName()">
      <div style="line-height:1.2em; font-size:10vw; font-family: Aladdin" slot="text">Welcome To<br>Aladdin</div>
    </ImgBanner>
    <!-- container -->
    <v-container>
      <!-- About Me -->
      <v-layout my-5>
        <v-flex xs12 sm6>

          <router-link to="/" style="text-decoration:none; color:black">
            <h2 class="display-1 font-weight-medium mb-3 text-xs-center text-sm-right mr-4">About Me</h2>
          </router-link>

          <p class="mr-4 my-5 text-xs-center text-sm-right grey--text">
            안녕하세요.<br>
            아주 작은 기적을 일으키는 밍입니다.<br>
            저는 개발을 해보겠습니다.<br>
            여러분들이 많이 도와주세요...<br>
          </p>
        </v-flex>
        <v-flex  sm6>
          <v-img class="aboutImg" :src="getImgUrl('ming.png')" aspect-ratio="1.5"/>
        </v-flex>
      </v-layout>

      <!-- Board -->
      <v-layout my-5>
        <v-flex xs12 >
          <router-link to="/Board" style="text-decoration:none; color:black">
          <h2 class="display-1 font-weight-medium my-5 text-xs-center">Board</h2>
        </router-link>
          <BoardList></BoardList>
        </v-flex>
      </v-layout>

      <!-- Github -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="display-1 font-weight-medium my-5 text-xs-center">Project</h2>
            <v-card  color="#BB6949">
              <v-container
                      fluid
                      grid-list-lg
              >
                <v-layout row wrap>
                  <v-flex xs12 sm6 v-for="team in teams">
                    <v-card color="#E4BD5B" class="black--text">
                      <v-layout row>
                        <v-flex xs7>
                          <v-card-title primary-title>
                            <div>
                              <div class="headline">{{team.name}}</div>
                              <div>{{team.description}}</div>
                              <div>({{team.age}})</div>
                            </div>
                          </v-card-title>
                        </v-flex>
                        <v-flex xs5>
                          <v-img
                                  :src="team.image"
                                  height="125px"
                                  contain
                          ></v-img>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>
                      <v-card-actions class="pa-3">
                        <v-btn flat :href="team.url" target="_blank">GITLAB 가기</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Header from '../components/Header'
import ImgBanner from '../components/ImgBanner'
import BoardList from '../components/BoardList'
import RepositoryList from '../components/RepositoryList'
import Footer from '../components/Footer'
import FirebaseService from '@/services/FirebaseService'

export default {
	name: 'HomePage',
    data() {
	  return {
	    teams: [
          {
            name: '이민경',
            age: 26,
            description: '부산 깡패입니다.',
            url: 'https://lab.ssafy.com/mkl0819',
            image: require('@/assets/ming.png'),
            token: 'YwemDXZ5dD-Hxgx-dj5o',
          },
          {
            name: '이상주',
            age: 28,
            description: '학벌 깡패입니다.',
            url: 'https://lab.ssafy.com/leesangju92',
            image: require('@/assets/sang.png'),
            token: 'XLZHQWzDiR5vY3px3oWu',
          },
          {
            name: '이호빈',
            age: 27,
            description: '그냥 깡패입니다.',
            url: 'https://lab.ssafy.com/aegis1920',
            image: require('@/assets/leehobin.jpg'),
            token: '6izgztskLYEhJ__s4Jim',
          },
          {
            name: '전의환',
            age: 27,
            description: '롤 깡패입니다.',
            url: 'https://lab.ssafy.com/jeon',
            image: require('@/assets/black-goat.jpg'),
            token: 'nxzw23Tzc1aFThgMNEvo',
          },
        ]
      }
    },
	components: {
		ImgBanner,
		BoardList,
		RepositoryList
	},
	methods: {
		getImgUrl(img) {
			return require('../assets/' + img)
		},
    routeName(){
      return this.$route.name
    }
	},
}
</script>

<style>
/* @media screen and (max-width:768px){
  .aboutTxt {
    text-align: center;
  }
} */
</style>
