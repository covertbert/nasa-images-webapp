<template>
  <main class="search-results-section">

    <section v-show="searchResultsLoaded === true"
             class="search-results-section__results">

      <search-box-component :topAnchored="true"></search-box-component>

      <md-card md-with-hover
               v-for="(item, index) in searchResults"
               :key="index"
               :style="`background-image: url(${item.links[0].href})`"
               class="search-results-card">

        <md-card-media class="search-results-card__image"></md-card-media>

        <md-card-actions class="search-results-card__footer">
          <md-subheader v-text="item.data[0].description"
                        class="search-results-card__info"></md-subheader>
          <md-button class="md-icon-button">
            <md-icon>add</md-icon>
          </md-button>
        </md-card-actions>
      </md-card>

      <h2 v-show="searchResults.length < 1"
          class="search-results-section__no-results">No results for your query...</h2>

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

  .search-results-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    grid-column-start: auto;
    grid-row-start: auto;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    &__footer {
      background-color: $theme-gray;
    }

    &__info {
      display: block;
      padding-top: 14px;
      height: 50px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
