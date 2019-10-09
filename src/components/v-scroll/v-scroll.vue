<template>
    <div class="v-scroll-container">
      <v-header :go-back="true" title="scroll"></v-header>
      <div class="tabbar-wrapper">
        <cube-button @click="skip('/Default')">1.Default</cube-button>
        <cube-button @click="skip('/Horizontal')">2.Horizontal</cube-button>
        <cube-button @click="skip('/Customized')">3.Customized</cube-button>
        <cube-button @click="skip('/JD')">4.JD</cube-button>
        <cube-button @click="skip('/toutiao')">5.toutiao</cube-button>
        <cube-button @click="skip('/VerticalScrolls')">6.VerticalScrolls</cube-button>
        <cube-button @click="skip('/HorizonfalScrolls')">7.HorizonfalScrolls</cube-button>
        <cube-button @click="skip('/test')">Test</cube-button>
      </div>
    </div>
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
        this.$router.push('/scroll' + toPath)
      }
    },
    computed: {},
    components: {VHeader}
  }
</script>

<style scoped lang="stylus">
  .v-scroll-container
    position absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index :9

    .tabbar-wrapper
      padding: 10px

      >>> .cube-btn
        margin-bottom: 5px


</style>
