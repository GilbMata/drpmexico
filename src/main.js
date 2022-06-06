import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueFreshchat from 'vue-freshchat';
import Carousel3d from 'vue-carousel-3d';
import SequentialEntrance from 'vue-sequential-entrance';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-sequential-entrance/vue-sequential-entrance.css';

Vue.use(SequentialEntrance);
// const VueFreshchat = require('vue-freshchat');

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueFreshchat, { appToken: 'b01ca97a-1971-4850-a1db-818e34811573' });
Vue.use(Carousel3d);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
