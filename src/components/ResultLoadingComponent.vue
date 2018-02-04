<template>
  <section class="result-loading-component">
    <md-progress-spinner
      :md-diameter="100"
      :md-stroke="10"
      md-mode="indeterminate"></md-progress-spinner>
  </section>
</template>

<script type="text/babel">

  export default {
    name: 'ResultLoadingComponent',

    extends: {},

    props: {},

    data () {
      return {}
    },

    computed: {},

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
  .result-loading-component {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 4;
  }
</style>
