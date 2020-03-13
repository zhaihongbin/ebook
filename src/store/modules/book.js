
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
    progress: 0,
    section: 0,
    isPaginating: true,
    navigation: null,
    cover: null,
    metadata: null,
    paginate: '',
    pagelist: null,
    offsetY: 0,
    isBookmark: null
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
    },
    'SET_SECTION': (state, section) => {
      state.section = section
    },
    'SET_IS_PAGINATING': (state, isPaginating) => {
      state.isPaginating = isPaginating
    },
    'SET_NAVIGATION': (state, navigation) => {
      state.navigation = navigation
    },
    'SET_COVER': (state, cover) => {
      state.cover = cover
    },
    'SET_METADATA': (state, metadata) => {
      state.metadata = metadata
    },
    'SET_PAGINATE': (state, paginate) => {
      state.paginate = paginate
    },
    'SET_PAGELIST': (state, pagelist) => {
      state.pagelist = pagelist
    },
    'SET_OFFSETY': (state, offsetY) => {
      state.offsetY = offsetY
    },
    'SET_IS_BOOKMARK': (state, isBookmark) => {
      state.isBookmark = isBookmark
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
    },
    setSection: ({ commit }, section) => {
      return commit('SET_SECTION', section)
    },
    setIsPaginating: ({ commit }, isPaginating) => {
      return commit('SET_IS_PAGINATING', isPaginating)
    },
    setNavigation: ({ commit }, navigation) => {
      return commit('SET_NAVIGATION', navigation)
    },
    setCover: ({ commit }, cover) => {
      return commit('SET_COVER', cover)
    },
    setMetadata: ({ commit }, metadata) => {
      return commit('SET_METADATA', metadata)
    },
    setPaginate: ({ commit }, paginate) => {
      return commit('SET_PAGINATE', paginate)
    },
    setPagelist: ({ commit }, pagelist) => {
      return commit('SET_PAGELIST', pagelist)
    },
    setIsBookmark ({ commit }, isBookmark) {
      return commit('SET_IS_BOOKMARK', isBookmark)
    },
    setOffsetY ({ commit }, offsetY) {
      return commit('SET_OFFSETY', offsetY)
    }
  }
}

export default book
