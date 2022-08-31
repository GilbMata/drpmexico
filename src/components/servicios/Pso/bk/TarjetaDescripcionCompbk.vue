<template>
  <b-container fluid id="descComp">
    <tarjeta-descripcion
      :mensaje1="varTxt1"
      :mensaje2="varTxt2"
      :mensaje3="varTxt3"
      :mensaje4="varTxt4"
    >
    </tarjeta-descripcion>
  </b-container>
</template>

<script>
import tarjetaDescripcion from '../../../UI/tarjetaDescripcion.vue';

const varTxt1 =
  '<strong>Seguridad multicapa:</strong> Defensa en profundidad para garantizar que sus datos estén seguros.  <strong><span class="txtgreen">DRP</span>México Disaster Recovery as a Service</strong> incluye seguridad administrada y seleccionada para fines específicos en todo su entorno de recuperación.';
const varTxt2 =
  'Precios simplificados:  Precios basados en el consumo con todo incluido. Esto le proporciona niveles inigualables de utilización, ahorros, complejidad reducida y pronóstico mejorado. Al igual que con todos los servicios de <strong><span class="txtgreen">DRP</span>México</strong>, el precio todo incluido significa que no hay cargos adicionales u ocultos.';
const varTxt3 =
  '<strong>Soporte 24/7/365:</strong> Nuestro equipo de soporte 24/7/365 está disponible por teléfono, correo electrónico y sistema de tickets para responder a sus preguntas. Eso comienza con nuestro proceso de incorporación continuo hasta sus operaciones en curso, para preguntas grandes y pequeñas. <strong><span class="txtgreen">DRP</span>México</strong> entiende que las preguntas técnicas representan tiempo y dinero para nuestros clientes, por lo que nos esforzamos por resolver los problemas rápidamente con nuestro equipo técnico comprometido en cada región.';
const varTxt4 =
  '<strong>Tecnología basada en VMware:</strong> La tecnología basada en VMware que conoce y en la que confía, disponible en todo el mundo.  ';

export default {
  data: () => ({
    varTxt1,
    varTxt2,
    varTxt3,
    varTxt4,
  }),
  components: {
    tarjetaDescripcion,
  },
};
</script>

<!-- <style lang="scss">
#descComp{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 100px 100px;
  gap: 200px;
  /* gris claro */
  background: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 5;
  flex-grow: 0;
}
</style> -->
