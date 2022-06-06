<template>
  <b-container fluid sm id="banner-pso">
    <b-img :src="require('../../../../public/img/servicios/pso/psoicon.png')"
      fluid alt="baas"></b-img>
  </b-container>
</template>

<style lang="scss">
#banner-pso {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background: url('../../../../public/img/servicios/pso/pso-fondo.png');
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
    height: 400px;
    padding: 100px;
  }
}
</style>
