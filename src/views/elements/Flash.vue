<template lang="html">
  <div class="">
    <div v-for="(flash, index) in flashes[channel]" :key="index" class="alert alert-dismissible" :class="'alert-'+flash.type" role="alert">
      {{flash.message}}
      <button @click="remove({channel, ref:index})" type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default
{
  props:
  {
    channel:
    {
      type: String,
      default()
      {
        return 'default'
      }
    }
  },
  watch:
  {
    changes(value)
    {
      this.$forceUpdate()
    }
  },
  computed:
  {
    ...mapState({
      flashes: state => state.flash.flashes,
      changes: state => state.flash.changes,
    })
  },
  methods:
  {
    ...mapActions('flash',
    {
      remove: 'remove',
    })
  }
}
</script>
