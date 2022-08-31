<template>
  <b-container id="descComp">
    <tarjeta-descripcionB
      v-for="item in items"
      :key="item.id"
      :msj="item.msj"
      :img="item.img"
    >
    </tarjeta-descripcionB>
  </b-container>
</template>

<script>
import tarjetaDescripcionB from '../../../UI/tarjetaDescripcion.vue';

const msj1 =
  '<strong>Defensa</strong>  en profundidad para garantizar que sus datos estén seguros.  <strong><span class="txtgreen">DRP</span>México Disaster Recovery as a Service</strong> incluye seguridad administrada y seleccionada para fines específicos en todo su entorno de recuperación.';
const msj2 =
  'Precios basados en el consumo con todo incluido. Esto le proporciona niveles inigualables de utilización, ahorros, complejidad reducida y pronóstico mejorado. Al igual que con todos los servicios de <strong><span class="txtgreen">DRP</span>México</strong>, el precio todo incluido significa que no hay cargos adicionales u ocultos.';
const msj3 =
  '<strong>Soporte 24/7/365:</strong> Nuestro equipo de soporte 24/7/365 está disponible por teléfono, correo electrónico y sistema de tickets para responder a sus preguntas. Eso comienza con nuestro proceso de incorporación continuo hasta sus operaciones en curso, para preguntas grandes y pequeñas.';
// <strong><span class="txtgreen">DRP</span>México</strong> entiende que las
// preguntas técnicas representan tiempo y dinero para nuestros clientes, por lo
// que nos esforzamos por resolver los problemas rápidamente con nuestro equipo
// técnico comprometido en cada región.';
const msj4 =
  '<strong>Tecnología basada en VMware:</strong> La tecnología basada en VMware que conoce y en la que confía, disponible en todo el mundo.  ';
const img1 = '/draas/iconos DraaS (1).svg';
const img2 = '/draas/iconos DraaS (2).svg';
const img3 = '/draas/iconos DraaS (3).svg';
const img4 = '/draas/iconos DraaS (4).svg';

export default {
  data() {
    return {
      items: [
        { msj: msj1, img: img1 },
        { msj: msj2, img: img2 },
        { msj: msj3, img: img3 },
        { msj: msj4, img: img4 },
      ],
    };
  },
  components: {
    tarjetaDescripcionB,
  },
};
</script>
