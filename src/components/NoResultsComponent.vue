<template>
  <h2 class="search-results-section__no-results"
      v-text="`No results for '${searchQuery}'`">
  </h2>
</template>

<script type="text/babel">
  import { mapState } from 'vuex'

  export default {
    name: 'NoResultsComponent',

    extends: {},

    props: {},

    data () {
      return {}
    },

    computed: {
      ...mapState(['searchQuery'])
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

<style scoped lang="scss" rel="stylesheet/scss">

</style>
