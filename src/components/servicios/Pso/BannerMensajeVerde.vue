<template>
  <div id="banner-mensajeVC">
    <tarjeta-mensajeV mensaje="<strong class='msjsmT'>DRPMéxico Professional
    Service</strong>" mensaje2="<span class='msjsm'>Los más altos niveles de
    eficiencia y eficacia para su organización</span>" class="tarjetaMsj">
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
