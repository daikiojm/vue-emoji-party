<template>
  <div
    id="app"
    class="h-screen flex flex-col bg-gradient-to-br from-pink-400 to-blue-500"
  >
    <transition name="left">
      <div
        v-if="showDefault"
        key="default"
        class="container h-72 m-auto py-16 md:px-20 sm:py-16 sm:px-1 w-4/5 sm:w-4/5 shadow-xl bg-white rounded-lg"
        v-emoji-party="{ mouseover: true, count: { min: 5, max: 10 } }"
      >
        <h1 class="text-4xl font-bold mb-4 text-center">vue-emoji-party</h1>
        <h3 class="text-center mb-4">
          Vue emoji directive with
          <a href="https://party.js.org/" target="_blank" class="text-red-400">
            party.js
          </a>
        </h3>
        <div class="flex justify-center">
          <button
            class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            v-emoji-party
            aria-label="click me"
          >
            Click me {{ randomEmoji }}
          </button>
        </div>
        <div class="flex justify-center mt-4">
          <p
            class="inline-flex text-gray-500 hover:text-gray-700 text-sm cursor-pointer"
            @click="toggleDemo"
          >
            More demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </p>
        </div>
      </div>
      <div
        v-if="showDemo"
        key="demo"
        class="container h-72 m-auto py-16 md:px-20 sm:py-16 sm:px-1 w-4/5 sm:w-4/5 shadow-xl bg-white rounded-lg"
      >
        <h1 class="text-4xl font-bold mb-4 text-center">Demo</h1>
        <div class="flex flex-wrap justify-center px-2">
          <button
            class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
            v-emoji-party
            aria-label="default"
          >
            Default
          </button>
          <button
            class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2 mt-2"
            v-emoji-party="{ random: true }"
            aria-label="random"
          >
            Random
          </button>
          <button
            class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2 mt-2"
            v-emoji-party:emoji="'poop'"
            aria-label="specified"
          >
            Specified
          </button>
          <button
            class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2 mt-2"
            v-emoji-party="{ mouseover: true }"
            aria-label="hover"
          >
            Hover
          </button>
          <button
            class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2 mt-2"
            v-emoji-party="{ count: { min: 20, max: 500 } }"
            aria-label="custom count"
          >
            Custom count
          </button>
        </div>
        <div class="flex justify-center mt-8">
          <p
            class="inline-flex text-gray-500 hover:text-gray-700 text-sm cursor-pointer"
            @click="toggleDemo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Top
          </p>
        </div>
      </div>
    </transition>
    <footer class="bg-blue-400 bg-opacity-50">
      <p class="pt-2 p-1 text-center text-xs text-blue-100">
        <a
          href="https://github.com/daikiojm/vue-emoji-party"
          target="_blank"
          aria-label="github"
          >🐱 GitHub</a
        >
        <a
          class="ml-4"
          href="https://www.npmjs.com/package/vue-emoji-party"
          target="_blank"
          aria-label="npm"
          >🤖 npm</a
        >
      </p>
      <p class="pb-2 p-1 text-center text-xs text-blue-100">
        Copyright © 2021
        <a href="https://github.com/daikiojm" target="_blank">Daiki Ojima</a>.
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import * as nodeEmoji from 'node-emoji'

export default defineComponent({
  name: 'App',
  setup() {
    const showDefault = ref<boolean>(true)
    const showDemo = ref<boolean>(false)
    const randomEmoji = ref<string>(nodeEmoji.random().emoji)

    const toggleDemo = () => {
      if (showDefault.value) {
        showDefault.value = false
        randomEmoji.value = nodeEmoji.random().emoji
        setTimeout(() => (showDemo.value = true), 500)
      } else {
        showDemo.value = false
        randomEmoji.value = nodeEmoji.random().emoji
        setTimeout(() => (showDefault.value = true), 500)
      }
    }
    return {
      showDefault,
      showDemo,
      randomEmoji,
      toggleDemo,
    }
  },
})
</script>
<style scoped lang="scss">
.left-enter-active,
.left-leave-active {
  transform: translate(0px, 0px);
  transition: transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.left-enter,
.left-leave-to {
  transform: translateX(-100vw) translateX(0px);
}
</style>
