<template>
  <div id="mapa">
   <b-img class="imgdiagrama"
    :src="require('../../../../public/img/servicios/baas/Diagrama.png')"></b-img>
  </div>
</template>

<style lang="scss">

</style>

<style lang="scss">
  #mapa{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
      order: 7;
      background: #F7F8F8;
  .imgdiagrama{
      transition:transform 0.25s ease;
    }
      .imgdiagrama:hover {
    -webkit-transform:scale(1.2); /* or some other value */
    transform:scale(1.2);
}

  }
</style>
