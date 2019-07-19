<template>
<!-- div -->
<div>
  <welcome id="intro" />

  <!-- imgbanner -->
  <ImgBanner :pagename="routeName()">
    <div style="line-height:1.2em; font-size:10vw; font-family: Aladdin" slot="text">Welcome To<br>Aladdin</div>
  </ImgBanner>
  <!-- container -->
  <v-container>
    <!-- About Me -->
    <About
    ></About>


    <!-- Board -->
    <v-layout my-5>
      <v-flex xs12>
        <router-link to="/Board" style="text-decoration:none; color:black">
          <h2 class="my-5 text-xs-center page_title">Board</h2>
        </router-link>
        <BoardList></BoardList>
      </v-flex>
    </v-layout>

    <!-- Github -->
    <v-layout my-5>
      <v-flex xs12>
        <h2 class="my-5 text-xs-center page_title">About Us</h2>
        <v-card flat color="white">
          <v-container fluid grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12 sm6 v-for="team in teams">
                <v-card color="white" class="black--text" style="min-width: 200px; min-height: 300px;">
                  <Person :name="team.name" :description="team.description" :image="team.image" :url="team.url"></Person>
                  <v-layout row>
                    <v-flex xs7>

                    </v-flex>
                  </v-layout>
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
import Person from'../components/Person'
import About from '../components/About'
import welcome from '../components/welcome.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      teams: [{
          name: '이민경',
          age: 26,
          description: '야오밍입니다.',
          url: 'https://lab.ssafy.com/mkl0819',
          image: require('@/assets/ming.png'),
          //image: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light",
          token: 'YwemDXZ5dD-Hxgx-dj5o',
          key: false,
          userName: 'mkl0819'
        },
        {
          name: '이상주',
          age: 28,
          description: '학벌 깡패입니다.',
          url: 'https://lab.ssafy.com/leesangju92',
          image: require('@/assets/sang.png'),
          //image: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Side&eyebrowType=Default&mouthType=Default&skinColor=Pale',
          token: 'XLZHQWzDiR5vY3px3oWu',
          key: false,
          userName: 'mkl0819'
        },
        {
          name: '이호빈',
          age: 27,
          description: '그냥 깡패입니다.',
          url: 'https://lab.ssafy.com/aegis1920',
          image: require('@/assets/leehobin.jpg'),
          //image: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Side&eyebrowType=Default&mouthType=Default&skinColor=Pale',
          token: '6izgztskLYEhJ__s4Jim',
          key: false,
          userName: 'aegis1920'
        },
        {
          name: '전의환',
          age: 27,
          description: '전의환 입니다.',
          url: 'https://lab.ssafy.com/jeon',
          image: require('@/assets/profile.png'),
          //image: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Side&eyebrowType=Default&mouthType=Default&skinColor=Pale',
          token: 'nxzw23Tzc1aFThgMNEvo',
          key: false,
          userName: 'jeon'
        },
      ]
    }
  },
  components: {
    ImgBanner,
    BoardList,
    RepositoryList,
    Person,
    welcome,
    About
  },
  methods: {
    getImgUrl(img) {
      return require('../assets/' + img)
    },
    routeName() {
      return this.$route.name
    },
    preLoader() {
      setTimeout(function() {
        var intro = document.getElementById('intro');
        intro.style.display = 'none';
      }, 7000);
    }
  },
  mounted() {
    console.log(this.$store.state.intro)
    if (!this.$store.state.intro) {
      this.$store.state.intro = true;
      this.preLoader();
    } else {
      var intro = document.getElementById('intro');
      intro.style.display = 'none';
    }
  }
}
</script>

<style>

</style>
