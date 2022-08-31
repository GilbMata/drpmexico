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

const msj1 = 'Precios simples y de tarifa plana por usuario/buzón de correo.';
const msj2 = 'Soporte 24/7/365 incluido.';
const msj3 =
  'Incluye todo en Microsoft 365, incluidos SharePoint, Exchange, OneDrive y Teams.';
const msj4 = 'Cuota de almacenamiento ilimitada.';
const msj5 = 'Política de retención ilimitada.';
const msj6 =
  'Copias de seguridad automáticas de datos 365 (cada 24 horas o personalizadas según la frecuencia)';
const msj7 =
  'Seguro: incluido el cifrado en tránsito y en reposo, y la plataforma de cumplimiento y seguridad estándar de DRPMéxico.';
const img1 = '/ms365/icon-ms365 (1).svg';
const img2 = '/ms365/icon-ms365 (2).svg';
const img3 = '/ms365/icon-ms365 (3).svg';
const img4 = '/ms365/icon-ms365 (4).svg';
const img5 = '/ms365/icon-ms365 (5).svg';
const img6 = '/ms365/icon-ms365 (6).svg';
const img7 = '/ms365/icon-ms365 (7).svg';

export default {
  data() {
    return {
      items: [
        { msj: msj1, img: img1 },
        { msj: msj2, img: img2 },
        { msj: msj3, img: img3 },
        { msj: msj4, img: img4 },
        { msj: msj5, img: img5 },
        { msj: msj6, img: img6 },
        { msj: msj7, img: img7 },
      ],
    };
  },
  components: {
    tarjetaDescripcionB,
  },
};
</script>
