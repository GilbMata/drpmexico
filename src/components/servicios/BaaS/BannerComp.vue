<template>
  <b-container fluid sm id="banner-baas">
    <b-img :src="require('../../../../public/img/servicios/baas/baasicon.png')"
    fluid alt="baas"></b-img>
  </b-container>
</template>

<style lang="scss">
#banner-baas{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background: url('../../../../public/img/servicios/baas/baas-fondo.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0px 0px 30px 30px;
  height: auto;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

img{
  width: auto;
  height: 400px;
  padding: 100px ;
  }
}
</style>
