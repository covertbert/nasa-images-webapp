import router from '../router'
import axios from 'axios'

export const fireSearch = ({commit}, payload) => {
  commit('setSearchLoadedState', false)
  commit('setSearchQuery', payload)
  router.push({name: 'ResultsPage'})

  axios.get(`${process.env.API_URL}/search?q=${payload}&media_type=image`)
    .then((searchResults) => {
      commit('setSearchResults', searchResults.data.collection.items)

      setTimeout(() => {
        commit('setSearchLoadedState', true)
      }, 700)
    })
}
