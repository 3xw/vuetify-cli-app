<template>
  <section class="section--home">
    <vue-headful title="Vue CLI App" description="" />
    <div class="container text-center">
      <h2><strong>🇦🇱  Vue CLI App 🗽</strong></h2>
      <div class="utils__spacer--semi"></div>
      <hello></hello>
    </div>
  </section>
</template>
<script>
import hello from '@/components/HelloWorld.vue';
export default {
  name: 'home',
  components: {
    hello
  }
}
</script>
