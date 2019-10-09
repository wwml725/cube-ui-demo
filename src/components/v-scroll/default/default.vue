<template>
  <div class="default">
    <v-page title="default">
      <div class="scroll-list-wrap">
        <cube-scroll
          ref="scroll"
          :data="items"
          :options="options">
        </cube-scroll>
      </div>
    </v-page>
  </div>
</template>

<script>
  import vPage from 'components/v-page/v-page'

  const _data = [
    '😀 😁 😂 🤣 😃 😄 😀 😁 😂 🤣  ',
    '🙂 🤗 🤩 🤔 🤨 😐 😀 😁 😂 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '😔 😕 🙃 🤑 😲 ☹ 😀 😁 😂 🤣  ',
    '🐣 🐣 🐣 🐣 🐣 🐣 😀 😁 😂 🤣  ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🐥 🐥 🐥 🐥 🐥 🐥 😀 😁 😂 🤣  ',
    '🤓 🤓 🤓 🤓 🤓 🤓 😀 😁 😂 🤣  ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🦔 🦔 🦔 🦔 🦔 🦔 😀 😁 😂  ',
    '🙈 🙈 🙈 🙈 🙈 🙈 😀 😁 😂 🤣  ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🚖 🚖 🚖 🚖 🚖 🚖 😀 😁 😂 🤣 ',
    '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
  ]
  export default {
    name: "default",
    data() {
      return {
        msg: 'default',
        items: _data,
        startY: 0,
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {},
    computed: {
      options() {
        return {
          startY: this.startY
        }
      },

    },
    components: {vPage}
  }
</script>

<style scoped lang="stylus">
  .scroll-list-wrap
    /*background :lightgoldenrodyellow*/
    /*height: 500px*/
    position absolute
    top:40px
    left:0
    right:0
    bottom:0
  >>>.cube-scroll-list-wrapper
    background lightgoldenrodyellow
    >>>.cube-scroll-list
      >>>.cube-scroll-item
        text-align center
</style>
