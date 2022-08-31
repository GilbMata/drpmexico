<template>
  <div id="servicios-bas">
    <banner-comp></banner-comp>
    <draas-comp />
    <beneficios-comp />
    <layout-draas />
    <diagrama-comp></diagrama-comp>
  </div>
</template>

<script>
import BannerComp from '@/components/servicios/DRaaS/PortadaDRaas.vue';
import DraasComp from '@/components/servicios/DRaaS/DescripcionComp.vue';
import BeneficiosComp from '@/components/servicios/DRaaS/BeneficiosDraas.vue';
import DiagramaComp from '@/components/servicios/DRaaS/DiagramaComp.vue';
import LayoutDraas from '@/components/servicios/DRaaS/menuInt/LayoutDraas.vue';

export default {
  components: {
    BannerComp,
    DraasComp,
    BeneficiosComp,
    DiagramaComp,
    LayoutDraas,
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
