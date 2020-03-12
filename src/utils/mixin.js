import { mapGetters, mapActions } from 'vuex'
import { themeList, addCss, removeCss } from './book'

export const ebookMixin = {
  computed: {
    ...mapGetters(['fileName', 'menuVisible', 'settingVisible', 'defaultFontSize', 'currentBook', 'defaultFontFamily', 'fontFamilyVisible', 'defaultTheme'
    ]),
    themeList
  },
  methods: {
    ...mapActions('book', ['setFileName', 'toggleMenuVisible', 'setSettingVisible', 'setDefaultFontSize', 'setCurrentBook', 'setDefaultFontFamily', 'setFontFamilyVisible', 'setDefaultTheme']),
    initGlobalStyle () {
      removeCss()
      switch (this.defaultTheme) {
        case 'Default':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
          break
        case 'Eye':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_Eye.css`)
          break
        case 'Gold':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_Gold.css`)
          break
        case 'Night':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_Night.css`)
          break
      }
    }
  }
}
