<template>
  <div class="card2">
    <div class="servimg">
      <b-img class="imgserv"
        :src="require('../../../../public/img/servicios/iaas/IaaS-icons  (1).svg')">
      </b-img>
      <b-img class="imgserv"
        :src="require('../../../../public/img/servicios/iaas/IaaS-icons  (2).svg')">
      </b-img>
      <b-img class="imgserv"
        :src="require('../../../../public/img/servicios/iaas/IaaS-icons  (3).svg')">
      </b-img>
    </div>
  </div>
</template>

<style lang="scss">
.card2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px;
  gap: 30px;
  background: #FFFFFF;
  /* Inside auto layout */
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
}

.serv {
  font-family: 'Century Gothic';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  // line-height: 48px;
  text-align: center;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.servimg {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 40px;
  gap: 30px;
  flex-wrap: wrap;
  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
}

#baas {
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

#pso {
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.imgserv {
  height: 200px;
}
</style>
