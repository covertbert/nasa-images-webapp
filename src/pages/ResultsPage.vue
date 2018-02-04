<template>
  <main class="search-results-section">

    <section v-show="searchResultsLoaded === true"
             class="search-results-section__results">

      <search-box-component :topAnchored="true"></search-box-component>

      <search-result-card v-for="(item, index) in searchResults"
                          :key="index"
                          :imgSrc="item.links[0].href"
                          :imgAlt="item.data[0].title"
                          :imgDescription="item.data[0].description"></search-result-card>

      <h2 v-show="searchResults.length < 1"
          class="search-results-section__no-results">
        No results for your query...
      </h2>

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
  import SearchResultCard from '../components/SearchResultCard'

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
      SearchBoxComponent,
      SearchResultCard
    },

    watch: {},

    methods: {},

    beforeCreate () {
    },

    mounted () {}
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  .search-results-section {
    height: 100%;

    &__results {
      padding: 12rem 2rem 2rem 2rem;
      display: grid;
      grid-gap: 30px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: 250px;
      grid-auto-flow: row dense;

      @media (min-width: $break-small) {
        padding-top: 9rem;
      }
    }

    &__no-results {
      opacity: .6;
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
</style>
