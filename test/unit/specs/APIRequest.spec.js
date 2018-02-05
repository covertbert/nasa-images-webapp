// import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
// import moxios from 'moxios'
import SearchBoxComponent from '../../../src/components/SearchBoxComponent'
import VueParticles from 'vue-particles'
import store from '../../../src/store'

Vue.use(Vuex)
Vue.use(VueMaterial)
Vue.use(VueParticles)

describe('mocking NASA API requests', function () {
  describe('user enters search query', function () {
    it('vuex searchQuery state is updated to contain queried term', function (done) {
      const Constructor = Vue.extend({...SearchBoxComponent, store})
      const searchBoxComponent = new Constructor().$mount()
      const searchButton = searchBoxComponent.$el.querySelector('.search-container__button')

      searchBoxComponent.inputValue = 'moon'

      const clickEvent = new window.Event('click')
      searchButton.dispatchEvent(clickEvent)

      expect(store.state.searchQuery)
        .to.equal('moon')

      done()
    })

    it('vuex searchResults state is updated to contain search results', function (done) {
      const Constructor = Vue.extend({...SearchBoxComponent, store})
      const searchBoxComponent = new Constructor().$mount()
      const searchButton = searchBoxComponent.$el.querySelector('.search-container__button')

      searchBoxComponent.inputValue = 'moon'

      const clickEvent = new window.Event('click')
      searchButton.dispatchEvent(clickEvent)

      setTimeout(() => {
        expect(store.state.searchResults)
          .to.be.an('array')
      }, 1000)

      done()
    })

    it('vuex searchResultsLoaded state is set to "true"', function (done) {
      const Constructor = Vue.extend({...SearchBoxComponent, store})
      const searchBoxComponent = new Constructor().$mount()
      const searchButton = searchBoxComponent.$el.querySelector('.search-container__button')

      searchBoxComponent.inputValue = 'moon'

      const clickEvent = new window.Event('click')
      searchButton.dispatchEvent(clickEvent)

      setTimeout(() => {
        expect(store.state.searchResultsLoaded)
          .to.equal(true)
      }, 1000)

      done()
    })
  })
})
