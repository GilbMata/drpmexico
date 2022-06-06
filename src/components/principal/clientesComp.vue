<template>
  <b-container class="clts">
    <p class="clt">Clientes</p>
    <carousel-3d :autoplay="true" :autoplay-timeout="3000" :width="150" :height="150"
      :inverse-scaling="400" :space="150" :border="0">
      <slide :index="0">
        <img src="../../../public/img/principal/clientes/logodrp.png" alt="">
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

<style lang="scss">
.clt {
  font-weight: 500;
  font-size: 2rem;
  line-height: 28px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.clts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  // gap: 10px;
  /* Inside auto layout */
  flex: none;
  order: 6;
  // align-self: stretch;
  flex-grow: 1;
}

.carousel-3d-container {
  .carousel-3d-slide {
    background: white;
    // padding: 20px;

    .title {
      font-size: 22px;
    }
  }
}

@media only screen and (min-width: 992px) {
  .carousel-3d-slider{
    height: 250px;
    width: 250px;
  }
}

</style>
