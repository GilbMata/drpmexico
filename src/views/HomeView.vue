<template>
  <div id="home-view">
    <portada></portada>
    <lay-out />
    <carrousel-comp></carrousel-comp>
    <enfoque-comp></enfoque-comp>
    <certificacionew-comp></certificacionew-comp>
    <prueba-comp />
    <video-comp></video-comp>
    <clientes-comp />
    <!-- <servicios-comp></servicios-comp>
    <nosotros-comp></nosotros-comp>
     -->
  </div>
</template>

<script>
import portada from '@/components/principal/portadaComp.vue';
import carrouselComp from '@/components/principal/carrouselComp.vue';
import enfoqueComp from '@/components/principal/enfoqueComp.vue';
import videoComp from '@/components/principal/videoComp.vue';
import certificacionewComp from '@/components/principal/certificacionewComp.vue';
import pruebaComp from '@/components/principal/pruebaComp.vue';

import LayOut from '@/components/principal/servicios/LayOut.vue';
import ClientesComp from '@/components/principal/old/clientesComp.vue';

export default {
  components: {
    portada,
    enfoqueComp,
    carrouselComp,
    videoComp,
    certificacionewComp,
    pruebaComp,
    LayOut,
    ClientesComp,
  },
};
</script>
, ClientesComp
