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
  mounted() {
    window.scrollTo(0, 0);
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
