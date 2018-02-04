<template>
  <main class="result-details-section">
    <search-box-component :topAnchored="true"></search-box-component>

    <section v-if="currentResultLoaded"
             class="result-details-section__data">

      <h1 v-text="currentResultData.collection.items[0].data[0].title"
          class="result-details-section__header md-display-1"></h1>

      <div class="result-details-section__body">
        <img :src="currentResultData.collection.items[0].links[0].href"
             class="result-details-section__image"
             :alt="currentResultData.collection.items[0].data[0].title">

        <p v-text="currentResultData.collection.items[0].data[0].description"
           class="result-details-section__description"></p>
      </div>

    </section>

    <result-loading-component v-show="!currentResultLoaded"></result-loading-component>
  </main>
</template>

<script type="text/babel">
  import { mapState } from 'vuex'
  import ResultLoadingComponent from '../components/ResultLoadingComponent'
  import SearchBoxComponent from '../components/SearchBoxComponent'

  export default {
    name: 'IndividualResultPage',

    extends: {},

    props: {},

    data () {
      return {}
    },

    computed: {
      ...mapState(['currentResultData', 'currentResultLoaded'])
    },

    components: {
      ResultLoadingComponent,
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

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../assets/scss/variables";

  .result-details-section {
    padding: 12rem 2rem 2rem 2rem;

    @media (min-width: $break-small) {
      padding-top: 9rem;
    }

    &__body {
      display: flex;
      flex-direction: column;

      @media (min-width: $break-small) {
        flex-direction: row;
      }
    }

    &__image {
      flex: 1;
      align-self: center;
      max-width: 400px;
    }

    &__description {
      margin-top: 0;
      padding: 0 1rem;
      flex: 1.5;
      opacity: 0.7;
      font-size: 1.1rem;
      font-weight: 300;
    }
  }
</style>
