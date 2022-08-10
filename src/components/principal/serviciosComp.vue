<template>
  <div class="serviciosCard" id="servicios">
    <span class="drpTitulo">SERVICIOS</span>
    <div class="serviciosList">
      <!-- <sequential-entrance fromBottom> -->
        <router-link to="/baas">
          <img class="imgServicio" src="../../../public/img/servicios/baas.png" alt="">
        </router-link>
        <router-link to="/draas">
          <img class="imgServicio" src="../../../public/img/servicios/draas.png" alt="">
        </router-link>
        <router-link to="/iaas">
          <img class="imgServicio" src="../../../public/img/servicios/iaas.png" alt="">
        </router-link>
        <router-link to="/ms365">
          <img class="imgServicio" src="../../../public/img/servicios/360.png" alt="">
        </router-link>
        <router-link to="/pso">
          <img class="imgServicio" src="../../../public/img/servicios/pso.png" alt="">
        </router-link>
      <!-- </sequential-entrance> -->
    </div>
  </div>
</template>

<style lang="scss">
.serviciosCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 10px;
  background: #F3F3F4;
  /* Inside auto layout */
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
}

.ServiciosTitulo {
  font-style: normal;
  font-weight: 600;
  // font-size: 40px;
  font-size: 2rem;
  line-height: 49px;
  // line-height: 48px;
  text-align: center;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  animation: .5s ease-in-out 0s 1 slideUp;
}

.serviciosList {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1vw;
  gap: 0px;
  flex-wrap: wrap;
  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
}

.imgServicio {
  height: 10rem;
}

@media only screen and (min-width: 992px) {
  .imgServicio {
    height: 18rem;
    // padding: 20px;
}
.ServiciosTitulo {
  font-size: 2.6rem;
  letter-spacing: 0.1em;
}

  .serviciosList {
    div {
      justify-content: space-between;
    }
  }
}
</style>
