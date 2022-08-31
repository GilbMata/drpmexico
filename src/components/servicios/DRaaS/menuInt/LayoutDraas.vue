<template>
  <div class="menuInterno">
    <router-view />
    <div class="menu">
      <router-link to="/tecnologiadraas" id="firstdraas"
        >Tecnología lider en la industria</router-link
      >
      <router-link to="/diseñodraas">Diseño flexible e individual</router-link>
      <router-link to="/gestiondraas">Gestión unificada de la nube</router-link>
      <router-link to="/vmwaredraas">Tecnologia basada en VMware</router-link>
      <router-link to="/copiadraas">Copia de seguridad opcional</router-link>
      <router-link to="/estrategiadraas">Estrategia y diseño</router-link>
      <router-link to="/incorporaciondraas"
        >Incorporación e implementación</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    setTimeout(function () {
      const elem = document.getElementById('firstdraas');
      elem.click();
    }, 100);
  },
};
</script>

<style lang="scss">
.active {
  box-shadow: 0 !important;
  font-weight: bold !important;
}
.menuInterno {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  // justify-content: space-evenly;
  // align-items: center;
  // width: 80%;
  position: relative;
  // margin: 40px 0 40px 0;
  height: 400px;
  .vista {
    // width: 75%;
    flex: none;
    order: 1;
    // flex-grow: 1;
    // padding-left: 5vw;
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 10px;
    // gap: 10px;
    width: 25%;
    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;
    min-height: 350px;
    // margin-left: auto;
    // min-width: 260px;
    // align-content: center;
    a {
      color: black;
      text-decoration: none;
    }
    .btn {
      color: black;
      background-color: transparent;
      border: 0;
      margin-top: 0;
      margin-bottom: 0;

      text-align: left;
    }
  }
  .a::before {
    content: 'before';
  }

  @media screen and (max-width: 790px) {
    .menuInterno {
      min-height: auto;
    }
  }
}
</style>
