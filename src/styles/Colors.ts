export const ColorMap = {
  ALLOY_ORANGE: '#bd632f',
  BLUE_GRAY: '#dce7f3',
  DAVYS_GREY: '#5e5e5e',
  DEEP_SPACE_SPARKLE: '#3a5c69',
  HARVEST_GOLD: '#d8973c',
  IVORY: '#fffff0',
  JET: '#292929',
  RED: '#f00',
  VIVID_BURGUNDY: '#a4243b',
  WHITE: '#fff',
  YELLOW: '#ff0',
}

export const Colors = {
  INTRO_TEXT: ColorMap.WHITE,
  INTRO_TEXT_ADD: ColorMap.YELLOW,
  LINK_HOVER: ColorMap.ALLOY_ORANGE,
  LINK_NORMAL: ColorMap.DEEP_SPACE_SPARKLE,
  LINK_VISITED: ColorMap.DEEP_SPACE_SPARKLE,
  NAV_LINK_NORMAL: ColorMap.JET,
  NAV_LINK_HOVER: ColorMap.DAVYS_GREY,
  PAGE_ALT_BACKGROUND: ColorMap.BLUE_GRAY,
  PAGE_BACKGROUND: ColorMap.WHITE,
  PAGE_TEXT: ColorMap.JET,
  PAGE_TEXT_KNOCKOUT: ColorMap.WHITE,
}

export type Color = keyof typeof Colors
