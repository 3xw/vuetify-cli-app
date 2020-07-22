<template lang="html">

</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  created()
  {
    this.fetchList();
  },
  methods:
  {
    ...mapActions('timeRecords', {
      fetchList: 'fetchList'
    }),
  }
}
</script>

<style lang="css">
</style>
