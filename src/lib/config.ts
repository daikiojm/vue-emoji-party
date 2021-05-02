export type Configuration = {
  // key of node-emoji.
  emoji: string[]
  // If this option is true,
  // the emoji randomly obtained by the random method of node-emoji will be displayed.
  random: boolean
  // Randomly change the number of emojis to display based on the variation option in party.js.
  count: {
    min: number
    max: number
  }
  // Emoji is displayed in the element click event.
  click: boolean
  // Emoji is displayed in the element hover event.
  mouseover: boolean
}

export const defaultConfig: Configuration = {
  emoji: [],
  random: false,
  count: {
    min: 10,
    max: 50,
  },
  click: true,
  mouseover: false,
}
