<template>
  <main class="main-home-section">

    <vue-particles class="main-home-section__particles"
                   color="#ffffff"
                   :lineLinked="false"
                   :hoverEffect="false"
                   :moveSpeed="1.1"></vue-particles>

    <search-box-component></search-box-component>
  </main>
</template>

<script type="text/babel">
  import SearchBoxComponent from '../components/SearchBoxComponent'

  export default {
    name: 'HomePage',

    extends: {},

    props: {},

    data () {
      return {}
    },

    computed: {},

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
  @import "../assets/scss/variables";

  .main-home-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: $black;

    &__particles {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
</style>
