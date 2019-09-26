<template>
  <div class="Tab-basic">
    <v-header :go-back="true" title="Tab-basic"></v-header>
    <cube-tab-bar v-model="selectedLabel" show-slider>
      <cube-tab
        v-for="(item, index) in tabs"
        :icon="item.icon"
        :label="item.label"
        :key="item.label">
      </cube-tab>
    </cube-tab-bar>

    <cube-tab-panels v-model="selectedLabel">
      <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">
        <ul>
          <li class="tab-panel-li" v-for="(hero, index) in item.heroes">
            {{hero}}
          </li>
        </ul>
      </cube-tab-panel>
    </cube-tab-panels>
  </div>
</template>

<script>
  import VHeader from 'base/v-header/v-header'

  export default {
    name: "Tab-composite",
    data() {
      return {
        msg: 'Tab-composite',
        selectedLabel: '天辉',
        tabs: [
          {
            label: '天辉',
            icon: 'cubeic-like',
            heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵', '幻影长矛手', '复仇之魂', '力丸', '矮人狙击手', '圣堂刺客', '露娜', '赏金猎人', '熊战士']
          },
          {
            label: '夜魇',
            icon: 'cubeic-star',
            heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
          },
          {
            label: 'AAA',
            icon: 'cubeic-star',
            heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
          },

          ]
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
  .Tab-basic
    position absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 10
    background: #dcdcdc

    .cube-tab-bar
      background-color: #fff

    .cube-tab-panels
      background-color: #fff

    .tab-panel-li
      padding: 0 16px
      height: 40px
      line-height: 40px
      border-top: 1px solid #eee

      &:last-child
        border-bottom: 1px solid #eee
</style>
