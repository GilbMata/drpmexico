<template>
  <div id="banner-mensajeServ">
    <tarjeta-mensaje
      mensaje="
      <h1>DRaaS</h1>
      <p>Disaster Recovery as a Service</p>
      <span class='txt'><strong><span class='txtgreen'>DRP</span>México DRaaS</strong>
      Integrado con Veeam y VMware, en conjunto proporcionan las capacidades de <b>seguridad, replicación 
y conmutación</b> por error que necesita para garantizar que su 
empresa esté <span class='txtgreen'><b>siempre en línea y disponible</b></span>.</span>"
      img="draas/DRAAS_ICONO.png"
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
