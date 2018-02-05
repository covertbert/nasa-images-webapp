import router from '../router'
import axios from 'axios'

export const fireSearch = ({commit}, payload) => {
  commit('setSearchLoadedState', false)
  commit('setSearchQuery', payload)

  router.push({name: 'ResultsPage'})

  sessionStorage.setItem('searchIsLoaded', JSON.stringify(true))
  sessionStorage.setItem('searchQuery', JSON.stringify(payload))

  axios.get(`${process.env.API_URL}/search?q=${payload}&media_type=image`)
    .then((searchResults) => {
      const searchResultsStripped = searchResults.data.collection.items

      commit('setSearchResults', searchResultsStripped)

      sessionStorage.setItem('searchResults', JSON.stringify(searchResultsStripped))

      setTimeout(() => {
        commit('setSearchLoadedState', true)
      }, 500)
    })
}

export const loadCurrentResult = ({commit}, payload) => {
  commit('setCurrentResultLoaded', false)
  router.push({name: 'IndividualResultPage', params: {id: payload}})

  axios.get(`${process.env.API_URL}/search?nasa_id=${payload}`)
    .then((currentResultData) => {
      commit('setCurrentResult', currentResultData.data)

      sessionStorage.setItem('currentResultData', JSON.stringify(currentResultData.data))

      setTimeout(() => {
        commit('setCurrentResultLoaded', true)
        sessionStorage.setItem('currentResultLoaded', JSON.stringify(true))
      }, 500)
    })
}
