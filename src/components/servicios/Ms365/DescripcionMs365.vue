<template>
  <div id="banner-mensajeServ">
    <tarjeta-mensaje
      mensaje="
      <h1>M365</h1>
      <p>Microsoft 365 Backup</p>
      <span class='txt'><strong><span class='txtgreen'>Microsoft 365</span></strong>
      ha cambiado la productividad en el lugar de trabajo para siempre. Pero no se diseñó pensando en la protección de datos. Como resultado, 
Microsoft 365 proporciona solo capacidades limitadas de retención y protección contra
    "
      img="ms365/M365_ICONO.png"
    >
    </tarjeta-mensaje>
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
