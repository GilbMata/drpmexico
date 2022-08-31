<template>
  <DIV>
    <div class="caractServ reval">
      <p class="drpTitulo">BENEFICIOS</p>
      <div class="caractServImg">
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/draas/DraasCar (1).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">Facil <br />implementacion</p>
        </div>
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/draas/DraasCar (2).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">
            Transferencia <br />segura de<br />
            información
          </p>
        </div>
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/draas/DraasCar (4).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">
            Rápida<br />
            recuperación
          </p>
        </div>
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/draas/DraasCar (5).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">RPO flexible</p>
        </div>
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/draas/DraasCar (3).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">Rendimiento</p>
        </div>
      </div>
      <b-button pill class="btndrp btneficios">OBTENER PRECIOS</b-button>
    </div>
  </DIV>
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
  padding-top: 0;
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
  justify-content: center;
  align-items: flex-start;
  // padding: 0px 40px;
  gap: 10px;
  flex-wrap: wrap;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 1;
}
.imgServComp {
  width: 130px;
  height: auto;
}
.btneficios {
  order: 1;
  background-color: #f0c447 !important;
  color: #000000 !important;
  margin-top: 20px !important;
  margin-bottom: 30px !important;
}
.btn {
  color: black;
  background-color: #f0c447;
  // font-weight: 700;
  // line-height: 1;
  margin-top: 20px;
  margin-bottom: 30px;
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
