<template>
  <div id="banner-mensajeVC">
    <tarjeta-mensajeV
      mensaje="<strong class='msjsmT'>DRPMéxico Infraestructure as a Service</strong>"
      mensaje2="<span class='msjsm'>Máximo rendimiento de tus recursos</span>"
      class="tarjetaMsj"
    >
    </tarjeta-mensajeV>
  </div>
</template>

<script>
import TarjetaMensajeV from '../../../UI/tarjetaMensajeVerde.vue';

export default {
  components: {
    TarjetaMensajeV,
  },
};
</script>
