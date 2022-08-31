<template>
  <div id="mapa">
    <b-img
      class="imgdiagrama365"
      :src="require('../../../../public/img/servicios/ms365/Diagrama.png')"
    >
    </b-img>
  </div>
</template>

<style lang="scss">
#mapa {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  order: 7;
  background: #f7f8f8;
  .imgdiagrama365 {
    width: 1000px;
    // height: 100%;
  }
}
</style>
