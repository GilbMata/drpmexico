<template>
  <div class="serviciosCard">
    <span class="ServiciosTitulo">Servicios</span>
    <div class="serviciosList">
      <sequential-entrance fromBottom>
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
      </sequential-entrance>
    </div>
  </div>
</template>

<style lang="scss">
.serviciosCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw;
  gap: 1px;
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
  height: 9rem;
}

@media only screen and (min-width: 992px) {
  .imgServicio {
    height: 11rem;
    margin: 1rem;
    // padding: 20px;
  }

  .serviciosList {
    div {
      justify-content: space-around;
    }
  }
}
</style>
