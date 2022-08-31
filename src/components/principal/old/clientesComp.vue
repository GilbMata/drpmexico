<template>
  <div class="clts reveal">
    <span class="drpTitulo">Clientes</span>
    <div class="imgClientes reveal">
      <b-img
        requi
        :src="require('@/assets/logos/Clisa.png')"
        height="200"
        class="reveal"
      ></b-img>
      <b-img
        requi
        :src="require('@/assets/logos/Pegaduro.png')"
        height="220"
      ></b-img>
      <b-img
        requi
        :src="require('@/assets/logos/Hino.png')"
        height="220"
      ></b-img>
      <b-img
        requi
        :src="require('@/assets/logos/SanPablo.png')"
        height="200"
      ></b-img>
      <b-img
        requi
        :src="require('@/assets/logos/Infra.png')"
        height="100"
      ></b-img>
      <b-img
        requi
        :src="require('@/assets/logos/Similares.png')"
        height="130"
      ></b-img>
    </div>
    <!-- <carousel-3d :autoplay="true" :autoplay-timeout="3000" :width="200" :height="200"
      :inverse-scaling="400" :space="300" :border="0">
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
      <slide :index="5">
        <img src="../../../public/img/principal/clientes/logodrp.png" alt="">
      </slide>
      <slide :index="6">
        <img src="../../../public/img/principal/clientes/logodrp.png" alt="">
      </slide>
      <slide :index="7">
        <img src="../../../public/img/principal/clientes/logodrp.png" alt="">
      </slide>
    </carousel-3d> -->
  </div>
</template>

<style lang="scss">
.clts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 1rem;
  // padding: auto;
  // gap: 2rem;
  /* Inside auto layout */
  flex: none;
  order: 6;
  // align-self: stretch;
  flex-grow: 1;
  .imgClientes {
    margin-top: 30px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
  }
  img {
    // width: 130px;
    flex-direction: column;
  }
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
  .carousel-3d-slider {
    height: 250px;
    width: 250px;
  }
  .clts {
    gap: 10px;
    padding: 3rem;
  }
}
</style>
