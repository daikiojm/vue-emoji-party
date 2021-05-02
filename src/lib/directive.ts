import { VNodeDirective } from 'vue/types/vnode'
import { DirectiveOptions, DirectiveFunction } from 'vue'
import * as party from 'party-js'
import * as nodeEmoji from 'node-emoji'

import { Configuration, defaultConfig } from './config'
import { isString, isBoolean, isObject, isStringArray } from './util'

const emojiShapePrefix = 'emoji_'

/* eslint-disable @typescript-eslint/no-explicit-any */
type PartyConfettiConfigurationLazy = {
  count: any
  spread: any
  speed: any
  size: any
  rotation: any
  colour: any
  rotationOverLifetime: any
  sizeOverLifetime: any
  shapes: any
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const getPartyShapes = (emojiKeys: string[]) =>
  emojiKeys.map((k) => emojiShapeKey(k))

const getAllEmojiKeys = () => nodeEmoji.search('').map((e) => e.key)

const getPartyOptions = (
  config: Configuration
): Partial<PartyConfettiConfigurationLazy> => {
  return {
    count: party.variation.range(config.count.min, config.count.max),
    shapes: config.random
      ? getPartyShapes([nodeEmoji.random().key])
      : config.emoji.length < 1
      ? getAllEmojiKeys().map((k) => emojiShapeKey(k))
      : getPartyShapes(config.emoji),
  }
}

const emojiShapeFactory = (emoji: nodeEmoji.Emoji) =>
  `<span>${emoji.emoji}</span>`

const emojiShapeKey = (key: string) => `${emojiShapePrefix}${key}`

function resolveEmojis() {
  const emojiList = nodeEmoji.search('')
  for (const emoji of emojiList) {
    const key = emojiShapeKey(emoji.key)
    party.resolvableShapes[key] = emojiShapeFactory(emoji)
  }
}

const parseConfiguration = (binding: VNodeDirective) => {
  const config: Partial<Configuration> = {}

  // ex. v-emoji-party:emoji="['zzz', 'poop']"
  if (binding.arg && binding.arg === 'emoji') {
    if (isString(binding.value)) {
      config.emoji = [binding.value]
    } else if (isStringArray(binding.value)) {
      config.emoji = binding.value
    }
  }

  // ex. v-emoji-party="{ emoji: ['zzz', 'poop'], random: false }"
  if (binding.value && isObject(binding.value)) {
    const options = binding.value as Partial<Configuration>
    if (options.emoji && isStringArray(options.emoji)) {
      config.emoji = options.emoji
    }

    if (options.random !== undefined && isBoolean(options.random)) {
      config.random = options.random
    }

    if (options.count && isObject(options.count)) {
      config.count = options.count
    }

    if (options.click && isBoolean(options.click)) {
      config.click = options.click
    }

    if (options.mouseover && isBoolean(options.mouseover)) {
      config.mouseover = options.mouseover
    }
  }

  return config
}

const partyDirective = (el: HTMLElement, config: Configuration) => {
  const options = getPartyOptions(config)
  party.confetti(el, options)
}

const inserted: DirectiveFunction = (
  el: HTMLElement,
  binding: VNodeDirective
) => {
  const bindingConfig = parseConfiguration(binding)
  const config: Configuration = { ...defaultConfig, ...bindingConfig }

  resolveEmojis()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const eventCallback = (_ev: Event) => partyDirective(el, config)

  if (config.click) {
    el.addEventListener('click', eventCallback, true)
  }

  if (config.mouseover) {
    el.addEventListener('mouseover', eventCallback, true)
  }

  el._partyDirective = eventCallback
}

const unbind: DirectiveFunction = (el: HTMLElement) => {
  if (!el._partyDirective) {
    return
  }

  el.removeEventListener('click', el._partyDirective, true)
}

export const EmojiPartyDirective: DirectiveOptions = {
  inserted,
  unbind,
}
