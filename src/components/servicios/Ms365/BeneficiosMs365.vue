<template>
  <DIV>
    <div class="caractServ reval">
      <p class="drpTitulo">BENEFICIOS</p>
      <div class="caractServImg">
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/ms365/ms365Car (2).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">
            Eliminación accidental<br />
            o corrupción de información
          </p>
        </div>
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/ms365/ms365Car (1).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">Amenazas internas<br />y externas</p>
        </div>
        <div class="pImgServ">
          <b-img
            class="imgServComp"
            :src="
              require('../../../../public/img/servicios/ms365/ms365Car (3).png')
            "
            alt="x"
          ></b-img>
          <p class="txtgreen">
            Cumplimiento legal<br />
            y brechas de retención
          </p>
        </div>
      </div>
      <b-button pill class="btndrp btneficios">OBTENER PRECIOS</b-button>
    </div>
  </DIV>
</template>
