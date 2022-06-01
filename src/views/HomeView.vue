/* eslint-disable vue/no-unused-components */
<template>
  <div id="home-view">
    <bienvenida-comp></bienvenida-comp>
    <servicios-comp></servicios-comp>
    <carrousel-comp></carrousel-comp>
    <nosotros-comp></nosotros-comp>
    <!-- <video-comp></video-comp> -->
    <clientes-comp></clientes-comp>
    <certificacionew-comp></certificacionew-comp>
  </div>
</template>

<script>
import bienvenidaComp from '@/components/principal/bienvenidaComp.vue';
import serviciosComp from '@/components/principal/serviciosComp.vue';
import carrouselComp from '@/components/principal/carrouselComp.vue';
import nosotrosComp from '@/components/principal/nosotrosComp.vue';
// import videoComp from '@/components/principal/videoComp.vue';
import clientesComp from '@/components/principal/clientesComp.vue';
import certificacionewComp from '@/components/principal/certificacionewComp.vue';

export default {
  components: {
    bienvenidaComp,
    serviciosComp,
    carrouselComp,
    nosotrosComp,
    // videoComp,
    clientesComp,
    certificacionewComp,
  },
};
</script>
