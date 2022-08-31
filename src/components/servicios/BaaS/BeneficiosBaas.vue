<template>
  <div id="beneficiosBaaS">
    <div class="caractServ reval">
      <p class="drpTitulo">BENEFICIOS</p>
      <div class="caractServImg">
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/baas/BaasCar (2).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">Reduce costos <br />de adquisicion</p>
        </div>
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/baas/BaasCar (4).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">
            Recupera facilmente<br />
            tus datos
          </p>
        </div>
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/baas/BaasCar (3).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">
            Seguridad de<br />
            punto a punto
          </p>
        </div>
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/baas/BaasCar (1).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">RPO flexible</p>
        </div>
      </div>
      <b-button pill class="btndrp btneficios">OBTENER PRECIOS</b-button>
    </div>
  </div>
</template>
