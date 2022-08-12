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
import BannerMensaje from '@/components/servicios/DRaaS/BannerMensaje.vue';
import BannerComp from '@/components/servicios/DRaaS/BannerComp.vue';
import caracteristicasComp from '@/components/servicios/DRaaS/CaracteristicasComp.vue';
import InformacionComp from '@/components/servicios/DRaaS/InformacionComp.vue';
import BannerMensajeVerde from '@/components/servicios/DRaaS/BannerMensajeVerde.vue';
import TarjetaDescripcionComp from '@/components/servicios/DRaaS/TarjetaDescripcionComp.vue';
import PruebaComp from '@/components/PruebaYaComp.vue';
import DiagramaComp from '@/components/servicios/DRaaS/DiagramaComp.vue';

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
#servicios-bas {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;

  position: relative;
}
</style>
