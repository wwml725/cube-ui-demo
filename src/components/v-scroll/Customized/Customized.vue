<template>
  <div class="default">
    <v-page :title="title">
      <div class="scroll-list-wrap">
        <p class="page-description">默认下拉刷新动画</p>
        <cube-scroll
          ref="scroll"
          :data="items"
          :options="options"
          @pulling-down="onPullingDown"
          @pulling-up="onPullingUp"
        >
          <ul class="foods-wrapper">
            <li v-for="food in items" class="food-item border-1px">
              <div class="icon">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="food-content">
                <h2 class="name">{{food.name}}</h2>
                <p class="description">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </v-page>
  </div>
</template>

<script>
  import vPage from 'components/v-page/v-page'
  import goodsData from '../data/goods-list.json'


  //获取食物列表
  let _foods = []
  goodsData.goods.forEach(item => {
    _foods = _foods.concat(item.foods)
  });

  export default {
    name: "Customized",
    data() {
      return {
        title: 'Customized',
        items: _foods,//初始数据只有33条
        pullDownRefresh: false,//下拉刷新，false代表不启用这个功能
        pullDownRefreshThreshold: 60,//下拉的距离
        pullDownRefreshStop: 40,//
        pullDownRefreshTxt: 'Refresh success',

        //下拉参数
        pullUpLoad: false,
        pullUpLoadThreshold: 20,
        pullUpLoadMoreTxt: 'Load more',
        pullUpLoadNoMoreTxt: 'No more data',
        customPullDown: false
      }
    },
    created() {

    },
    mounted() {

    },
    computed: {
      options() {
        return {
          pullDownRefresh: this.pullDownRefreshObj,
          pullUpLoad: this.pullUpLoadObj,
          scrollbar: true
        }
      },
      //options的参数
      pullDownRefreshObj() {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          txt: this.pullDownRefreshTxt
        } : true
      },
      pullUpLoadObj() {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {
            more: this.pullUpLoadMoreTxt,
            noMore: this.pullUpLoadNoMoreTxt
          }
        } : true
      }
    },
    methods: {
      //下拉触发的事件
      onPullingDown() {
        // 模拟更新数据
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            this.items.unshift(_foods[1])
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1000)
      },

      //上拉触发的事件
      onPullingUp() {
        // 更新数据
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            let newPage = _foods.slice(0, 20)
            this.items = this.items.concat(newPage)
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1000)
      },

    },
    components: {vPage}
  }
</script>

<style scoped lang="stylus">
  .scroll-list-wrap
    position: absolute
    top:40px
    left:0
    right:0
    bottom:0

    border: 1px solid rgba(0, 0, 0, 0.1)
    border-top:none
    border-bottom-left-radius :5px
    border-bottom-right-radius :5px
    transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
    overflow: hidden
    .page-description{
      height:20px
      background #7a7a7a
      color: #fe452e
      font-size :16px
      text-align center
      line-height 20px
    }
  .foods-wrapper
    .food-item
      background :lightgoldenrodyellow
      display: flex
      padding: 18px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      &:last-child
        border-none()
        margin-bottom: 0
      .icon
        flex: 0 0 57px
        margin-right: 10px
      .food-content
        flex: 1
        .name
          margin: 2px 0 8px 0
          height: 14px
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27)
        .description, .extra
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
        .description
          line-height: 12px
          margin-bottom: 8px
        .extra
          .count
            margin-right: 12px
        .price
          font-weight: 700
          line-height: 24px
          .now
            margin-right: 8px
            font-size: 14px
            color: rgb(240, 20, 20)
          .old
            text-decoration: line-through
            font-size: 10px
            color: rgb(147, 153, 159)
        .cartcontrol-wrapper
          position: absolute
          right: 0
          bottom: 12px
</style>
