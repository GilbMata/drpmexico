<template>
  <div id="servicios-bas">
    <banner-comp></banner-comp>
    <ms365-comp />
    <beneficios-comp />
    <diagrama-comp></diagrama-comp>
  </div>
</template>

<script>
import BannerComp from '@/components/servicios/Ms365/PortadaMs365.vue';
import Ms365Comp from '@/components/servicios/Ms365/DescripcionMs365.vue';
import BeneficiosComp from '@/components/servicios/Ms365/BeneficiosMs365.vue';
import DiagramaComp from '@/components/servicios/Ms365/DiagramaMs365.vue';

export default {
  components: {
    BannerComp,
    Ms365Comp,
    BeneficiosComp,
    DiagramaComp,
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
