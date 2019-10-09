<template>
  <v-page title="default">
    <div class="view-wrapper">
      <div class="index-list-wrapper">
        <cube-index-list
          :data="cityData"
          :title="title"
          @select="selectItem"
          @title-click="clickTitle">
        </cube-index-list>
      </div>
    </div>
  </v-page>
</template>

<script>
  import vPage from 'components/v-page/v-page'
  import cityData from '../data/index-list.json'
  export default {
    components: {
      vPage
    },
    data() {
      return {
        title: 'Current City: BEIJING',
        cityData: cityData
      }
    },
    methods: {
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .view-wrapper
    position: fixed
    top: 54px
    left: 0
    bottom: 0
    width: 100%

    .index-list-wrapper
      height: 98%
      width: 94%
      margin: 0 auto
      overflow: hidden
</style>
