<template>
  <div class="HorizonfalScrolls">
    <v-page :title="title">
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </v-page>
  </div>
</template>

<script>
  import vPage from 'components/v-page/v-page'
  export default {
    name: "HorizonfalScrolls",
    data() {
      return {
        title: 'HorizonfalScrolls'
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

</style>
