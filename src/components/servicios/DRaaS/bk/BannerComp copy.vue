<template>
  <div class="baas">
    <b-img
      class=""
      :src="require('../../../../public/img/servicios/baas/baas-fondo.png')"
      alt="baas"
    ></b-img>
    <h4 class="msj">
      <p>Proteja sus datos donde quiera que residan.</p>
      <p>Recupéralo rápidamente con un Backup.</p>
    </h4>
  </div>
</template>

<style lang="scss">
.baas {
  img {
    width: 100%;
  }
  .msj {
    text-align: center;
    padding: 25px 15vw;
    background-color: #2c2a25;
    color: #f0c447;
    font-weight: 700 !important;
  }
}

@media only screen and (min-width: 992px) {
  #banner-baas {
    background-size: 100% 100%;
    img {
      width: auto;
      height: 400px;
      padding: 70px 0px 70px 170px;
    }
  }
}
</style>
