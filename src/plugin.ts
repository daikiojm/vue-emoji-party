import { PluginObject } from 'vue'
import { EmojiPartyDirective } from './directive'

const directiveName = 'emoji-party'

export const plugin: PluginObject<never> = {
  install: (Vue) => {
    Vue.directive(directiveName, EmojiPartyDirective)
  },
}

export const bootstrap = () => {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }
}

export { EmojiPartyDirective }
