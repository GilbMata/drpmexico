import ServiciosDRaaS from '../views/servicios/ServiciosDRaaS.vue';

export default {
  path: '/draas',
  name: 'ServiciosDRaaS',
  component: ServiciosDRaaS,
  children: [
    {
      path: '/tecnologiadraas',
      name: 'tecnologiadraas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/DRaaS/menuInt/tecnologiaDraas.vue'
        ),
    },
    {
      path: '/diseñodraas',
      name: 'diseñodraas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/DRaaS/menuInt/diseñoDraas.vue'
        ),
    },
    {
      path: '/gestiondraas',
      name: 'gestiondraas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/DRaaS/menuInt/gestionDraas.vue'
        ),
    },
    {
      path: '/vmwaredraas',
      name: 'vmwaredraas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/DRaaS/menuInt/vmwareDraas.vue'
        ),
    },
    {
      path: '/copiadraas',
      name: 'copiadraas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/DRaaS/menuInt/copiaDraas.vue'
        ),
    },
    {
      path: '/estrategiadraas',
      name: 'estrategiadraas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/DRaaS/menuInt/estrategiaDraas.vue'
        ),
    },
    {
      path: '/incorporaciondraas',
      name: 'incorporaciondraas',
      component: () =>
        import(
          /* webpackChunkName: "ProfeSional" */ '../components/servicios/DRaaS/menuInt/incorporacionDraas.vue'
        ),
    },
  ],
};
