<template>
  <div id="servicios-pso">
    <!-- <banner-mensaje></banner-mensaje> -->
    <banner-comp></banner-comp>
    <caracteristicas-comp></caracteristicas-comp>
    <informacion-Comp></informacion-Comp>
    <banner-mensajeVerde></banner-mensajeVerde>
    <tarjeta-descripcion-comp></tarjeta-descripcion-comp>
    <prueba-comp></prueba-comp>
    <diagrama-comp></diagrama-comp>
  </div>
</template>

<script>
import BannerComp from '@/components/servicios/Pso/BannerComp.vue';
// import BannerMensaje from '@/components/servicios/Pso/BannerMensaje.vue';
// import caracteristicasComp from '@/components/servicios/Pso/CaracteristicasComp.vue';
import InformacionComp from '@/components/servicios/Pso/InformacionComp.vue';
import BannerMensajeVerde from '@/components/servicios/Pso/BannerMensajeVerde.vue';
import TarjetaDescripcionComp from '@/components/servicios/Pso/TarjetaDescripcionComp.vue';
import PruebaComp from '@/components/PruebaYaComp.vue';
// import DiagramaComp from '@/components/servicios/Pso/DiagramaComp.vue';

export default {
  components: {
    // BannerMensaje,
    BannerComp,
    // caracteristicasComp,
    InformacionComp,
    BannerMensajeVerde,
    TarjetaDescripcionComp,
    PruebaComp,
    // DiagramaComp,
  },
};
</script>

<style lang="scss">
#servicios-pso {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;

  position: relative;
}
</style>
