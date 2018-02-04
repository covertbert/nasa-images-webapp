<template>
  <div>{{currentResultData}}</div>
</template>

<script type="text/babel">
  import { mapState } from 'vuex'

  export default {
    name: 'IndividualResultPage',

    extends: {},

    props: {},

    data () {
      return {}
    },

    computed: {
      ...mapState(['currentResultData'])
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
