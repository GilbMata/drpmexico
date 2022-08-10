<template>
  <div id="banner-mensajeServ">
    <tarjeta-mensaje
      mensaje="<strong><span lass='txtgreen'>DRP</span>México Backup as a Service</strong>
      está diseñado para <strong>ayudar a proteger sus datos críticos</strong>
      de amenazas de ciberseguridad internas y externas, cumplir con sus requisitos de retención
      a largo plazo y a modernizar su estrategia de respaldo."
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

<style>
#banner-mensajeServ {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  /* gris claro */
  background: #f7f8f8;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
}
@media only screen and (min-width: 992px) {
  #banner-mensajeServ {
    padding: 150px;
  }
}
</style>
