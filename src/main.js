import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import vueHeadful from 'vue-headful'
import store from './store/store'
import Default from '@/views/layouts/Default.vue';
import Admin from '@/views/layouts/Admin.vue';

import VueFilterDateFormat from 'vue-filter-date-format';
var VueScrollTo = require('vue-scrollto');

//GOOGLE MAPS
//import * as VueGoogleMaps from 'vue2-google-maps'

//SERVICEWORKER FOR PWA APP
//import './registerServiceWorker'

sync(store, router);

require('./assets/js/polyfills.js')
import 'polyfill-array-includes'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueFilterDateFormat, {
  monthNames: [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
  monthNamesShort: [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec' ]
});
/*GOOGLE MAPS
Vue.use(VueGoogleMaps, {
  load: { key: '#', libraries: 'places,drawing,visualization', v: '3.36' },
})*/
Vue.use(VueScrollTo)

Vue.component('vue-headful', vueHeadful);
Vue.component("default", Default);
Vue.component("admin", Admin);

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
