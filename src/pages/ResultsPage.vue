<template>
  <main class="search-results-section">

    <section v-show="searchResultsLoaded === true" class="search-results-section__results">

      <search-box-component :topAnchored="true"></search-box-component>

      <md-card v-for="(item, index) in searchResults"
               :key="index"
               class="search-results-card">

        <md-card-media>
          <md-ripple>
            <img :src="item.links[0].href" alt="People">
          </md-ripple>
        </md-card-media>

        <md-card-actions>
          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>bookmark</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>share</md-icon>
          </md-button>
        </md-card-actions>
      </md-card>

    </section>

    <section v-show="searchResultsLoaded === false" class="search-results-section__loading">
      <md-progress-spinner
        :md-diameter="100"
        :md-stroke="10"
        md-mode="indeterminate"></md-progress-spinner>
    </section>
  </main>
</template>

<script type="text/babel">
  import { mapState } from 'vuex'
  import SearchBoxComponent from '../components/SearchBoxComponent'

  export default {
    name: 'ResultsPage',

    extends: {},

    props: {},

    data () {
      return {}
    },

    computed: {
      ...mapState(['searchResultsLoaded', 'searchResults'])
    },

    components: {
      SearchBoxComponent
    },

    watch: {},

    methods: {},

    beforeCreate () {
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .search-results-section {
    height: 100%;

    &__results {
      padding: 9rem 2rem 2rem 2rem;
    }

    &__loading {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 4;
    }
  }

  .search-results-card {
    margin-bottom: 2rem;
  }
</style>
