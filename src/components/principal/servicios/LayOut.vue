<template>
  <div class="menuInternoP">
    <router-view />
    <div class="menu">
      <router-link to="/serviciosM" id="first">Servicios</router-link>
      <router-link to="/BaasM">Backup as a Service</router-link>
      <router-link to="/DraasM">Disaster Recovery as a Service</router-link>
      <router-link to="/IaasM">Infrastructure as a Service</router-link>
      <router-link to="/MicroSoft">Microsoft 365</router-link>
      <router-link to="/ProfeSional">Servicio Profesional</router-link>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        if (to.meta?.layout) {
          this.layout = to.meta.layout;
          this.$router.options.DRPlinkExactActiveClass = `my-active-link-other-layout`;
        } else {
          console.log(to);
          console.log(this.$router.options.linkExactActiveClass);
          // this.layout = 'LandingLayout';
          // this.$router.options.linkExactActiveClass =
          //   'my-active-link-landing-layout';
        }
      },
    },
  },
  mounted: function () {
    setTimeout(function () {
      const elem = document.getElementById('first');
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
.menuInternoP {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // justify-content: space-evenly;
  // align-items: center;
  // width: 80%;
  position: relative;
  // margin: 40px 0 40px 0;
  height: 350px;
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
