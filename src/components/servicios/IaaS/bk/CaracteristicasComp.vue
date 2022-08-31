<template>
  <div class="card2 reveal">
    <div class="caractServImg">
      <div class="pImgServ">
        <b-img
          class="imgServComp"
          :src="
            require('../../../../public/img/servicios/iaas/IaasCar (1).png')
          "
          alt="x"
        ></b-img>
        <p>Flexibilidad</p>
        <!-- <p>Reduce costos de adquisicion</p> -->
      </div>
      <div class="pImgServ">
        <b-img
          class="imgServComp"
          :src="
            require('../../../../public/img/servicios/iaas/IaasCar (2).png')
          "
          alt="x"
        ></b-img>
        <p>Seguridad</p>
      </div>
      <div class="pImgServ">
        <b-img
          class="imgServComp"
          :src="
            require('../../../../public/img/servicios/iaas/IaasCar (3).png')
          "
          alt="x"
        ></b-img>
        <p>Eficacia</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px;
  gap: 30px;
  background: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
}

.serv {
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

.servimg {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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

#baas {
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

#pso {
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.imgserv {
  height: 200px;
}
</style>
