<template>
  <div id="Legal">
    <div class="legalbanner">
      <p>Legal</p>
    </div>
    <hr class="solid" />
    <div>
      <p>
        <a href="legal/sla"
          >Acuerdo de nivel de servicio informático (SLA)
          <!-- <router-link to="/legal/sla">Acuerdo de nivel de servicio informático (SLA) --> </a
        ><br />
        <b-link to="legal/acuerdo">Acuerdo de cliente</b-link><br />
        <router-link to="legal/politicas">Política de uso aceptable</router-link
        ><br />
        <router-link to="legal/condiciones">Condiciones del sitio</router-link
        ><br />
      </p>
      <p></p>
    </div>
    <hr class="divider solid" />
    <p></p>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#Legal {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  // align-items: flex-start;
  // margin: 50px;
  font-size: 15px;
  a {
    color: #009845;
  }
  // padding: 100px;
  h1 {
    font-size: 2.4em;
    font-weight: 500;
    line-height: 1em;
    color: green;
    align-items: center;
  }

  p {
    font-size: 1.5em;
  }
  .legalbanner {
    display: flex;
    background: url('../../public/img/legal.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    // padding: 100px;
    height: 300px;
    width: 100%;
    align-items: center;
    p {
      font-size: 5rem;
      color: white;
      padding-left: 200px;
      padding-top: 10px;
    }
  }
}

.acuerdos {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Century Gothic', sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #555555;
  font-weight: 400;
  text-align: justify;
}

.headT {
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.solid {
  border-top: 2px;
  color: green;
  width: 100%;
  height: 3px !important;
}
</style>
