import router from '../router'
import axios from 'axios'

export const fireSearch = ({commit}, payload) => {
  commit('setSearchLoadedState', false)
  commit('setSearchQuery', payload)

  router.push({name: 'ResultsPage'})

  sessionStorage.setItem('searchIsLoaded', JSON.stringify(true))

  axios.get(`${process.env.API_URL}/search?q=${payload}&media_type=image`)
    .then((searchResults) => {
      const searchResultsStripped = searchResults.data.collection.items

      commit('setSearchResults', searchResultsStripped)

      sessionStorage.setItem('searchResults', JSON.stringify(searchResultsStripped))

      setTimeout(() => {
        commit('setSearchLoadedState', true)
      }, 700)
    })
}
