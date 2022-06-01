<template>
  <b-container fluid id="descComp">
    <tarjeta-descripcionB v-for="item in items" :key="item.id" :msj="item.msj"
      :img="item.img">
    </tarjeta-descripcionB>
  </b-container>
</template>

<script>
import tarjetaDescripcionB from '../../UI/tarjetaDescripcion.vue';

const msj1 = 'Los recursos de <strong><span class="txtgreen">DRP</span>México</strong> se compran en bloques que se alinean con el tamaño del servidor, lo que proporciona los niveles más altos de utilización.';
const msj2 = 'Servidores dedicados para satisfacer sus necesidades de aplicaciones más exientes y requisitos de licencia únicos.';
const msj3 = 'Puede aprovechar los medios de almacenamiento adeccuados para las necesidades de rendimiento de su aplicación, desde el almacenamiento de objetos hasta todo fash.';
const msj4 = 'Puede escalar los recursos informáticos y de almacenamiento de forma independiente, lo que garantiza la optización del rendimiento y los costos de las aplicaciones.';
const msj5 = 'Modelo de resiliencia N+1 incorporado para garantizar la disponibilidad del sistema en caso de falla de un componente.';
const img1 = '/iaas/icon-iaas (1).svg';
const img2 = '/iaas/icon-iaas (2).svg';
const img3 = '/iaas/icon-iaas (3).svg';
const img4 = '/iaas/icon-iaas (4).svg';
const img5 = '/iaas/icon-iaas (5).svg';

export default {
  data() {
    return {
      items: [
        { msj: msj1, img: img1 },
        { msj: msj2, img: img2 },
        { msj: msj3, img: img3 },
        { msj: msj4, img: img4 },
        { msj: msj5, img: img5 },
      ],
    };
  },
  components: {
    tarjetaDescripcionB,
  },
};
</script>
