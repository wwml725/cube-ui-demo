<template>
  <div class="Tabbar">
    <v-header :go-back="true" title="Tabbar"></v-header>
    <div class="section">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
      </cube-tab-bar>
    </div>
    <!-- showSlider -->
    <div class="section">
      <cube-tab-bar
        v-model="selectedLabelSlots"
        show-slider
        @click="clickHandler"
        @change="changeHandler">
        <cube-tab v-for="(item, index) in tabs" :icon="item.icon" :label="item.label" :key="item.label">
        </cube-tab>
      </cube-tab-bar>
    </div>
    <!-- inline -->
    <div class="section">
      <cube-tab-bar
        v-model="selectedLabelInline"
        show-slider
        inline
        @click="clickHandler"
        @change="changeHandler">
        <cube-tab v-for="(item, index) in tabs" :icon="item.icon" :label="item.label" :key="item.label">
        </cube-tab>
      </cube-tab-bar>
    </div>
    <!-- icon-slot-->
    <div class="section">
      <cube-tab-bar v-model="selectedLabelSlotsOnly" show-slider @click="clickHandler">
        <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
          <i slot="icon" :class="item.icon"></i>
          <!-- use en empty tag to replace default slot -->
          <span>{{item.label}}</span>
          <p>{{item.label}}</p>
        </cube-tab>
      </cube-tab-bar>
    </div>
  </div>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
    name: "Tabbar",
    data() {
      return {
        selectedLabelDefault: 'Vip',
        selectedLabelSlots: 'Like',
        selectedLabelInline: 'Me',
        selectedLabelSlotsOnly: 'Home',
        tabs: [{
          label: 'Home',
          icon: 'cubeic-home'
        }, {
          label: 'Like',
          icon: 'cubeic-like'
        }, {
          label: 'Vip',
          icon: 'cubeic-vip'
        }, {
          label: 'Me',
          icon: 'cubeic-person'
        }]
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      clickHandler(label) {
        // if you clicked home tab, then print 'Home'
        console.log(label)
      },
      changeHandler(label) {
        // if you clicked different tab, this methods can be emitted
      }
    },
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
    z-index: 10
    background: #dcdcdc
    .section
      margin-bottom: 10px
      background-color: white
    .option-list
      .group
        margin-bottom: 15px
      .item
        height: 52px
        border: 1px solid rgba(0, 0, 0, .1)
        background-color: white
        border-radius: 5px
    .cube-tab-bar
      background-color: white


</style>
