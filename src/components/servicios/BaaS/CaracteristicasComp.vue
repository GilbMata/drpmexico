<template>
  <div class="caractServ reveal">
    <div class="caractServImg">
      <div class="pImgServ">
        <b-img
          class="imgServComp"
          :src="
            require('../../../../public/img/servicios/baas/BaasCar (1).png')
          "
          alt="x"
        ></b-img>
        <p>RPO flexible</p>
        <!-- <p>Reduce costos de adquisicion</p> -->
      </div>
      <div class="pImgServ">
        <b-img
          class="imgServComp"
          :src="
            require('../../../../public/img/servicios/baas/BaasCar (2).png')
          "
          alt="x"
        ></b-img>
        <p>Reduce costos <br />de adquisicion</p>
      </div>
      <div class="pImgServ">
        <b-img
          class="imgServComp"
          :src="
            require('../../../../public/img/servicios/baas/BaasCar (3).png')
          "
          alt="x"
        ></b-img>
        <p>
          Seguridad de<br />
          punto a punto
        </p>
      </div>
      <div class="pImgServ">
        <b-img
          class="imgServComp"
          :src="
            require('../../../../public/img/servicios/baas/BaasCar (4).png')
          "
          alt="x"
        ></b-img>
        <p>
          Recupera facilmente<br />
          tus datos
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pImgServ {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
}
.caractServ {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  // gap: 30px;
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
.caractServImg {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  // padding: 0px 40px;
  // gap: 30px;
  flex-wrap: wrap;
  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
}
.imgServComp {
  height: 10rem;
}

@media only screen and (min-width: 992px) {
  .caractServImg {
    justify-content: center;
    gap: 100px;
    line-height: 25px;
  }
  .pImgServ {
    gap: 10px;
    font-size: 1.5rem;
  }
}
</style>
