<template>
  <DIV>
    <div class="caractServ reval">
      <p class="drpTitulo">BENEFICIOS</p>
      <div class="caractServImg">
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="require('/public/img/servicios/iaas/IaasCar (3).png')"
            alt="x"
          ></b-img>
          <p class="txtgreen">Eficacia</p>
        </div>
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="require('/public/img/servicios/iaas/IaasCar (1).png')"
            alt="x"
          ></b-img>
          <p class="txtgreen">Flexibilidad</p>
        </div>
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="require('/public/img/servicios/iaas/IaasCar (2).png')"
            alt="x"
          ></b-img>
          <p class="txtgreen">Seguridad</p>
        </div>
      </div>
      <b-button pill class="btndrp btneficios">OBTENER PRECIOS</b-button>
    </div>
  </DIV>
</template>
