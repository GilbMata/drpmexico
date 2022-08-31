<template>
  <div id="banner-mensajeServ">
    <tarjeta-mensaje
      mensaje="
      <h1>PSO/MSP</h1>
      <p>Professional Service</p>
      <span class='txt'>
      Asi como <span class='txtgreen'><b>DRPMéxico</b></span> utiliza tecnología comprobada para 
<b>garantizar el rendimiento y la seguridad</b> de todos nuestros 
servicios, nuestros servicios administrados aprovechan las 
mejores prácticas de la industria y habilidades especializadas 
en forma de orientación, integración, validación de servicios 
y administración continua. <br />
Nuestro objetivo es el mismo que el suyo: <b>Brindar los resultados que su negocio necesita para tener éxito </b>"
      img="pso/PSO_ICONO.png"
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
