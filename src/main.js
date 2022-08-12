import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueFreshchat from 'vue-freshchat';
import SequentialEntrance from 'vue-sequential-entrance';
import VueAnimated from '@codekraft-studio/vue-animated';
import VuePlyr from 'vue-plyr';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-sequential-entrance/vue-sequential-entrance.css';
import 'vue-plyr/dist/vue-plyr.css';

Vue.use(SequentialEntrance);
// const VueFreshchat = require('vue-freshchat');

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueFreshchat, { appToken: 'b01ca97a-1971-4850-a1db-818e34811573' });
Vue.use(VueAnimated);
Vue.use(VuePlyr, {
  plyr: {},
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
