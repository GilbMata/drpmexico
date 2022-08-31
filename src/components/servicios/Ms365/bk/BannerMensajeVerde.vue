<template>
  <div id="banner-mensajeVC">
    <tarjeta-mensajeV
      mensaje="<strong class='msjsmT'>DRPMÉXICO MICROSOFT 365 BACKUP</strong>"
      mensaje2="<strong class='msjsm'>Eficiencia en la nube de extremo a extremo.</strong>"
      class="tarjetaMsj"
    >
    </tarjeta-mensajeV>
  </div>
</template>
<!-- <strong>Eficiencia de la nube de extremo a extremo.</strong>' -->
<script>
import TarjetaMensajeV from '../../../UI/tarjetaMensajeVerde.vue';

export default {
  components: {
    TarjetaMensajeV,
  },
};
</script>

<style lang="scss">
#banner-msj-ms365 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  // background: url('../../../../public/img/servicios/baas/fondobanner.png');
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
