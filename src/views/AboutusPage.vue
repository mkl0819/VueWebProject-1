<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

<template>
<div>
  <ImgBanner :pagename="routeName()">
    <div style="line-height:1.2em; font-size:10vw; font-family: Aladdin;" slot="text">About Us</div>
  </ImgBanner>
  <v-container>
    <v-layout my-5>
      <v-flex xs12>
          <h2 class="display-1 font-weight-medium my-5 text-xs-center">About Us</h2>
        <v-layout wrap>
          <v-flex v-for="team in teams" xs12 sm6 lg3 pa-2>
            <v-hover>
            <v-card class="namecard"
                    slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    @click="showRepo(team.userName)">
              <v-layout pa-2>
                <v-flex xs4>
                  <v-avatar size="100%" color="lime lighten-4">
                    <img :src="team.image">
                  </v-avatar>
                </v-flex>
                <v-flex xs8>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{team.name}} ({{team.age}})</div>
                      <div>{{team.description}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
            </v-hover>
          </v-flex>
        </v-layout>

        <v-flex v-for="team in teams" xs12 >
          <v-layout xs12 :id="team.userName" style="display:none">
            <RepositoryList
                :token="team.token"
                :userName="team.userName"
            ></RepositoryList>
          </v-layout>
        </v-flex>

      </v-flex>
    </v-layout>



    <!-- Post -->
    <!-- <v-layout my-5>
        <v-flex xs12>
          <h2 class="display-1 font-weight-medium my-5 text-xs-center">About Us</h2>
          <v-card>
            <v-container
                    fluid
                    grid-list-lg
            >
              <v-layout row wrap>
                <v-flex xs12 v-for="team in teams">
                  <v-card color="#522A83" class="white--text">
                    <v-layout row>
                      <v-flex xs10>
                        <v-card-title primary-title>
                          <div>
                            <div class="headline">{{team.name}}'s Repository</div>
                          </div>
                        </v-card-title>
                      </v-flex>
                      <v-flex xs2>
                        <v-btn icon @click="team.key = !team.key">
                          <v-icon color="white">{{ team.key ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                    <v-divider light></v-divider>
                  </v-card>
                  <v-flex v-if="team.key">
                    <v-slide-y-transition>
                    <RepositoryList
                        :token="team.token"
                        :userName="team.userName"
                    ></RepositoryList>
                    </v-slide-y-transition>
                  </v-flex>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout> -->

  </v-container>
</div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import RepositoryList from '../components/RepositoryList'

import FirebaseService from '@/services/FirebaseService'

export default {
  name: 'AboutusPage',
  data() {
    return {
      token: '',
      userName: '',
      current: '',
      teams: [{
          name: '이민경',
          age: 26,
          description: '야오밍입니다.',
          url: 'https://lab.ssafy.com/mkl0819',
          image: require('@/assets/mk.png'),
          // image: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light",
          token: 'YwemDXZ5dD-Hxgx-dj5o',
          key: false,
          userName: 'mkl0819'
        },
        {
          name: '이상주',
          age: 28,
          description: '학벌 깡패입니다.',
          url: 'https://lab.ssafy.com/leesangju92',
          image: require('@/assets/sangju.png'),
          // image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Blue03&eyeType=Surprised&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
          token: 'XLZHQWzDiR5vY3px3oWu',
          key: false,
          userName: 'leesangju92'
        },
        {
          name: '이호빈',
          age: 27,
          description: '그냥 깡패입니다.',
          url: 'https://lab.ssafy.com/aegis1920',
          image: require('@/assets/hobin.png'),
          // image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Round&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
          token: '6izgztskLYEhJ__s4Jim',
          key: false,
          userName: 'aegis1920'
        },
        {
          name: '전의환',
          age: 27,
          description: '전의환 입니다.',
          url: 'https://lab.ssafy.com/jeon',
          image: require('@/assets/jeon.png'),
          // image: 'https://avataaars.io/?avatarStyle=Transparent&topType=Eyepatch&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=GraphicShirt&clotheColor=Pink&graphicType=SkullOutline&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Serious&skinColor=Tanned',
          token: 'nxzw23Tzc1aFThgMNEvo',
          key: false,
          userName: 'jeon'
        },
      ],
      show: false,
    }
  },
  components: {
    ImgBanner,
    RepositoryList
  },
  methods: {
    routeName() {
      return this.$route.name
    },
    showRepo(userName){
      if(this.current!=''){
        document.getElementById(this.current).style.display = 'none';
      }
      document.getElementById(userName).style.display = 'block';
      this.current = userName
    }
  }
}
</script>

<style>
.namecard {
  cursor: pointer;
   border-radius:20px;
}
</style>
