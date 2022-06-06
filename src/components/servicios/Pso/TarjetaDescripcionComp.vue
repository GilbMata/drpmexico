<template>
  <b-container fluid id="descComp">
    <tarjeta-descripcionB v-for="item in items" :key="item.id" :msj="item.msj"
      :img="item.img">
    </tarjeta-descripcionB>
  </b-container>
</template>

<script>
import tarjetaDescripcionB from '../../UI/tarjetaDescripcion.vue';

const msj1 = 'Planificación integral en la nube que aprovecha <strong><span class="txtgreen">DRP</span>México</strong> para dimensionar correctamente su entorno de TI.';
const msj2 = 'Servicios diseñados a la medida para cumplir con cualquier aplicación o requerimiento comercial.';
const msj3 = 'Prácticas recomendadas y experiencia para una transición predecible y sin interrupciones a la nube.';
const img1 = '/pso/icon-pso (1).svg';
const img2 = '/pso/icon-pso (2).svg';
const img3 = '/pso/icon-pso (3).svg';

export default {
  data() {
    return {
      items: [
        { msj: msj1, img: img1 },
        { msj: msj2, img: img2 },
        { msj: msj3, img: img3 },
      ],
    };
  },
  components: {
    tarjetaDescripcionB,
  },
};
</script>
