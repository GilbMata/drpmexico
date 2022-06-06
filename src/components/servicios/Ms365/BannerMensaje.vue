<template>
  <div id="banner-mensaje">
    <tarjeta-mensaje mensaje="<strong><span class='txtgreen'>DRP</span>México
    Microsoft 365 Backup</strong> va mucho más allá al
    proporcionar las capacidades de retención, seguridad y protección de datos a
    largo plazo que necesita para garantizar que los datos críticos de su
    empresa estén siempre accesibles." class="tarjetaMsj">
    </tarjeta-mensaje>
  </div>
</template>

<script>
import TarjetaMensaje from '@/components/UI/TarjetaMensaje.vue';

export default {
  components: {
    TarjetaMensaje,
  },
};
</script>

<style lang="scss">
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
