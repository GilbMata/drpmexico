<template>
  <div id="banner-mensaje">
    <tarjeta-mensaje mensaje="<strong><span class='txtgreen'>DRP</span>México
    DRaaS</strong> Integrado con Veeam y VMware, en conjunto proporcionan las
    capacidades de <strong>seguridad, replicación y conmutación</strong> por
    error que necesita para garantizar que su empresa esté
      <strong class='txtgreen'>siempre en línea y disponible.</strong>"
      class="tarjetaMsj">
    </tarjeta-mensaje>
    <div class="vmlogos">
      <b-img
        :src="require('../../../../public/img/servicios/draas/VeeamLogo.png')"
        class="" alt=""></b-img>
      <b-img
        :src="require('../../../../public/img/servicios/draas/VmwareLogo.png')"
        class="" alt=""></b-img>
    </div>
  </div>
</template>

<script>
import TarjetaMensaje from '../../UI/TarjetaMensaje.vue';

export default {
  components: {
    TarjetaMensaje,
  },
};
</script>

<style lang="scss">
#banner-mensaje {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 150px;
  /* gris claro */
  background: #F7F8F8;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
}

.vmlogos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  padding-top: 5%;
}
</style>
