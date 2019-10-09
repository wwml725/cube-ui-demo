<template>
  <div class="IndexList">
    <v-header :go-back="true" title="IndexList"></v-header>
    <div class="tabbar-wrapper">
      <cube-button @click="skip('/Default')">1.Default</cube-button>
      <cube-button @click="skip('/custom')">2.custom</cube-button>
    </div>
  </div>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
    name: "IndexList",
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
        this.$router.push('/IndexList' + toPath)
      }
    },
    computed: {},
    components: {VHeader}
  }
</script>

<style scoped lang="stylus">
  .IndexList
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
