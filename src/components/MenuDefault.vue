<template>
  <!-- <b-container fluid class="d-sm-flex justify-content-md-center"> -->
  <b-navbar id="topbar" toggleable="lg" type="dark" variant="dark" sticky>
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
        <b-nav-item-dropdown
          text="Servicios"
          class="megamenu dropdown"
          left
          offset="-150"
        >
          <div class="container">
            <div class="row bg-white rounded-0 m-0">
              <div class="p-4">
                <div class="row">
                  <div class="col-lg-3 mb-4">
                    <h6 to="/baas/">BaaS</h6>
                    <ul class="list-unstyled">
                      <b-dropdown-item class="nav-item">
                        <a to="/baas/0" class="nav-link">Descripción</a>
                      </b-dropdown-item>

                      <b-dropdown-item
                        :to="{
                          name: 'ServiciosBaaS',
                          params: { toid: 'beneficiosBaaS' },
                        }"
                        class="nav-item"
                      >
                        <a class="nav-link">Beneficios</a>
                      </b-dropdown-item>

                      <b-dropdown-item
                        :to="{
                          name: 'ServiciosBaaS',
                          params: { toid: '' },
                        }"
                        class="nav-item"
                      >
                        <a href="beneficiosBaaS" class="nav-link"
                          >Características</a
                        >
                      </b-dropdown-item>
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Como funciona</a>
                      </b-dropdown-item>
                    </ul>
                  </div>
                  <div class="col-lg-3 mb-4">
                    <h6>DRaaS</h6>
                    <ul class="list-unstyled">
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Descripción</a>
                      </b-dropdown-item>
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Beneficios</a>
                      </b-dropdown-item>
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Características</a>
                      </b-dropdown-item>
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Como funciona</a>
                      </b-dropdown-item>
                    </ul>
                  </div>
                  <div class="col-lg-3 mb-4">
                    <h6>IaaS</h6>
                    <ul class="list-unstyled">
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Descripción</a>
                      </b-dropdown-item>
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Beneficios</a>
                      </b-dropdown-item>
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Características</a>
                      </b-dropdown-item>
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Como funciona</a>
                      </b-dropdown-item>
                    </ul>
                  </div>
                  <div class="col-lg-3 mb-4">
                    <h6>Microsoft 365</h6>
                    <ul class="list-unstyled">
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Descripción</a>
                      </b-dropdown-item>
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Beneficios</a>
                      </b-dropdown-item>
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Características</a>
                      </b-dropdown-item>
                      <b-dropdown-item class="nav-item">
                        <a href="" class="nav-link">Como funciona</a>
                      </b-dropdown-item>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  name: 'MeNu',
  data: function () {
    return {
      menuItems: [
        {
          name: 'Item 1',
          children: [
            { name: 'Subitem 1' },
            { name: 'Subitem 2' },
            { name: 'Subitem 3' },
          ],
        },
        {
          name: 'Item 2',
        },
      ],
      selectedDropdown: 'None',
    };
  },
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

<style lang="scss" scope>
// .navbar-brand {
//   padding: 5vw;
// }
body {
  //   background: #eaafc8 !important;
  //   background: -webkit-linear-gradient(to right, #eaafc8, #654ea3) !important;
  //   background: linear-gradient(to right, #eaafc8, #654ea3) !important;
  min-height: 100vh;
}

#navbar-toggle-collapse {
  padding-left: 5vw;
}
#topbar {
  .nav-item:hover {
    background: #009845;
    border-radius: 15px;
    font-weight: 700;
    color: white;
  }
  h6 {
    font-weight: 700 !important;
  }
}
.navbar {
  margin: 0 auto;
}
.nav-link {
  text-transform: uppercase;
  padding-left: 15px;
}
.list-unstyled {
  .nav-item {
    .nav-link {
      font-weight: 500;
      text-transform: capitalize;
      color: black !important;
      padding: 4px 4px !important;
    }
    :hover {
      background: #c9ead7 !important;
      color: #52ba80 !important;
    }
    .dropdown-item {
      padding: 0;
    }
  }
}
.navbar-brand {
  margin: auto;
}
.navbar-toggler {
  margin: auto;
}
.megamenu {
  position: static !important;

  .dropdown-menu {
    background: none;
    border: none;
    // width: 100%;
  }
}

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

/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/

/*
*
* ==========================================
* FOR DEMO PURPOSES
* ==========================================
*
*/

// code {
//   color: #745eb1;
//   background: #fff;
//   padding: 0.1rem 0.2rem;
//   border-radius: 0.2rem;
// }

// .text-uppercase {
//   letter-spacing: 0.08em;
// }
</style>
