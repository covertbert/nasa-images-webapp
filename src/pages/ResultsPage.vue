<template>
  <main class="search-results-section">

    <section v-show="searchResultsLoaded === true"
             class="search-results-section__results">

      <search-box-component :topAnchored="true"></search-box-component>

      <result-card-component v-for="(item, index) in searchResults"
                             :key="index"
                             :resultTargetID="item.data[0].nasa_id"
                             :imgSrc="item.links[0].href"
                             :imgAlt="item.data[0].title"
                             :imgDescription="item.data[0].description">
      </result-card-component>

      <no-results-component v-show="searchResults.length < 1"></no-results-component>

    </section>

    <result-loading-component v-show="searchResultsLoaded === false"></result-loading-component>
  </main>
</template>

<script type="text/babel">
  import { mapState } from 'vuex'
  import SearchBoxComponent from '../components/SearchBoxComponent'
  import NoResultsComponent from '../components/NoResultsComponent'
  import ResultCardComponent from '../components/ResultCardComponent'
  import ResultLoadingComponent from '../components/ResultLoadingComponent'

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
      ResultCardComponent,
      NoResultsComponent,
      ResultLoadingComponent
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
  }
</style>
