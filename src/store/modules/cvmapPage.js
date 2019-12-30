const cvmapPage = {
  state: {
    displayParameters: {
      page: 'menuSurvey',
      orgID: '0',
      orgPID: '0',
      orgLevel: 0
    }
  },
  mutations: {
    DISPLAYPARAMETERS: (state, displayParameters) => {
      state.displayParameters = displayParameters
    }
  },
  actions: {
    displayParameters: ({ commit }, displayParameters) => {
      commit('DISPLAYPARAMETERS', displayParameters)
    }
  }
}

export default cvmapPage
