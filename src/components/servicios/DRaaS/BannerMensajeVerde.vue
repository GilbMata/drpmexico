<template>
  <div id="banner-mensajeVC">
    <tarjeta-mensajeV
      mensaje="<strong class='msjsmT'>DRPMéxico Disaster Recovery as a Service</strong>"
      mensaje2="<span class='msjsm'>Garantizando la seguridad de tus datos:</span>"
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
