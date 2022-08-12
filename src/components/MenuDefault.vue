<template>
  <!-- <b-container fluid class="d-sm-flex justify-content-md-center"> -->
  <b-navbar id="top" toggleable="xl" type="dark" variant="dark" sticky>
    <b-navbar-brand href="/">
      <img
        src="@/assets/drplogo.png"
        class="d-inline-block logo align-top"
        alt="DRPMexico"
      />
    </b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ms-auto">
        <!-- <b-nav-item href="/" class="nav-item">Partners</b-nav-item> -->
        <b-nav-item-dropdown text="Servicios" right>
          <b-dropdown-item to="/baas/#"
            ><strong>BaaS</strong> - Respaldos
          </b-dropdown-item>
          <b-dropdown-item to="/draas"
            ><strong>DraaS</strong> - Recuperacion
          </b-dropdown-item>
          <b-dropdown-item to="/iaas"
            ><strong>IaaS</strong> - Infraestructura
          </b-dropdown-item>
          <b-dropdown-item to="/ms365">
            <strong>MS365</strong> - Respaldo
          </b-dropdown-item>
          <b-dropdown-item to="/pso">
            <strong>Pso/Msp</strong> - Profesional
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-on:click="scrollToElement('footer')">Contacto</b-nav-item>
        <b-nav-item href="https://drpmexico.freshteam.com/jobs"
          >Talento</b-nav-item
        >
        <b-nav-item href="https://support.drpmexico.com/">Soporte</b-nav-item>
        <b-nav-item-dropdown text="Portales">
          <b-dropdown-item href="https://veeam.drpmexico.com/"
            >Veam
          </b-dropdown-item>
          <b-dropdown-item href="https://vcloud.drpmexico.com/"
            >Vcloud
          </b-dropdown-item>
          <b-dropdown-item href="https://prtg.drpmexico.com/"
            >Prtg
          </b-dropdown-item>
          <b-dropdown-item href="https://vcda.drpmexico.com/"
            >Vcda
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/legal">Legal</b-nav-item>
        <b-nav-item href="#">FREE TRIAL</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'App',
  methods: {
    scrollToElement(ele) {
      console.log(ele);
      const el = document.getElementById(ele);
      console.log(el);
      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
// .navbar-brand {
//   padding: 5vw;
// }

#navbar-toggle-collapse {
  padding-left: 5vw;
}

.nav-item:hover {
  background: #009845;
  border-radius: 15px;
  font-weight: 700;
  color: white;
}
.navbar {
  margin: 0 auto;
}
.nav-link {
  text-transform: uppercase;
  padding-left: 15px;
}
.navbar-brand {
  margin: auto;
}
.navbar-toggler {
  margin: auto;
}

// .navbar {
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   justify-content: space-around;
//   // padding: 10px 70px;
//   gap: 10px;
//   // position: fixed;
//   //width: 100vw;
//   // height: auto;
//   border-color: transparent;
//   background-color: #1C2A45;
// }

@media screen and (min-width: 992px) {
  .navbar {
    padding: 10px;
    // border-top-left-radius: 0px;
    // border-top-right-radius: 0px;
    // border-bottom-right-radius: 30px;
    // border-bottom-left-radius: 30px;

    .logo {
      // width: 300px;
      height: auto;
    }

    .navbar-nav {
      align-items: center;
    }
  }

  .navbar-brand {
    padding: 10;
  }

  #navbar-toggle-collapse {
    padding-left: 0vw;
    // align-items: flex-start;
  }
}
.logo {
  width: 250px;
  padding-left: 30px;
  // margin: auto;
  // height: 60px;
  // justify-content: space-around;
}
</style>
