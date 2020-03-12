export const FONT_SIZE_LIST = [
  { fontSize: 12 },
  { fontSize: 14 },
  { fontSize: 16 },
  { fontSize: 18 },
  { fontSize: 20 },
  { fontSize: 22 },
  { fontSize: 24 }
]

export const FONT_FAMILY = [
  { font: 'Default' },
  { font: 'Cabin' },
  { font: 'Days One' },
  { font: 'Montserrat' },
  { font: 'Tangerine' }
]

export function themeList () {
  return [
    {
      alias: '默认',
      name: 'Default',
      style: {
        body: {
          'color': '#4c5059',
          'background': '#cecece'
          // 'padding-top': `${realPx(48)}px!important`,
          // 'padding-bottom': `${realPx(48)}px!important`
        }
      }
    },
    {
      alias: '暖色',
      name: 'Gold',
      style: {
        body: {
          'color': '#5c5b56',
          'background': '#c6c2b6'
          // 'padding-top': `${realPx(48)}px!important`,
          // 'padding-bottom': `${realPx(48)}px!important`
        }
      }
    },
    {
      alias: '护眼',
      name: 'Eye',
      style: {
        body: {
          'color': '#404c42',
          'background': '#a9c1a9'
          // 'padding-top': `${realPx(48)}px!important`,
          // 'padding-bottom': `${realPx(48)}px!important`
        }
      }
    },
    {
      alias: '夜间',
      name: 'Night',
      style: {
        body: {
          'color': '#cecece',
          'background': '#000000'
          // 'padding-top': `${realPx(48)}px!important`,
          // 'padding-bottom': `${realPx(48)}px!important`
        }
      }
    }
  ]
}

export function addCss (href) {
  // 动态添加css样式表
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', href)
  document.getElementsByTagName('head')[0].appendChild(link)
}

export function removeCss (href) {
  const links = document.getElementsByTagName('link')
  for (let i = links.length; i >= 0; i--) {
    const link = links[i]
    if (link && link.getAttribute('href') && link.getAttribute('href') === href) {
      link.parentNode.removeChild(link)
    }
  }
}

export function removeAllCss () {
  removeCss(`${process.env.VUE_APP_RES_URL}/theme/theme_Default.css`)
  removeCss(`${process.env.VUE_APP_RES_URL}/theme/theme_Eye.css`)
  removeCss(`${process.env.VUE_APP_RES_URL}/theme/theme_Gold.css`)
  removeCss(`${process.env.VUE_APP_RES_URL}/theme/theme_Night.css`)
}
