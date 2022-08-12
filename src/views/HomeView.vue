<template>
  <div id="home-view">
    <portada></portada>
    <carrousel-comp></carrousel-comp>
    <enfoque-comp></enfoque-comp>
    <certificacionew-comp></certificacionew-comp>
    <clientes-comp></clientes-comp>
    <video-comp></video-comp>
    <!-- <servicios-comp></servicios-comp>
    <nosotros-comp></nosotros-comp>
     -->
  </div>
</template>

<script>
import portada from '@/components/principal/portadaComp.vue';
import carrouselComp from '@/components/principal/carrouselComp.vue';
import enfoqueComp from '@/components/principal/enfoqueComp.vue';
// import serviciosComp from '@/components/principal/old/serviciosComp.vue';
// import nosotrosComp from '@/components/principal/nosotrosComp.vue';
import videoComp from '@/components/principal/videoComp.vue';
import clientesComp from '@/components/principal/clientesComp.vue';
import certificacionewComp from '@/components/principal/certificacionewComp.vue';

export default {
  components: {
    portada,
    enfoqueComp,
    // bienvenidaComp,
    //   serviciosComp,
    carrouselComp,
    // nosotrosComp,
    videoComp,
    clientesComp,
    certificacionewComp,
  },
};
</script>
