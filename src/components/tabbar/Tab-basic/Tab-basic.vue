<template>

    <div class="Tab-basic">
      <v-header :go-back="true" title="Tab-basic"></v-header>
    </div>

</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
    // name: "Tab-basic",
    data() {
      return {
        msg: 'Tab-basic'
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
  .Tab-basic
    position absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index :10
    background : #dcdcdc
</style>
