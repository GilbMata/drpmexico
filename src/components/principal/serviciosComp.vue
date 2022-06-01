<template>
  <div class="card2">
      <span class="serv">Servicios</span>
      <div class="servimg">
        <router-link to="/baas">
          <img class="imgserv"  src="../../../public/img/servicios/baas.png" alt="">
        </router-link>
        <router-link to="/draas">
          <img class="imgserv" src="../../../public/img/servicios/draas.png" alt="">
        </router-link>
        <router-link to="/iaas">
          <img class="imgserv" src="../../../public/img/servicios/iaas.png" alt="">
        </router-link>
        <router-link to="/ms360">
          <img class="imgserv" src="../../../public/img/servicios/360.png" alt="">
        </router-link>
        <router-link to="/pso">
          <img class="imgserv" src="../../../public/img/servicios/pso.png" alt="">
        </router-link>
      </div>
  </div>
</template>

<style lang="scss">
.card2{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px;
  gap: 30px;
  background: #F3F3F4;
  /* Inside auto layout */
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
}
.serv{
  font-family: 'Century Gothic';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
 // line-height: 48px;
  text-align: center;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.servimg{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  gap: 30px;
  flex-wrap: wrap;
  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
}
  #baas{
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  #pso{
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }
.imgserv{
  height: 200px;
}
</style>
