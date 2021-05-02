# vue-emoji-party

![npm](https://img.shields.io/npm/v/vue-emoji-party)

Vue emoji directive with [party.js](https://github.com/yiliansource/party-js)

## Installation

```bash
npm i vue-emoji-party
# or
yarn add vue-emoji-party
```

## Setup

### Basic

```ts
import Vue from 'vue'
import App from './App.vue'
import VueEmojiParty from 'vue-emoji-party'

Vue.use(VueEmojiParty)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

### With party.js settings

```ts
import Vue from 'vue'
import App from './App.vue'
import VueEmojiParty from 'vue-emoji-party'

// See: https://party.js.org/docs/configuration
Vue.use(VueEmojiParty, { party: { debug: true } })

new Vue({
  render: h => h(App)
}).$mount('#app')
```

## Usage

### Basic (random)

```html
<button v-emoji-party>emoji party</button>
```

### With specified emoji

```html
<button v-emoji-party:emoji="'tada'">emoji party</button>
```

### With full options

```html
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
```
