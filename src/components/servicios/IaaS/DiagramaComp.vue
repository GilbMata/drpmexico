<template>
  <div id="mapa">
    <b-img class="imgdiagrama"
      :src="require('../../../../public/img/servicios/iaas/Diagrama IaaS.png')">
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
background: #F7F8F8;
  .imgdiagrama {
    width: 80%;
    //height: 10%;
  }
}
</style>
