<template>
  <main class="search-results-section">

    <section v-show="!searchResultsLoaded" class="search-results-section__loading">
      <md-progress-spinner
        :md-diameter="100"
        :md-stroke="10"
        md-mode="indeterminate"></md-progress-spinner>
    </section>
  </main>
</template>

<script type="text/babel">
  import { mapState } from 'vuex'

  export default {
    name: 'SearchPage',

    extends: {},

    props: {},

    data () {
      return {}
    },

    computed: {
      ...mapState['searchResultsLoaded']
    },

    components: {},

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

    &__loading {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
</style>
