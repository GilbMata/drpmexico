import Vue from 'vue';
import VueRouter from 'vue-router';
import ServiciosMs365 from '@/views/servicios/ServiciosMs365.vue';
import ServiciosPso from '@/views/servicios/ServiciosPso.vue';
import HomeView from '../views/HomeView.vue';
import ServiciosBaaS from '../views/servicios/ServiciosBaaS.vue';
import ServiciosDRaaS from '../views/servicios/ServiciosDRaaS.vue';
import ServiciosIaaS from '../views/servicios/ServiciosIaaS.vue';
import Legal from '../views/legalView.vue';
import Sla from '../components/legal/slaComp.vue';
import politicas from '../components/legal/politicaComp.vue';
import acuerdo from '../components/legal/acuerdoComp.vue';
import condiciones from '../components/legal/condicionesComp.vue';

import draasroute from '../router/draas';
import iaasRoute from './iaasRoute';
Vue.use(VueRouter);

const routes = [
  iaasRoute,
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/serviciosM',
        name: 'serviciosM',
        component: () =>
          import(
            /* webpackChunkName: "Home" */ '../components/principal/servicios/ServiciosmComp.vue'
          ),
      },
      {
        path: '/IaasM',
        name: 'IaasM',
        component: () =>
          import(
            /* webpackChunkName: "IaasM" */ '../components/principal/servicios/IaasmComp.vue'
          ),
      },
      {
        path: '/BaasM',
        name: 'BaasM',
        component: () =>
          import(
            /* webpackChunkName: "BaasM" */ '../components/principal/servicios/BaasmComp.vue'
          ),
      },
      {
        path: '/DraasM',
        name: 'DraasM',
        component: () =>
          import(
            /* webpackChunkName: "DraasM" */ '../components/principal/servicios/DraasmComp.vue'
          ),
      },
      {
        path: '/Microsoft',
        name: 'Microsoft',
        component: () =>
          import(
            /* webpackChunkName: "Microsoft" */ '../components/principal/servicios/MicroSoft.vue'
          ),
      },
      {
        path: '/Profesional',
        name: 'Profesional',
        component: () =>
          import(
            /* webpackChunkName: "ProfeSional" */ '../components/principal/servicios/ProfeSional.vue'
          ),
      },
    ],
  },
  {
    path: '/baas/beneficiosbaas',
    name: 'beneficiosbaas',
    component: () =>
      import(
        /* webpackChunkName: "ProfeSional" */ '../components/servicios/BaaS/BeneficiosBaas.vue'
      ),
  },
  {
    path: '/baas/:toid',
    name: 'ServiciosBaaS',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "ProfeSional" */ '../views/servicios/ServiciosBaaS.vue'
      ),
    children: [
      {
        path: '/tecnologiabaas',
        name: 'tecnologiabaas',
        component: () =>
          import(
            /* webpackChunkName: "ProfeSional" */ '../components/servicios/BaaS/menuInt/tecnologiaBaas.vue'
          ),
      },
      {
        path: '/proteccion',
        name: 'proteccion',
        component: () =>
          import(
            /* webpackChunkName: "ProfeSional" */ '../components/servicios/BaaS/menuInt/proteccionBaas.vue'
          ),
      },
      {
        path: '/seguridad',
        name: 'seguridad',
        component: () =>
          import(
            /* webpackChunkName: "ProfeSional" */ '../components/servicios/BaaS/menuInt/seguridadBaas.vue'
          ),
      },
      {
        path: '/cumplimiento',
        name: 'cumplimiento',
        component: () =>
          import(
            /* webpackChunkName: "ProfeSional" */ '../components/servicios/BaaS/menuInt/cumplimientoBaas.vue'
          ),
      },
      {
        path: '/estrategia',
        name: 'estrategia',
        component: () =>
          import(
            /* webpackChunkName: "ProfeSional" */ '../components/servicios/BaaS/menuInt/estrategiaBaas.vue'
          ),
      },
      {
        path: '/incorporacion',
        name: 'incorporacion',
        component: () =>
          import(
            /* webpackChunkName: "ProfeSional" */ '../components/servicios/BaaS/menuInt/incorporacionBaas.vue'
          ),
      },
    ],
  },
  //Rutas Draas
  draasroute,
  {
    path: '/iaas',
    name: 'IaaS',
    component: ServiciosIaaS,
  },
  {
    path: '/ms365',
    name: 'Ms365',
    component: ServiciosMs365,
  },
  {
    path: '/pso',
    name: 'Pso',
    component: ServiciosPso,
  },
  // {
  //   path: '/mprincipal',
  //   component: LayOut,
  //   redirect: '/',
  //   children: [
  //     {
  //       path: '/serviciosM',
  //       name: 'serviciosM',
  //       component: ServiciosmComp,
  //     },
  //     {
  //       path: 'IaasM',
  //       name: 'IaasM',
  //       component: IaasMComp,
  //     },
  //   ],
  // },
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
  linkExactActiveClass: 'nav-item active',
  routes,
});

export default router;
