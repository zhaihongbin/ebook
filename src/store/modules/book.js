
const book = {
  namespaced: true,
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1, // -1不显示，0字号，1主题，2进度，3目录
    defaultFontSize: 16,
    defaultFontFamily: 'Default',
    defaultTheme: 'Default',
    fontFamilyVisible: false,
    currentBook: null,
    bookAvailable: false,
    progress: 0
  },
  mutations: {
    SET_FILENAME: (state, newValue) => {
      state.fileName = newValue
    },
    TOGGLE_MENU_VISIBLE: (state) => {
      state.menuVisible = !state.menuVisible
    },
    SET_FONT_FAMILY_VISIBLE: (state, newValue) => {
      state.fontFamilyVisible = newValue
    },
    SET_SETTING_VISIBLE: (state, newValue) => {
      state.settingVisible = newValue
    },
    SET_DEFAULT_FONT_SIZE: (state, newValue) => {
      state.defaultFontSize = newValue
    },
    SET_DEFAULT_THEME: (state, newValue) => {
      state.defaultTheme = newValue
    },
    SET_DEFAULT_FONT_FAMILY: (state, newValue) => {
      state.defaultFontFamily = newValue
    },
    SET_CURRENT_BOOK: (state, newValue) => {
      state.currentBook = newValue
    },
    SET_BOOK_AVAILABLE: (state, bookAvailable) => {
      state.bookAvailable = bookAvailable
    },
    SET_PROGRESS: (state, progress) => {
      state.progress = progress
    }
  },
  actions: {
    setFileName: ({ commit }, newValue) => {
      return commit('SET_FILENAME', newValue)
    },
    toggleMenuVisible: ({ commit }) => {
      return commit('TOGGLE_MENU_VISIBLE')
    },
    setFontFamilyVisible: ({ commit }, newValue) => {
      return commit('SET_FONT_FAMILY_VISIBLE', newValue)
    },
    setSettingVisible: ({ commit }, newValue) => {
      return commit('SET_SETTING_VISIBLE', newValue)
    },
    setDefaultFontSize: ({ commit }, newValue) => {
      return commit('SET_DEFAULT_FONT_SIZE', newValue)
    },
    setDefaultTheme: ({ commit }, newValue) => {
      return commit('SET_DEFAULT_THEME', newValue)
    },
    setDefaultFontFamily: ({ commit }, newValue) => {
      return commit('SET_DEFAULT_FONT_FAMILY', newValue)
    },
    setCurrentBook: ({ commit }, newValue) => {
      return commit('SET_CURRENT_BOOK', newValue)
    },
    setBookAvailable: ({ commit }, bookAvailable) => {
      return commit('SET_BOOK_AVAILABLE', bookAvailable)
    },
    setProgress: ({ commit }, progress) => {
      return commit('SET_PROGRESS', progress)
    }
  }
}

export default book
