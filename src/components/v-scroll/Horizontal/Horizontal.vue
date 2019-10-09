<template>
  <div class="Horizontal">
    <v-page :title="title">
          <div class="title">horizontal Demo</div>
          <div class="demo">
            <cube-scroll
              ref="scroll"
              :data="items"
              direction="horizontal"
              class="horizontal-scroll-list-wrap">
              <ul class="list-wrapper">
                <li v-for="item in items" class="list-item">{{ item }}</li>
              </ul>
            </cube-scroll>
          </div>

    </v-page>
  </div>
</template>

<script>
  import vPage from 'components/v-page/v-page'
  const _data = [
    '😀 😁 😂 🤣 😃 🙃 ',
    '👈🏻  scroll 👉🏻 ',
    '🙂 🤔 😄 🤨 😐 🙃 ',
    '👈🏻  scroll 👉🏻 ',
    '😔 😕 🙃 🤑 😲 ☹️ ',
    '👈🏻  scroll 👉🏻 ',
    '🐣 🐣 🐣 🐣 🐣 🐣 ',
    '👈🏻  scroll 👉🏻 ',
    '🐥 🐥 🐥 🐥 🐥 🐥 ',
    '👈🏻  scroll 👉🏻 ',
    '🤓 🤓 🤓 🤓 🤓 🤓 ',
    '👈🏻  scroll 👉🏻 ',
    '🦔 🦔 🦔 🦔 🦔 🦔 ',
    '👈🏻  scroll 👉🏻 ',
    '🙈 🙈 🙈 🙈 🙈 🙈 ',
    '👈🏻  scroll 👉🏻 ',
    '🚖 🚖 🚖 🚖 🚖 🚖 ',
    '👈🏻  scroll 👉🏻 ',
    '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
  ]

  export default {
    name: "Horizontal",
    data() {
      return {
        title: 'Horizontal',
        items: _data,

      }
    },
    created() {

    },
    mounted() {

    },
    methods: {},
    computed: {},
    components: {vPage}
  }
</script>

<style scoped lang="stylus">
  >>>.horizontal-scroll-list-wrap
    border: 1px solid rgba(0, 0, 0, 0.1)
    border-radius: 5px
    .cube-scroll-content
      display: inline-block
    .list-wrapper
      padding: 0 10px
      line-height: 60px
      white-space: nowrap
    .list-item
      display: inline-block
</style>
