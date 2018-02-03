<template>
  <md-card :class="['search-container', {'search-container--top-anchored' : topAnchored}]">

    <md-field md-clearable>
      <label v-text="'Search NASA'"></label>
      <md-input @keyup.enter.native="fireSearch(inputValue)"
                v-model="inputValue"
                class="search-container__input"></md-input>
    </md-field>

    <md-button @click="fireSearch(inputValue)"
               class="md-raised md-primary search-container__button"
               v-text="'Search'">
    </md-button>
  </md-card>
</template>

<script type="text/babel">
  import { mapActions } from 'vuex'

  export default {
    name: 'SearchBoxComponent',

    extends: {},

    props: {
      topAnchored: {
        default: false,
        type: Boolean
      }
    },

    data () {
      return {
        inputValue: null
      }
    },

    computed: {},

    components: {},

    watch: {},

    methods: {
      ...mapActions(['fireSearch'])
    },

    beforeCreate () {
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  .search-container {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    width: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    background-color: rgba($theme-gray, 0.9);

    &--top-anchored {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 3;
      background-color: rgba($theme-gray, 1);
    }

    @media (min-width: $break-small) {
      flex-direction: row;
    }

    &__button {
      margin-left: 2rem;
    }
  }
</style>
