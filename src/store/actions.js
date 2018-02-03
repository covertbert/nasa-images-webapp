import router from '../router'
import axios from 'axios'

export const fireSearch = ({commit}, payload) => {
  router.push({name: 'SearchPage'})

  axios.get(`${process.env.API_URL}/search?q=${payload}&media_type=image`)
    .then((searchResults) => {
      commit('setSearchResults', searchResults.data.collection.items)

      setTimeout(() => {
        commit('seSearchResultsLoaded')
      }, 500)
    })
}
