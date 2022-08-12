<template>
  <div class="portada">
    <b-img
      :src="require('../../../public/img/principal/PORTADA.jpg')"
      href=""
      class=""
      alt="DRPMexico"
    ></b-img>
    <div class="simplificamos">
      <h1>SIMPLIFICAMOS</h1>
      <h6>TU EXPERIENCIA EN LA NUBE.</h6>
      <h7>
        Ofrecemos una forma simplificada de disfrutar de los servicios en la
        nube para aplicaciones y servicios de TI de nueva generación.
      </h7>
      <b-button pill>30 dias de prueba gratis</b-button>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.portada {
  img {
    width: 100%;
  }
  .simplificamos {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 10px 15vw;
    text-align: center;
    background-color: #2c2a25;
    color: white;
    font-weight: 700;
    h1 {
      color: #009845;
      margin-bottom: 0;
      font-weight: 700;
    }
    h6 {
      font-weight: 700;
      margin-bottom: 20px;
    }
    .btn {
      color: black;
      background-color: #f0c447;
      font-weight: 700;
      line-height: 1;
      margin-top: 20px;
      margin-bottom: 30px;
    }
  }
}
</style>
