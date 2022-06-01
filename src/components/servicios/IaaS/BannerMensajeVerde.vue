<template>
  <div id="banner-mensajeV">
    <tarjeta-mensajeV
      mensaje="<strong>DRPMéxico Infraestructure as a Service</strong>"
      mensaje2="<span class='msjsm'>Máximo rendimiento de tus recursos</span>"
      class="tarjetaMsj">
    </tarjeta-mensajeV>
  </div>
</template>

<script>
import TarjetaMensajeV from '../../UI/tarjetaMensajeVerde.vue';

export default {
  components: {
    TarjetaMensajeV,
  },
};
</script>

<style lang="scss">
#banner-mensajeV {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('../../../../public/img/servicios/baas/fondobanner.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  /* Inside auto layout */
  flex: none;
  order: 4;
  flex-grow: 0;
  align-self: stretch;

  .msjsm {
    font-size: 25px;
  }

}
</style>
