<template>
  <div id="app">
    <button v-emoji-party:emoji="'tada'">emoji party</button>
    <button
      v-emoji-party="{
        random: false,
        emoji: ['tada', 'sushi'],
        count: { min: 10, max: 200 },
        click: true,
        mouseover: false,
      }"
    >
      emoji party
    </button>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
