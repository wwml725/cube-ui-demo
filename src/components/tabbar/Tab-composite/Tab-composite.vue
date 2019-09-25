<template>
    <div class="Tab-composite">
      <v-header :go-back="true" title="Tab-composite"></v-header>
    </div>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
        name: "Tab-composite",
        data() {
            return {
                msg: 'Tab-composite'
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
  .Tab-composite
    position absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index :10
    background : #dcdcdc
</style>
