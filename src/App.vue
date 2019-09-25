<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {}
    },
    computed: {},
    components: {}
  }
</script>
<style lang="stylus">
  #app
    position absolute
    top: 0
    left 0
    right 0
    bottom 0
    overflow: hidden
    background #e6e6e6

  /*.fade-enter-active, &.fade-leave-active
    transition: all .9s

  .fade-enter, .fade-leave-active
    opacity: 0
    background: $color-background*/


</style>
