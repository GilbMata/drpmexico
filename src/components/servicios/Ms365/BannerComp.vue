<template>
  <b-container fluid sm id="banner-ms365">
    <b-img
      :src="require('../../../../public/img/servicios/ms365/ms365icon.png')"
      fluid alt="baas"></b-img>
  </b-container>
</template>

<style lang="scss">
#banner-ms365 {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  background: url('../../../../public/img/servicios/ms365/ms365-fondo.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0px 0px 30px 30px;
  height: auto;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  img {
    width: auto;
    height: 380px;
    padding: 100px;
  }
}
</style>
