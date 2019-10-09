<template>
  <div class="toutiao">
    <v-page :title="title">
      <div class="content-scroll-wrapper">
        <div class="content-scroll-list-wrap" ref="scrollWrapper">
          <cube-scroll
            ref="contentScroll"
            :data="content"
            :options="options"
            @pulling-down="onPullingDown"
            @pulling-up="onPullingUp">
            <ul class="imgs-wrapper">
              <li v-for="(item, index) in content" :key="index" class="imgs-item">
                <img :src="item.url" @load="onImgLoad">
              </li>
            </ul>
            <template slot="pulldown" slot-scope="props">
              <div v-if="props.pullDownRefresh"
                   class="cube-pulldown-wrapper"
                   :style="props.pullDownStyle">
                <div v-if="props.beforePullDown"
                     class="before-trigger"
                     :style="{paddingTop: props.bubbleY + 'px'}">
                  <span :class="{rotate: props.bubbleY > 0}">↓</span>
                </div>
                <div class="after-trigger" v-else>
                  <div v-show="props.isPullingDown" class="loading">
                    <cube-loading></cube-loading>
                  </div>
                  <transition name="success">
                    <div v-show="!props.isPullingDown" class="text-wrapper"><span
                      class="refresh-text">今日头条推荐引擎有x条更新</span></div>
                  </transition>
                </div>
              </div>
            </template>
          </cube-scroll>
        </div>
      </div>
    </v-page>
  </div>
</template>

<script>
  import vPage from 'components/v-page/v-page'

  const imgs = [
    {
      url: 'https://dpubstatic.udache.com/static/dpubimg/7EzIhoEvnG/toutiao_12.JPG'
    },
    {
      url: 'https://dpubstatic.udache.com/static/dpubimg/GR0Piaf5sz/toutiao_21.JPG'
    },
    {
      url: 'https://dpubstatic.udache.com/static/dpubimg/K1JqUN8HSA/toutiao_31.JPG'
    }
  ]
  const txts = ['关注', '推荐', '新时代', '热点', '体育', '娱乐', '科技', '头条号', '问答', '国际', 'cube-ui666']
  let cnt = 1
  export default {
    name: "toutiao",
    data() {
      return {
        title: 'toutiao',
        content: imgs.slice(),
        options: {
          pullDownRefresh: {
            threshold: 60,
            // stop: 44,
            stopTime: 1000,
            txt: '更新成功'
          },
          pullUpLoad: true
        },
        navTxts: txts,
        secondStop: 26
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      onPullingDown() {
        setTimeout(() => {
          this.content.unshift(imgs[cnt++ % 3])
          this.$refs.contentScroll.scrollTo(0, this.secondStop, 300)
        }, 1000)
      },
      onPullingUp() {
        setTimeout(() => {
          this.content = this.content.concat(imgs)
        }, 1000)
      },
      onImgLoad() {
        const contentScroll = this.$refs.contentScroll
        contentScroll.scroll.beforePullDown && contentScroll.refresh()
      }
    },
    computed: {},
    components: {vPage}
  }
</script>

<style scoped lang="stylus">
  .content-scroll-wrapper
    position absolute
    top: 40px
    bottom: 0
    left: 0
    right: 0

    flex: 1
    .content-scroll-list-wrap
      height: 100%
      transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
      position: absolute
      top: 0
      bottom: 0
      overflow: hidden
      .imgs-wrapper
        .imgs-item
          >img
            width: 100%
  .cube-pulldown-wrapper
    text-align: center
    .before-trigger
      height: auto
      font-size: 30px
      align-self: flex-end
      span
        display: inline-block
        line-height: 1
        transition: all 0.3s
        color: #666
        padding: 15px 0
        &.rotate
          transform: rotate(180deg)
    .after-trigger
      flex: 1
      margin: 0
      .text-wrapper
        margin: 0 auto
        margin-top: 14px
        padding: 5px 0
        color: #498ec2
        background-color: #d6eaf8
      .cube-loading-spinners
        margin: auto
  .success-enter-active, .success-leave-active
    transition: width .5s
  .success-enter, .success-leave-to
    width: 70%
  .success-enter-to, .success-leave
    width: 100%
</style>
