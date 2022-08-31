<template>
  <div id="banner-mensajeServ">
    <tarjeta-mensaje
      mensaje="
      <h1>BaaS</h1>
      <p>Backup as a Service</p>
      <span class='txt'><strong><span class='txtgreen'>DRP</span>México Backup as a Service</strong>
      está diseñado para <strong>ayudar a proteger sus datos críticos</strong>
      de amenazas de ciberseguridad internas y externas, cumplir con sus requisitos de retención
      a largo plazo y a modernizar su estrategia de respaldo.</span>"
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
