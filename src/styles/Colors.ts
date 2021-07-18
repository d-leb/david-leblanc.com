export const ColorMap = {
  ALLOY_ORANGE: '#bd632f',
  DAVYS_GREY: '#5e5e5e',
  DEEP_SPACE_SPARKLE: '#3a5c69',
  HARVEST_GOLD: '#d8973c',
  IVORY: '#fffff0',
  JET: '#292929',
  VIVID_BURGUNDY: '#a4243b',
}

export const Colors = {
  LINK_HOVER: ColorMap.ALLOY_ORANGE,
  LINK_NORMAL: ColorMap.DEEP_SPACE_SPARKLE,
  LINK_VISITED: ColorMap.DEEP_SPACE_SPARKLE,
  NAV_LINK_NORMAL: ColorMap.JET,
  NAV_LINK_HOVER: ColorMap.DAVYS_GREY,
  PAGE_ALT_BACKGROUND: ColorMap.ALLOY_ORANGE,
  PAGE_BACKGROUND: ColorMap.IVORY,
  PAGE_TEXT: ColorMap.JET,
  PAGE_TEXT_KNOCKOUT: ColorMap.IVORY,
}

export type Color = keyof typeof Colors
