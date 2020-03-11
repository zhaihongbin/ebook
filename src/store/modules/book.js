const book = {
  state: {
    test: 1
  },
  mutations: {
    SET_TEST: (state, newValue) => {
      state.test = newValue;
    }
  },
  actions: {
    setTest: ({ commit, state }, newValue) => {
      return commit("SET_TEST", newValue);
    }
  }
};

export default book;
