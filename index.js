'use strict'

const black = '#1d252c'
const white = '#a2c1da'
const red = '#e27e8d'
const green = '#8bd49c'
const yellow = '#ebbf83'
const blue = '#68a1f0'
const magenta = '#c06ece'
const cyan = '#008B94'

const lightBlack = '#566c7d'
const lightCyan = '#70e1e8'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan,
  lightWhite: white
}

module.exports.decorateConfig = config => {
  const backgroundColor = black
  const foregroundColor = white
  const cursorColor = config.cursorColor || lightCyan
  const borderColor = '#333f4a'
  const tabText = '#718ca1'
  const tabTextActive = white
  const dividerBg = '#333f4a'
  
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .terminal a {
        color: ${cyan};
      }
    `,
    css: `
      ${config.css || ''}
      .tabs_title {
  			display: none !important;
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
    `
  })
}
