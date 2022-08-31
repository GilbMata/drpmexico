<template>
  <div id="servicios-bas">
    <banner-comp></banner-comp>
    <pso-comp />
  </div>
</template>

<script>
import BannerComp from '@/components/servicios/Pso/PortadaPso.vue';
import PsoComp from '@/components/servicios/Pso/DescripcionPso.vue';

export default {
  components: {
    BannerComp,
    PsoComp,
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
