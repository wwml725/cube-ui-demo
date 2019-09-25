<template>
    <div class="Tabbar">
      <v-header :go-back="true" title="Tabbar"></v-header>
    </div>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
        name: "Tabbar",
        data() {
            return {
                msg: 'Tabbar'
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
  .Tabbar
    position absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index :10
    background : #dcdcdc


</style>
