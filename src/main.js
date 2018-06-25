
import Vue from 'vue';
import App from './App';
import router from './router';
import VueUp from 'vueup';

Vue.use(VueUp);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
