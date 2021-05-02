import Vue, { PluginObject } from 'vue'
import * as party from 'party-js'
import { EmojiPartyDirective } from './directive'

const directiveName = 'emoji-party'

export type Options = {
  party?: typeof party.settings
}

export const plugin: PluginObject<Options> = {
  install: (app: typeof Vue, options?: Options) => {
    if (options && options.party) {
      const { debug, gravity, zIndex } = options.party
      party.settings.debug = debug || party.settings.debug
      party.settings.gravity = gravity || party.settings.gravity
      party.settings.zIndex = zIndex || party.settings.zIndex
    }

    app.directive(directiveName, EmojiPartyDirective)
  },
}

export const bootstrap = () => {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }
}

export { EmojiPartyDirective }
