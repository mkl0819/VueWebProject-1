<template>
  <v-footer

    height="auto"
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-xs-center"
    >
      <v-card-text color="#A2052C">

        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-3 white--text"
          :href="icon.link"
          icon
        >
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" size="24px">{{ icon.icon }}</v-icon>
          </template>
          <span>{{icon.name}}으로 이동해보아요!
            <v-icon small color="#FDD835">far fa-grin-squint</v-icon>
          </span>
        </v-tooltip>
          <!-- <v-icon size="24px">{{ icon }}</v-icon> -->
        </v-btn>
        <Translate></Translate>
        <Weather></Weather>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <!-- Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. -->
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 — <strong>Ming</strong>

      </v-card-text>

    </v-card>
  </v-footer>
</template>

<script>
  import Weather from '@/components/Weather'
  import Translate from '@/components/Translate.vue'

  export default {
    name: 'Footer',
    components: {
      Weather,
      Translate
    },
    data: () => ({
      icons: [
        {
          icon : 'fab fa-github',
          link : 'http://github.com/mkl0819',
          name : '깃허브'
        },
        {
          icon : 'fas fa-blog',
          link : 'http://mkl0819.github.io',
          name : '블로그'
        }
      ]
    }),
  }
</script>

<style>
.indigo {
  width: 100%;
}
</style>
