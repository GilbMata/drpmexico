<template>
    <b-container class="clts">
        <p class="clt">Clientes</p>
        <carousel-3d :autoplay="true" :autoplay-timeout="4000" :width="250" :height="250"
            :inverse-scaling="400" :space="300" :border="0">
            <slide :index="0">
            <img class="cltimg" src="../../../public/img/principal/clientes/logodrp.png" alt="">
            </slide>
            <slide :index="1">
            <img src="../../../public/img/principal/clientes/logodrp.png" alt="">
            </slide>
            <slide :index="2">
            <img src="../../../public/img/principal/clientes/logodrp.png" alt="">
            </slide>
            <slide :index="3">
            <img src="../../../public/img/principal/clientes/logodrp.png" alt="">
            </slide>
            <slide :index="4">
            <img src="../../../public/img/principal/clientes/logodrp.png" alt="">
            </slide>
        </carousel-3d>
    </b-container>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  components: {
    Carousel3d,
    Slide,
  },
};
</script>

<style lang="scss">
.cltim{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 60px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    flex-wrap: wrap;
}
.clt{
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}

.clts{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 160px;
    gap: 10px;
    /* Inside auto layout */
    flex: none;
    order: 6;
    align-self: stretch;
    flex-grow: 1;
}
.carousel-3d-container {
  .carousel-3d-slide {
    background: white;
    padding: 20px;
    .title { font-size: 22px; }
  }
}
</style>
