<template>
  <div id="banner-mensajeVC">
    <tarjeta-mensajeV
      mensaje="<strong class='msjsmT'>DRPMéxico Backup as a Service</strong>"
      mensaje2="<span class='msjsm'>brinda protección completa para tu empresa:</span>"
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
#banner-mensajeVC{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background: url('../../../../public/img/servicios/baas/fondobanner.png');
background-size: cover;
background-repeat: no-repeat;
// border-radius: 30px;
/* Inside auto layout */
flex: none;
order: 4;
flex-grow: 0;
align-self: stretch;

.msjsm{
  font-size: 2rem;
}
.msjsmT{
  font-size: 3rem;
}

}
</style>
