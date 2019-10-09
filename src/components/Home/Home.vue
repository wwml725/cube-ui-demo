<template>
  <div class="home">
    <v-Header :go-back="false" title="cube-ui"></v-Header>
    <h3>Basic基础</h3>
    <div class="select-item" @click="skip('/v-button')">
      <p>Button</p>
      <i class="icon-keyboard_arrow_right"></i>
    </div>

    <div class="select-item">
      <router-link to="/v-loading">Loading</router-link>
      <i class="icon-keyboard_arrow_right"></i>

    </div>

    <div class="select-item">
      <router-link to="/tip">Tip</router-link>
      <i class="icon-keyboard_arrow_right"></i>

    </div>

    <div class="select-item">
      <router-link to="/toolbar">Toobar</router-link>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="select-item">
      <router-link to="/tabbar">Tabbar</router-link>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <h3>Form表单组件</h3>
    <h3>Popup弹窗组件</h3>
    <h3>Scroll组件</h3>
    <div class="select-item">
      <router-link to="/scroll">Scroll</router-link>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="select-item">
      <router-link to="/slide">Slide</router-link>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="select-item">
      <router-link to="/IndexList">IndexList</router-link>
      <i class="icon-keyboard_arrow_right"></i>
    </div>

    <cube-button :light="true">
      <div @click="skip('/v-button')">测试</div>
    </cube-button>

  </div>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
    name: "Home",
    data() {
      return {
        msg: 'Home'
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      skip(item){
        let timer = setTimeout(()=>{
          this.$router.push(item)
          clearTimeout(timer)
        },100)
      }
    },
    computed: {},
    components: {VHeader}
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  h3
    height: 40px
    line-height 40px
    background: #e7e7e7
    width: 100%
    font-size: 18px
    /*text-align center*/
    padding: 0 10px
    color: #a8a8a8

  .select-item
    width: 100%
    height: 35px
    background: white
    /*text-align center*/
    line-height 35px
    border-bottom: 1px solid #b6b6b6
    padding: 0 10px
    cursor: pointer
    position:relative
    box-sizing :border-box
    a
      display :block
      width:100%
      height:100%

    .icon-keyboard_arrow_right
      margin-left: 2px
      font-size: $fontsize-small-ssss
      position:absolute
      right:10px
      top:0
      height:35px
      line-height 35px






</style>
