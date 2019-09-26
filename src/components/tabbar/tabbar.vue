<template>
  <transition name="slide">

    <div class="tabbar-container">
      <v-header :go-back="true" title="Tabbar"></v-header>
      <div class="tabbar-wrapper">
        <cube-button @click="skip('/Tabbar')">Tabbar</cube-button>
        <cube-button @click="skip('/TabBasic')">Tab-basic</cube-button>
        <cube-button @click="skip('/Tab-composite')">Tab-composite</cube-button>
        <cube-button @click="skip('/ScrollTab-Demo')">ScrollTab-Demo</cube-button>
        <cube-button @click="skip('/test')">Test</cube-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
    name: "tabbar",
    data() {
      return {
        msg: 'tabbar',
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      skip(toPath) {
        this.$router.push('/tabbar' + toPath)
      }
    },
    computed: {},
    components: {VHeader}
  }
</script>

<style scoped lang="stylus">
  .tabbar-container
    position absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index :9

    &.slide-enter-active,&.slide-leave-active
      transition: all .3s

    &.slide-enter,&.slide-leave-to
      transform: translate3d(100%, 0, 0)

    .tabbar-wrapper
      padding: 10px

      >>> .cube-btn
        margin-bottom: 5px


</style>
