<template>
  <transition name="fade">
    <main v-if="exemplesList" class="section section--exemples-index">
      <vue-headful
        title=""
        description=""
      />
    </section>
  </transition>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex';
export default {
  name: 'availables',
  data: function(){
    return {
      baseFile: process.env.VUE_APP_S3,
      baseImgUrl: process.env.VUE_APP_API,
    }
  },
  computed: {
    ...mapGetters('exemples', {
      exemplesList: 'list'
    }),
    ...mapState(['route']),
  },
  methods: {
    ...mapActions('exemples', {
      fetchExemples: 'fetchList',
    }),
    fetchData() { return this.fetchExemepls()}
  },
  watch: {
    $route: 'fetchData'
  },
  created() {
    this.fetchData()
  },
}
</script>
