<template>
  <div class="caractServ reveal">
    <div class="caractServImg">
      <div class="pImgServ">
        <b-img
          class="imgServComp"
          :src="
            require('../../../../public/img/servicios/ms365/ms365Car (3).png')
          "
          alt="x"
        ></b-img>
        <p>
          Cumplimiento<br />
          legal y brechas<br />
          de retención
        </p>
      </div>
      <div class="pImgServ">
        <b-img
          class="imgServComp"
          :src="
            require('../../../../public/img/servicios/ms365/ms365Car (2).png')
          "
          alt="x"
        ></b-img>
        <p>
          Eliminación accidental<br />
          o corrupción de<br />
          información
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
        <p>
          Amenazas internas<br />
          externas
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.servms {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 40px;
  // gap: 30px;
  flex-wrap: wrap;
  background: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 1;

  .imgserv {
    height: 14rem;
  }
}
</style>
