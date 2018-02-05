import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import SearchBoxComponent from '../../../src/components/SearchBoxComponent'
import ResultCardComponent from '../../../src/components/ResultCardComponent'
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
        done()
      }, 1000)
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
        done()
      }, 1000)
    })
  })

  describe('user clicks result card to view further details', function () {
    it('returned results data matches test cases', function (done) {
      const Constructor = Vue.extend({...ResultCardComponent, store})
      const resultCardComponent = new Constructor({
        propsData: {
          resultTargetID: 'PIA12233',
          imgDescription: 'Mapping the Moon, Point by Point',
          imgSrc: 'https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg',
          imgAlt: 'Mapping the Moon, Point by Point'
        }
      }).$mount()

      const testCaseData = {
        title: 'Mapping the Moon, Point by Point',
        description: 'Mapping the Moon, Point by Point',
        href: 'https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg',
        date_created: '2009-09-24T18:00:20Z'
      }

      const viewMoreButton = resultCardComponent.$el.querySelector('.search-results-card__button')
      const clickEvent = new window.Event('click')

      viewMoreButton.dispatchEvent(clickEvent)

      setTimeout(() => {
        const resultsData = store.state.currentResultData
        const title = resultsData.collection.items[0].data[0].title
        const description = resultsData.collection.items[0].data[0].description
        const href = resultsData.collection.items[0].links[0].href
        const dateCreated = resultsData.collection.items[0].data[0].date_created

        expect(title)
          .to.equal(testCaseData.title)

        expect(description)
          .to.equal(testCaseData.description)

        expect(href)
          .to.equal(testCaseData.href)

        expect(dateCreated)
          .to.equal(testCaseData.date_created)

        done()
      }, 1000)
    })
  })
})
