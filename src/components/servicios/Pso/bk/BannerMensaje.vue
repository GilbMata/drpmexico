<template>
  <div id="banner-mensajeServ">
    <tarjeta-mensaje
      mensaje="<strong><span class='txtgreen'>DRP</span>México
    IaaS</strong> proporciona la eficiencia y la escalabilidad de IaaS
    tradicional, pero con una infraestructura probada basada en VMware, diseñado
    por expertos, garantizando seguridad integrada y protección de datos.<br>
    Obtén una experiencia de administración familiar y coherente en todos los
    entornos, sin la necesidad de rediseñar sus cargas de trabajo, permitiendo
    migrar, ejecutar y proteger rápidamente sus aplicaciones."
      class="tarjetaMsj"
    >
    </tarjeta-mensaje>
  </div>
</template>

<script>
import TarjetaMensaje from '../../../UI/TarjetaMensaje.vue';

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
