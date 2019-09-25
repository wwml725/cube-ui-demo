<template>
  <div class="v-header">
    <div v-if="goBack" class="back" @click="goback">返回</div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
  export default {
    name: "VHeader",
    props: {
      title: {
        type: String,
        default() {
          return ""
        }
      },
      goBack: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    data() {
      return {
        msg: 'VHeader'
      }
    },
    created() {

    },
    mounted() {


    },
    methods: {
      goback(){
        this.$router.go(-1)
      }
    },
    computed: {},
    components: {}
  }
</script>

<style scoped lang="stylus">
  .v-header
    width 100%
    height 40px
    line-height 40px
    text-align center
    background #3f1f31
    color #dcdcdc
    .title
      font-size:20px

  .back
    position absolute
    left:10px



</style>
