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
import tarjetaDescripcionB from '../../UI/tarjetaDescripcion.vue';

const msj1 =
  'Protéjase contra amenazas internas y externas a sus datos, incluidos delitos cibernéticos, ransomware, fallas de hardware y eliminaciones accidentales o maliciosas.';
const msj2 =
  'Elimine la tecnología de copia de seguridad en cinta más antigua y el tiempo y el esfuerzo necesarios para enviar, almacenar y recuperar cintas físicas.';
const msj3 =
  'Modernice la solución de respaldo existente y mejore las capacidades de retención y cumplimiento.';
const msj4 =
  'Amplíe su copia de seguridad principal con almacenamiento en la nube escalable, flexible, ilimitado y administrado por DRPMéxico.';
const msj5 =
  'Mejore la eficiencia de los recursos de TI y elimine los costos operativos asociados con las soluciones de respaldo locales más antiguas';
const img1 = '/baas/iconos BaaS (1).svg';
const img2 = '/baas/iconos BaaS (2).svg';
const img3 = '/baas/iconos BaaS (3).svg';
const img4 = '/baas/iconos BaaS (4).svg';
const img5 = '/baas/iconos BaaS (5).svg';

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
