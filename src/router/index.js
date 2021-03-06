import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import Contacto from '../views/Contacto.vue';
import ServiciosBaaS from '../views/servicios/ServiciosBaaS.vue';
import ServiciosDRaaS from '../views/servicios/ServiciosDRaaS.vue';
import ServiciosIaaS from '../views/servicios/ServiciosIaaS.vue';
import Legal from '../views/legalView.vue';
import Sla from '../components/legal/slaComp.vue';
import politicas from '../components/legal/politicaComp.vue';
import acuerdo from '../components/legal/acuerdoComp.vue';
import condiciones from '../components/legal/condicionesComp.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/baas',
    name: 'ServiciosBaaS',
    component: ServiciosBaaS,
  },
  {
    path: '/draas',
    name: 'ServiciosDRaaS',
    component: ServiciosDRaaS,
  },
  {
    path: '/iaas',
    name: 'IaaS',
    component: ServiciosIaaS,
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal,
    children: [
      {
        path: 'sla',
        component: Sla,
      },
      {
        path: 'condiciones',
        component: condiciones,
      },
      {
        path: 'politicas',
        component: politicas,
      },
      {
        path: 'acuerdo',
        component: acuerdo,
      },
    ],
  },
  // {
  //   path: '/sla',
  //   component: Sla,

  // },
];

const router = new VueRouter({
  routes,
});

export default router;
