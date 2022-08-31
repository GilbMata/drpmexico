<template>
  <div id="servicios-bas">
    <banner-comp></banner-comp>
    <iaas-comp />
    <beneficios-comp />
    <layout-iaas />
    <diagrama-comp></diagrama-comp>
  </div>
</template>

<script>
import BannerComp from '@/components/servicios/IaaS/PortadaIaas.vue';
import IaasComp from '@/components/servicios/IaaS/DescripcionComp.vue';
import BeneficiosComp from '@/components/servicios/IaaS/BeneficiosIaas.vue';
import DiagramaComp from '@/components/servicios/IaaS/DiagramaIaas.vue';
import LayoutIaas from '@/components/servicios/IaaS/menuInt/LayoutIaas.vue';

export default {
  components: {
    BannerComp,
    IaasComp,
    BeneficiosComp,
    DiagramaComp,
    LayoutIaas,
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
