<template>
  <div id="banner-msj-ms365">
    <tarjeta-mensajeV mensaje="<strong>DRPMÉXICO MICROSOFT 365 BACKUP</strong>"
      mensaje2="<span class='msjsm'>Tus datos críticos seguros, protegidos y accesibles</span>"
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
#banner-msj-ms365 {
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
