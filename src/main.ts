import Vue from 'vue'
import App from './App.vue'

import VueEmojiParty from './lib'

Vue.config.productionTip = false

Vue.use(VueEmojiParty)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
