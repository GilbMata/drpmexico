<template>
  <div id="servicios-bas">
    <banner-mensaje></banner-mensaje>
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
import BannerMensaje from '@/components/servicios/BaaS/BannerMensaje.vue';
import BannerComp from '@/components/servicios/BaaS/BannerComp.vue';
import caracteristicasComp from '@/components/servicios/BaaS/CaracteristicasComp.vue';
import InformacionComp from '@/components/servicios/BaaS/InformacionComp.vue';
import BannerMensajeVerde from '@/components/servicios/BaaS/BannerMensajeVerde.vue';
import TarjetaDescripcionComp from '@/components/servicios/BaaS/TarjetaDescripcionComp.vue';
import PruebaComp from '@/components/PruebaYaComp.vue';
import DiagramaComp from '@/components/servicios/BaaS/DiagramaComp.vue';

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
