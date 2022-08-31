<template>
  <div class="draas">
    <b-img
      class=""
      :src="require('../../../../public/img/servicios/draas/DRAAS_PORTADA.png')"
      alt="draas"
    ></b-img>
    <h4 class="msj">
      <p>
        Líder en la industria para proteger sus aplicaciones críticas del tiempo
        de inactividad no planificado y garantizar la viabilidad a largo plazo
        de su negocio.
      </p>
    </h4>
  </div>
</template>

<style lang="scss">
.draas {
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
