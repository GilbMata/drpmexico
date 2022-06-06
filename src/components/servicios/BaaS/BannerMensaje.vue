<template>
  <div id="banner-mensaje">
    <tarjeta-mensaje
      mensaje="<strong><span class='txtgreen'>DRP</span>México Backup as a Service</strong>
      está diseñado para <strong>ayudar a proteger sus datos críticos</strong>
      de amenazas de ciberseguridad internas y externas, cumplir con sus requisitos de retención
      a largo plazo y a modernizar su estrategia de respaldo."
    class="tarjetaMsj">
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
#banner-mensaje{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* padding: 150px 150px; */
/* gris claro */
background: #F7F8F8;
/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;
}
/* #banner-mensaje{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 150px 150px;
background: #F7F8F8;
flex: none;
order: 2;
flex-grow: 0;
} */
</style>
