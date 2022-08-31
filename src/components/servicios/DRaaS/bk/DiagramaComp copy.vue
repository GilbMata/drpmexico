<template>
  <div id="mapa">
    <b-img
      class=""
      :src="require('../../../../public/img/servicios/baas/Diagrama.png')"
    ></b-img>
  </div>
</template>

<style lang="scss">
#mapa {
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 20px;
  margin: 10px 10vw;
  background: #f7f8f8;
  img {
    width: 100%;
  }
  .imgdiagrama {
    transition: transform 0.25s ease;
  }
  .imgdiagrama:hover {
    -webkit-transform: scale(1.2); /* or some other value */
    transform: scale(1.2);
  }
}
</style>
