<template>
  <div class="test">
    <v-header :go-back="true" title="Test"></v-header>
    <cube-tab-bar
      ref="tabNav"
      inline
      show-slider
      :data="tabs"
      v-model="selectedLabel"

    >

    </cube-tab-bar>

    <div class="tab-slider-container">
      <cube-slide ref="slide"
                  :loop="loop"
                  :initial-index="initialIndex"
                  :auto-play="autoPlay"
                  :show-dots="showDots"
                  :options="slideOptions"
                  @change="changePage"
                  @scroll="scroll"
      >
        <cube-slide-item>
          <cube-scroll
            :options="scrollOptions"
            :data="followersData">
            <ul class="list-wrapper">
              <li v-for="(item, index) in followersData"
                  class="list-item"
                  :key="index">
                <div class="top">
                  <img :src="item.avatar" class="avatar">
                  <span class="time">qqqqq</span>
                </div>
                <div class="middle is-bold line-height">{{item.question}}</div>
                <div>hhhhh</div>
              </li>
            </ul>
          </cube-scroll>


        </cube-slide-item>
        <cube-slide-item>bbbb</cube-slide-item>
        <cube-slide-item>cccc</cube-slide-item>
        <cube-slide-item>dddd</cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
  import VHeader from 'base/v-header/v-header'
  import { findIndex } from 'common/utils/index'
  import { FOLLOWERS_DATA, RECOMMEND_DATA, HOT_DATA } from '../data/index'


  export default {
    name: "test",
    data() {
      return {
        msg: 'test',
        selectedLabel:'Home',
        tabs:[
          {label:'Home',icon:'cubeic-home'},
          {label:'Like',icon:'cubeic-home'},
          {label:'Vip',icon:'cubeic-home'},
          {label:'Me',icon:'cubeic-home'},
        ],
        loop:false,
        autoPlay: false,
        showDots: false,
        // initialIndex:0,
        followersData: FOLLOWERS_DATA,
        scrollOptions: {
          /* lock x-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        slideOptions: {
          listenScroll: true,//实时监听scroll事件，用来控制滑动 下面文章，下划线随之比例移动
          probeType: 3,//监听频率
          /* lock y-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      //1、滑动slider改变tabs选项
      changePage (current) {
        this.selectedLabel = this.tabs[current].label
        console.log(current)
      },
      scroll (pos) {
        const x = Math.abs(pos.x)
        const tabItemWidth = this.$refs.tabNav.$el.clientWidth
        const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
        const deltaX = x / slideScrollerWidth * tabItemWidth
        this.$refs.tabNav.setSliderTransform(deltaX)
      },


    },
    computed: {
      initialIndex () {
        let index = 0
        index = findIndex(this.tabs, item => item.label === this.selectedLabel)
        return index
      }

    },
    components: {VHeader}
  }
</script>

<style scoped lang="stylus">
  .test
    position:absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 10
    background: #dcdcdc
    .cube-tab-bar
      background-color: white
    .cube-tab, .cube-tab_active
      color: black
    .cube-tab-bar-slider
      background-color: black
    >>>.tab-slider-container
      position: fixed
      top: 70px
      left: 0
      right: 0
      bottom: 0
      /*overflow hidden*/
      background antiquewhite
    .list-wrapper
      overflow: hidden
      li
        padding: 15px 10px
        margin-top: 10px
        text-align: left
        background-color: white
        font-size: 14px
        color: #999
        white-space: normal
        .line-height
          line-height: 1.5
        .is-black
          color: black
        .is-grey
          color: #999
        .is-bold
          font-weight: bold
        .top
          display: flex
          .avatar
            width: 15px
            height: 15px
            margin-right: 2px
            border-radius: 100%
          .time
            flex: 1
        .middle
          display: flex
          margin: 10px 0
          color: black
        .hot-title
          display: flex
          align-items: center
          font-size: 12px
          .hot-sequence
            display: inline-block
            margin-right: 2px
            padding: 3px 6px
            border-radius: 2px
            background-color: darkgoldenrod
            color: white
        .hot-content
          margin-top: 15px
</style>
