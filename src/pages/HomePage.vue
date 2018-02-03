<template>
  <main class="main-home-section">

    <vue-particles class="main-home-section__particles"
                   color="#ffffff"
                   :lineLinked="false"
                   :hoverEffect="false"
                   :moveSpeed="1.1"></vue-particles>

    <md-card class="search-container">
      <md-field>
        <label>Search NASA images...</label>
        <md-input v-model="inputValue" class="search-container__input"></md-input>
      </md-field>
      <md-button class="md-raised md-primary search-container__button">Search</md-button>
    </md-card>
  </main>
</template>

<script type="text/babel">

  export default {
    name: 'HomePage',

    extends: {},

    props: {},

    data () {
      return {
        inputValue: ''
      }
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

  .search-container {
    padding: 1rem 2rem;
    width: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    background-color: rgba($theme-gray, 0.9);

    &__input::after {
    }

    &__button {
      margin-left: 3rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
