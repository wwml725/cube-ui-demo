<template>
  <v-page>
    <div class="view-wrapper">
      <div class="index-list-wrapper">
        <cube-index-list
          ref="indexList"
          :data="data"
          :title="title"
          :options="options"
          @select="selectItem"
          @title-click="clickTitle"
          @pulling-up="onPullingUp">
        </cube-index-list>
      </div>
    </div>
  </v-page>
</template>

<script>
  import vPage from 'components/v-page/v-page.vue'
  import cityData from '../data/index-list.json'
  export default {
    components: {
      vPage
    },
    data() {
      return {
        title: 'Current City: BEIJING',
        data: cityData.slice(0, 4),
        options: {
          pullUpLoad: true
        }
      }
    },
    methods: {
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      },
      onPullingUp() {
        // Mock async load.
        setTimeout(() => {
          const length = this.data.length
          if (length < cityData.length) {
            // Update data.
            this.data.push(cityData[length])
          }
          // Call forceUpdate after finishing data load.
          this.$refs.indexList.forceUpdate()
        }, 1000)
      }
    }
  }</script>

<style scoped lang="stylus">
  .view-wrapper
    position: fixed
    top: 54px
    left: 0
    bottom: 0
    width: 100%
    background :white
    .index-list-wrapper
      height: 100%
      width: 100%
      margin: 0
      overflow: hidden
</style>
