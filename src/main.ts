import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'

import VueEmojiParty from './lib'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)
Vue.use(VueEmojiParty, { party: { debug: false } })

new Vue({
  render: (h) => h(App),
}).$mount('#app')
