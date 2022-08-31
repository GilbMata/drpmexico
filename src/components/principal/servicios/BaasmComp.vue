<template>
  <div class="baasmenu">
    <div class="imgbaas bcbaas">
      <!-- <v-lazy-image
        :src="require('../../../../public/img/principal/menu/SERV_BAAS.jpg')"
        href=""
        class="imgPrincipal"
        alt=""
      ></v-lazy-image> -->
    </div>
    <div class="txtbaas">
      <h1 class="txtgreen">Backup as a Service</h1>
      <p>
        <b><span class="txtgreen">DRP</span>México Backup as a Service</b> está
        diseñado para ayudar a proteger sus datos críticos de amenazas de
        ciberseguridad internas y externas, cumplir con sus requisitos de
        retención a largo plazo y a modernizar su estrategia de respaldo.
      </p>
      <b-btn pill class="btnbaas" to="/baas">Leer mas</b-btn>
    </div>
  </div>
</template>
<script>
import VLazyImage from 'v-lazy-image/v2';
export default {
  components: {
    // VLazyImage,
  },
};
</script>

<style lang="scss">
.baasmenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* Inside auto layout */
  width: 75%;
  height: 350px;
  flex: none;
  order: 1;
  flex-grow: 0;

  padding: 20px 0 20px 35px;
}
.txtbaas {
  // width: 80%;
  padding: 20px 20px 10px 30px;
  p {
    font-size: 1rem;
  }
}
.bcbaas {
  background-image: url('../../../../public/img/principal/menu/SERV_BAAS.jpg');
}
.imgbaas {
  background-size: cover;
  background-repeat: no-repeat;
  width: 22% !important;
  height: 350px;

  flex: none;
  order: 0;
  flex-grow: 0;
  img {
    // width: 100%;
  }
}
.btnbaas {
  color: black !important;
  border: 0 !important;
  font-weight: bold !important;
  background-color: #f0c447 !important;
  // margin-top: 20px;
  // margin-bottom: 30px;
  padding: 0.15rem 5.75rem !important;
}

@media screen and (max-width: 790px) {
  .imgbaas {
    display: none;
  }
}
</style>
