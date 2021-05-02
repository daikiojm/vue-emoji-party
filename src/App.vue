<template>
  <div
    id="app"
    class="min-h-screen bg-blue-100 py-60 bg-gradient-to-br from-pink-400 to-blue-500"
  >
    <div
      class="container mx-auto p-10 shadow-xl bg-white rounded-lg"
      v-emoji-party="{ mouseover: true, count: { min: 5, max: 10 } }"
    >
      <h1 class="text-4xl font-bold mb-4 text-center">vue-emoji-party</h1>
      <h3 class="text-center mb-4">Vue emoji directive with party.js</h3>
      <div class="flex justify-center">
        <button
          class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          v-emoji-party
        >
          Click me 💩
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'App',
})
</script>
