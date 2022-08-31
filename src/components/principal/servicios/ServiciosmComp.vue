<template>
  <div class="iconsp">
    <div class="iconsservicios">
      <b-img
        :src="require('../../../../public/img/principal/menu/ICON_BAAS.png')"
        href=""
        class=""
        alt=""
      ></b-img>
      <b-img
        :src="require('../../../../public/img/principal/menu/ICON_DRAAS.png')"
        href=""
        class=""
        alt=""
      ></b-img>
      <b-img
        :src="require('../../../../public/img/principal/menu/ICON_ IAAS.png')"
        href=""
        class=""
        alt=""
      ></b-img>
      <b-img
        :src="require('../../../../public/img/principal/menu/ICON_M365.png')"
        href=""
        class=""
        alt=""
      ></b-img>
      <b-img
        :src="require('../../../../public/img/principal/menu/ICON_PSO.png')"
        href=""
        class=""
        alt=""
      ></b-img>
    </div>
    <div class="txtservicios">
      <p>
        <span class="txtgreen bold">DRPMexico mas que una nube.</span> Desde la
        planificación hasta la protección, DRP es el único proveedor de nube
        enfocado en simplificar cada paso del viaje a la nube
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.iconsp {
  padding: 15px 0;
}
.bold {
  font-weight: bold;
}
.iconsservicios {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  // margin-top: 5px;
  margin-bottom: 30px;

  align-items: flex-end;
  img {
    width: 100px;
  }
}
.txtservicios {
  margin: 0 10vw;
  text-align: justify;
}
</style>
