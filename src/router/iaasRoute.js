import ServiciosIaaS from '../views/servicios/ServiciosIaaS.vue';

export default {
  path: '/iaas',
  name: 'ServiciosIaaS',
  component: ServiciosIaaS,
  children: [
    {
      path: '/tecnologiaiaas',
      name: 'tecnologiaiaas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/IaaS/menuInt/tecnologiaIaas.vue'
        ),
    },
    {
      path: '/nivelesiaas',
      name: 'nivelesiaas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/IaaS/menuInt/nivelesIaas.vue'
        ),
    },
    {
      path: '/satisfaccioniaas',
      name: 'satisfaccioniaas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/IaaS/menuInt/satisfaccionIaas.vue'
        ),
    },
    {
      path: '/mediosiaas',
      name: 'mediosiaas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/IaaS/menuInt/mediosIaas.vue'
        ),
    },
    {
      path: '/escalabilidadiaas',
      name: 'escalabilidadiaas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/IaaS/menuInt/escalabilidadIaas.vue'
        ),
    },
    {
      path: '/resilenciaiaas',
      name: 'resilenciaiaas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/IaaS/menuInt/resilenciaIaas.vue'
        ),
    },
  ],
};
