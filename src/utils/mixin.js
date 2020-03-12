import { mapGetters, mapActions } from 'vuex'
export const ebookMixin = {
  computed: {
    ...mapGetters(['fileName', 'menuVisible', 'settingVisible', 'defaultFontSize', 'currentBook', 'defaultFontFamily', 'fontFamilyVisible'])
  },
  methods: {
    ...mapActions('book', ['setFileName', 'toggleMenuVisible', 'setSettingVisible', 'setDefaultFontSize', 'setCurrentBook', 'setDefaultFontFamily', 'setFontFamilyVisible'])
  }
}
