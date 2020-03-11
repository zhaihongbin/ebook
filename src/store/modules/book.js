const book = {
  namespaced: true,
  state: {
    fileName: '',
    menuVisible: false
  },
  mutations: {
    SET_FILENAME: (state, newValue) => {
      state.fileName = newValue
    },
    TOGGLE_MENU_VISIBLE: (state) => {
      state.menuVisible = !state.menuVisible
    }
  },
  actions: {
    setFileName: ({ commit }, newValue) => {
      return commit('SET_FILENAME', newValue)
    },
    toggleMenuVisible: ({ commit }) => {
      return commit('TOGGLE_MENU_VISIBLE')
    }
  }
}

export default book
