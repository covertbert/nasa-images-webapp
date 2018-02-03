export const setSearchQuery = (state, payload) => {
  state.searchQuery = payload
}

export const setSearchLoadedState = (state, payload) => {
  payload === true ? state.searchResultsLoaded = true : state.searchResultsLoaded = false
}

export const setSearchResults = (state, payload) => {
  state.searchResults = payload
}
