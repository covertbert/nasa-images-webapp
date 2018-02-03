import router from '../router'

export const fireSearch = ({commit}, payload) => {
  commit('setSearchQuery', payload)
  router.push({name: 'SearchPage'})
}
