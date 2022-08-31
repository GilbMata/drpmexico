<template>
  <div id="banner-mensajeServ">
    <tarjeta-mensaje
      mensaje="
      <h1>IaaS</h1>
      <p>Infrastructure as a Service</p>
      <span class='txt'><strong><span class='txtgreen'>DRP</span>México IaaS</strong>
       proporciona la eficiencia y la escalabilidad 
        de IaaS tradicional, pero con una infraestructura probada 
        basada en VMware, <b>diseñado por expertos, garantizando 
        seguridad integrada y protección de datos.</b> Obtén una experiencia de administración familiar y coherente en todos los 
        entornos, sin la necesidad de rediseñar sus cargas de trabajo, 
        permitiendo migrar, ejecutar y proteger rápidamente sus aplicaciones.</span>"
      img="iaas/IAAS_ICONO.png"
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
