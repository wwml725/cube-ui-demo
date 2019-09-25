<template>

  <div class="v-loading">
    <v-Header :go-back="true" title="Loading"></v-Header>
    <div class="loading-container">
      <cube-loading></cube-loading>
      <cube-loading :size="28"></cube-loading>
      <cube-loading :size="40"></cube-loading>
    </div>
  </div>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
    name: "v-loading",
    data() {
      return {
        msg: 'v-loading'
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {},
    computed: {},
    components: {VHeader}
  }
</script>

<style scoped lang="stylus">
  .v-loading
    position absolute
    top:0
    bottom :0
    left:0
    right:0

</style>
