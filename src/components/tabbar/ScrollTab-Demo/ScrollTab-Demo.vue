<template>
    <div class="ScrollTab-Demo">
      <v-header :go-back="true" title="ScrollTab-Demo"></v-header>

    </div>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
        name: "ScrollTab-Demo",
        data() {
            return {
                msg: 'ScrollTab-Demo'
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
  .ScrollTab-Demo
    position absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index :10
    background : #dcdcdc
</style>
