<template>
<div class="py-3">
  <v-layout style="display:block">
    <div class="repo_item">
      <div class="oneline" style="width:80%; margin:auto">
        <h2 class="font-weight-regular repo-txt" style="cursor:pointer" @click.stop="comlist = true">{{repos.path_with_namespace}}</h2>
        <p class="subheading mb-1 grey--text text--darken-1 font-weight-light">{{repos.namespace.name}}</p>
      </div>
    </div>

    <v-card width="80%" style="margin:auto">
      <div class="hidden-xs-only mx-auto text-xs-center"  dark  sm-12>
        <v-sheet color="#fff" >
          <v-sparkline
                :value="modifyValue()"
                line-width="1"
                smooth
                color="#AA00FF"
                stroke-linecap="round"
                :labels = 'labels'
                label-size="3"
                padding-bottom="36">
          </v-sparkline>
        </v-sheet>
      </div>
    </v-card>

    <v-dialog v-model="comlist">
      <v-card xs-12 color="deep-purple lighten-4">
        <v-card-title primary-title hover>
          <div v-model="commits.data">
            <div class="caption">{{repos.namespace.name}}</div>
            <h2 class="color-333 headline font-weight-light">{{repos.path_with_namespace}}</h2>
          </div>
        </v-card-title>
        <v-list three-line>
          <template v-for="(commit, index) in commits.data">


            <v-list-tile @click="">
              <v-list-tile-content>
                <div class="caption">{{commit.author_name}} / {{commit.committed_date.substr(0, 10)}}</div>
                <v-list-tile-title>{{commit.title}}</v-list-tile-title>
                <v-list-tile-sub-title class="repo-txt">{{commit.message}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-dialog>

  </v-layout>

</div>
</template>

<script>
import GitlabService from '@/services/GitlabService'

export default {
  name: 'Repository',
  props: {
    repos: {
      type: null
    },
    token: {
      type: String
    }
  },
  data() {
    return {
      comlist: false,
      stats: {},
      commits: [],
      labels: [ '1월', '2월', '3월', '4월', '5월', '6월',
                '7월', '8월', '9월', '10월', '11월', '12월', ]
    }
  },
  mounted() {
    this.drawStatGraph()
  },
  methods: {
    async drawStatGraph() {
      this.commits = await GitlabService.getCommits(this.repos.id, this.token);
      this.modifyValue();
    },
    modifyValue() {
      var value = [0, 0, 0, 0, 0, 0, 0];
      // }
      for (var i in this.commits.data) {
        let date = new Date(this.commits.data[i].committed_date);
        value[date.getMonth()] += 1;
      }
      return value;
    }
  },
  components: {}
}
</script>

<style>
.repo_item {
  width: 100%;
}
.repo_item>div {
  vertical-align: middle;
  margin-right: 10px;
}

.oneline {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
g{
  dominant-baseline: auto!important;
}
</style>
