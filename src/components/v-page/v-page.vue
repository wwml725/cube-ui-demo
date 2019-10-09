<template>
  <div class="v-page">
    <v-Header :go-back="true" :title="title"></v-Header>
    <slot></slot>
  </div>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
    props:{
      title:{
        type:String,
        default:'请填写title'
      }
    },
    name: "v-page",
    data() {
      return {
        msg: 'v-page'
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
  .v-page
    position:absolute
    top:0
    left:0
    right:0
    bottom:0

</style>
