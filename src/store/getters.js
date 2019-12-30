const getters = {
  page: state => state.cvmapPage.displayParameters.page,
  orgID: state => state.cvmapPage.displayParameters.orgID,
  orgPID: state => state.cvmapPage.displayParameters.orgPID,
  orgLevel: state => state.cvmapPage.displayParameters.orgLevel,
  displayParameters: state => state.cvmapPage.displayParameters
}
export default getters
