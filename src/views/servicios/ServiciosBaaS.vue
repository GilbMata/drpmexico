<template>
  <div id="servicios-bas">
    <banner-comp></banner-comp>
    <baas-comp />
    <beneficios-comp />
    <layout-baas />
    <diagrama-comp></diagrama-comp>
  </div>
</template>

<script>
import BannerComp from '@/components/servicios/BaaS/BannerComp.vue';
import BaasComp from '@/components/servicios/BaaS/DescripcionComp.vue';
import BeneficiosComp from '@/components/servicios/BaaS/BeneficiosBaas.vue';
import DiagramaComp from '@/components/servicios/BaaS/DiagramaComp.vue';
import LayoutBaas from '@/components/servicios/BaaS/menuInt/LayoutBaas.vue';

export default {
  components: {
    BannerComp,
    BaasComp,
    BeneficiosComp,
    DiagramaComp,
    LayoutBaas,
  },
  props: { toid: String },
  mounted() {
    if (this.toid) {
      console.log(this.toid);

      this.scrollToElement(this.toid);
    } else {
      console.log('no');
    }
    // window.scrollTo(0, 0);
  },
  methods: {
    scrollToElement(id) {
      const position = document.getElementById(id).offsetTop;
      // smooth scroll
      window.scrollTo({ top: position, behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss">
#servicios-bas {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;

  position: relative;
}
</style>
