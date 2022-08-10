<template>
  <div id="servicios-ms365">
    <banner-mensaje></banner-mensaje>
    <banner-comp></banner-comp>
    <caracteristicas-comp></caracteristicas-comp>
    <informacion-Comp></informacion-Comp>
    <banner-mensajeVerde></banner-mensajeVerde>
    <tarjeta-descripcion-comp></tarjeta-descripcion-comp>
    <diagrama-comp></diagrama-comp>
    <prueba-comp></prueba-comp>
  </div>
</template>

<script>
import BannerComp from '@/components/servicios/Ms365/BannerComp.vue';
import BannerMensaje from '@/components/servicios/Ms365/BannerMensaje.vue';
import caracteristicasComp from '@/components/servicios/Ms365/CaracteristicasComp.vue';
import InformacionComp from '@/components/servicios/Ms365/InformacionComp.vue';
import BannerMensajeVerde from '@/components/servicios/Ms365/BannerMensajeVerde.vue';
import TarjetaDescripcionComp from '@/components/servicios/Ms365/TarjetaDescripcionComp.vue';
import PruebaComp from '@/components/PruebaYaComp.vue';
import DiagramaComp from '@/components/servicios/Ms365/DiagramaComp.vue';

export default {
  components: {
    BannerMensaje,
    BannerComp,
    caracteristicasComp,
    InformacionComp,
    BannerMensajeVerde,
    TarjetaDescripcionComp,
    PruebaComp,
    DiagramaComp,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
#servicios-ms365 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;

  position: relative;
}
</style>
