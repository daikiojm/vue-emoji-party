# vue-emoji-party

![npm](https://img.shields.io/npm/v/vue-emoji-party) [![github pages](https://github.com/daikiojm/vue-emoji-party/actions/workflows/gh-pages.yml/badge.svg?branch=main)](https://github.com/daikiojm/vue-emoji-party/actions/workflows/gh-pages.yml)

Vue emoji directive with [party.js](https://github.com/yiliansource/party-js)

**[demo]**

## Installation

You can install the latest version via [npm].

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

[npm]: https://www.npmjs.com/package/vue-emoji-party
[demo]: https://daikiojm.github.io/vue-emoji-party/
