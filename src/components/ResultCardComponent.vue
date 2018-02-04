<template>
  <md-card md-with-hover class="search-results-card">

    <md-card-media class="search-results-card__image-container">
      <img :src="imgSrc"
           class="search-results-card__image"
           :alt="imgAlt">
    </md-card-media>

    <md-card-actions class="search-results-card__footer">
      <md-subheader v-text="imgDescription"
                    class="search-results-card__info"></md-subheader>
      <md-button @click="loadCurrentResult(resultTargetID)" class="md-icon-button">
        <md-icon>add</md-icon>
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script type="text/babel">
  import { mapActions } from 'vuex'

  export default {
    name: 'ResultCardComponent',

    extends: {},

    props: {
      imgDescription: {
        required: true,
        type: String
      },
      imgSrc: {
        required: true,
        type: String
      },
      imgAlt: {
        required: true,
        type: String
      },
      resultTargetID: {
        required: true,
        type: String
      }
    },

    data () {
      return {}
    },

    computed: {},

    components: {},

    watch: {},

    methods: {
      ...mapActions(['loadCurrentResult'])
    },

    beforeCreate () {
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  .search-results-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    grid-column-start: auto;
    grid-row-start: auto;
    cursor: pointer;

    &__image-container {
      position: relative;
      height: 100%;
      overflow: hidden;
    }

    &__image {
      position: absolute;
      object-fit: cover;
      height: 100%;
    }

    &__link:hover {
      text-decoration: none;
    }

    &__footer {
      width: 100%;
      height: 65px;
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
