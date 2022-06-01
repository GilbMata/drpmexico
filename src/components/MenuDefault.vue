<template>
  <!-- <b-container fluid class="d-sm-flex justify-content-md-center"> -->
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
    <b-navbar-brand href="/">
      <img src="@/assets/drplogo.png" class="d-inline-block align-top logo"
        alt="DRPMexico">
    </b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ms-auto">
        <b-nav-item href="/" class="nav-item">Partners</b-nav-item>
        <b-nav-item-dropdown text="Servicios" center>
          <b-dropdown-item to="/baas">BaaS - Respaldos</b-dropdown-item>
          <b-dropdown-item to="/draas">DRaaS - Recuperacion</b-dropdown-item>
          <b-dropdown-item href="/iaas">IaaS - Infraestructura</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Contacto</b-nav-item>
        <b-nav-item href="#">Talento</b-nav-item>
        <b-nav-item href="https://support.drpmexico.com/">Soporte</b-nav-item>
        <b-nav-item-dropdown text="Portales">
          <b-dropdown-item href="https://veeam.drpmexico.com/">veam
          </b-dropdown-item>
          <b-dropdown-item href="https://vcloud.drpmexico.com/">vcloud
          </b-dropdown-item>
          <b-dropdown-item href="https://prtg.drpmexico.com/">prtg
          </b-dropdown-item>
          <b-dropdown-item href="https://vcda.drpmexico.com/">vcda
          </b-dropdown-item>
          <b-dropdown-item href="https://vcloud.drpmexico.com/">vcloud
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/legal">Legal</b-nav-item>
        <b-nav-item href="#">FREE TRIAL</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss">
.nav-item:hover {
  background: #009845;
  border-radius: 15px;
  font-weight: 700;
  color: white;
}

.nav-link {
  text-transform: uppercase;
}

.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  // padding: 10px 70px;
  gap: 10px;
  // position: fixed;
  //width: 100vw;
  // height: auto;
  border-color: transparent;
  background-color: #1C2A45;
}

@media screen and (min-width: 992px) {
  .navbar {
    padding: 10px 70px;

    .logo {
      width: 300px;
      height: auto;
    }
  }
}

#app {
  // display: flex;
  // flex-direction: column;
  //align-items: center;
  //position: relative;
  //width: auto;
  //overflow-x: auto;
  //margin: auto;
}

.logo {
  width: 200px;
  // height: 60px;
  justify-content: space-around;
}
</style>
