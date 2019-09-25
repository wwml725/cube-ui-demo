<template>
  <div class="toolbar">
    <v-Header :go-back="true" title="Toolbar"></v-Header>

  </div>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
    name: "toolbar",
    data() {
      return {
        msg: 'toolbar'
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
  .toolbar
    position absolute
    top:0
    bottom :0
    left:0
    right:0
</style>
