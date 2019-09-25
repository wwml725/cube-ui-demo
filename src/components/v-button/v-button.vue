<template>
  <transition name="slide">
    <div class="v-button">
      <v-Header :go-back="true" title="Button"></v-Header>
      <div class="btn-container">
        <div class="button-wrapper">
          <cube-button>Button</cube-button>
          <cube-button type="submit">Submit Button</cube-button>
          <cube-button :active="true">Active Button</cube-button>
          <cube-button :disabled="true">Disabled Button</cube-button>
          <cube-button icon="cubeic-right">Button With Icon</cube-button>
          <cube-button :light="true">Light Button</cube-button>
          <cube-button :inline="true">Inline Button</cube-button>
          <cube-button :outline="true">Outline Button</cube-button>
          <cube-button :primary="true">Primary Button</cube-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
    name: "v-button",
    data() {
      return {
        msg: 'v-button'
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
  .v-button
    position absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index 9

    &.slide-enter-active,&.slide-leave-active
      transition: all .3s

    &.slide-enter,&.slide-leave-to
      transform: translate3d(100%, 0, 0)

    .btn-container
      position absolute
      top: 40px
      bottom: 0
      left: 0
      right: 0
      overflow scroll

      .button-wrapper
        padding: 10px

        >>> .cube-btn
          margin-top: 5px


</style>
