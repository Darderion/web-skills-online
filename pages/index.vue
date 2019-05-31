<template>
  <section class="appContainer">
    <SkillTree></SkillTree>
    <MenuOverlay />
  </section>
</template>

<script>

import SkillTree from '../components/SkillTree'
import MenuOverlay from '../components/MenuOverlay'

export default {
  head: {
    script: [
      { src: '../assets/main.js' }
    ]
  },
  components: {
    SkillTree,
    MenuOverlay
  }, scripts : {
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>
