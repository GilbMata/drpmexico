<template>
  <div class="servms">
    <b-img class="imgserv"
      :src="require('../../../../public/img/servicios/ms365/Ms365-icons (1).svg')">
    </b-img>
    <b-img class="imgserv"
      :src="require('../../../../public/img/servicios/ms365/Ms365-icons (2).svg')">
    </b-img>
    <b-img class="imgserv"
      :src="require('../../../../public/img/servicios/ms365/Ms365-icons (3).svg')">
    </b-img>
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
  background: #FFFFFF;
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
