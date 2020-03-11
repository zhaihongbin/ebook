const book = {
  namespaced: true,
  state: {
    fileName: ''
  },
  mutations: {
    SET_FILENAME: (state, newValue) => {
      state.fileName = newValue
    }
  },
  actions: {
    setFileName: ({ commit }, newValue) => {
      return commit('SET_FILENAME', newValue)
    }
  }
}

export default book
