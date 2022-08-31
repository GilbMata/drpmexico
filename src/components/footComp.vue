<template>
  <div class="footer">
    <div>
      <img src="../../public/img/principal/logoFooter.png" alt="DRPMexico" />
    </div>
    <div class="servfoot">
      <h6>SERVICIOS</h6>
      <span>Respaldo</span>
      <span>Recuperación</span>
      <span>Infraestructura</span>
      <span>Respaldo 365</span>
      <span>Profesional</span>
      <span>Soporte</span>
      <span>Prueba gratis</span>
    </div>
    <div class="empresafoot">
      <h6>EMPRESA</h6>
      <span>¿Por que DRPMéxico?</span>
      <b-link v-on:click="scrollToElement('nosotros')"
        ><span>Nosotros</span></b-link
      >
      <span>Enfoque</span>
      <span>Certificaciones</span>
      <span>Clientes</span>
      <span>Partners</span>
      <span>Talento</span>
      <span>Portales</span>
    </div>
    <div class="connecfoot">
      <div class="info">
        <div class="conecta">
          <h6>CONECTA</h6>
          <a v-bind:href="'mailto:' + 'contacto@drpmexico.com'">{{
            'contacto@drpmexico.com'
          }}</a>
          <a a href="tel:+523338809424"
            ><b-icon-telephone-fill /> +52 (33) 38 80 94 24</a
          >
          <!-- <span><b-icon-telephone-fill /> 01 (33) 3880 9424</span> -->
          <br />
          <span>Envíanos tus datos o llámanos</span>
        </div>
        <div class="redes">
          <b-link href="https://www.facebook.com/drpmexico/">
            <b-icon-facebook
          /></b-link>
          <b-link href="https://www.instagram.com/drp_mexico/">
            <b-icon-instagram
          /></b-link>
          <b-link href="https://www.linkedin.com/company/drpmexico/">
            <b-icon-linkedin
          /></b-link>
          <b-link href="https://twitter.com/drpmexico">
            <b-icon-twitter
          /></b-link>
        </div>
      </div>
      <div class="form">
        <b-form class="form1">
          <b-form-input
            class="forminput"
            id="input-1"
            placeholder="Nombre"
            required
            type="text"
            size="sm"
          ></b-form-input>
          <b-form-input
            class="forminput"
            id="input-1"
            placeholder="Apellido"
            required
            type="text"
            size="sm"
          ></b-form-input>
          <b-form-input
            class="forminput"
            id="input-1"
            placeholder="Compañia"
            required
            type="text"
            size="sm"
          ></b-form-input>
          <b-form-input
            class="forminput"
            id="input-1"
            placeholder="Puesto"
            required
            type="text"
            size="sm"
          ></b-form-input>
        </b-form>

        <b-form class="form1">
          <b-form-input
            class="forminput"
            id="input-1"
            placeholder="Telefono"
            required
            type="text"
            size="sm"
          ></b-form-input>
          <b-form-input
            class="forminput"
            id="input-1"
            placeholder="Correo"
            required
            type="text"
            size="sm"
          ></b-form-input>
          <b-form-input
            class="forminput minh"
            id="input-1"
            placeholder="Mensaje"
            required
            type="text"
            size="sm"
          ></b-form-input>
          <b-button pill class="btndrp">ENVIAR</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-image: url('../../public/img/principal/footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 40px;
  padding-bottom: 50px;
  align-items: flex-start;
  justify-content: space-evenly;
  color: white;
  //   gap: 1vw;
  h6 {
    font-weight: 700;
  }
  .servfoot {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    // color: #f0c255;
    span {
      font-size: 0.8rem;
    }
  }
  .empresafoot {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;

    span {
      font-size: 0.8rem;
    }
  }
  .connecfoot {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    .info {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      margin-bottom: 10px;
      .conecta {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: flex-start;
        align-content: center;
        color: white;
        h6 {
          font-weight: 700;
        }
        span {
          font-size: 0.8rem;
        }
        .bi {
          fill: #f0c255;
        }
      }
      .redes {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        .bi {
          fill: #f0c255;
        }
      }
    }
    .form {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 10px;
      .forminput {
        border-radius: 0.8rem !important;
      }
      .minh {
        min-height: calc(3em + 1.5rem + 2px);
      }
      .form1 {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        align-content: center;
        justify-content: flex-start;
        gap: 7px;
      }
      .form2 {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        align-items: center;
      }
    }
  }
  .btn {
    color: black;
    background-color: #f0c447;
    // font-weight: 700;
    // line-height: 1;
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 0.8rem;
    width: 50%;
  }
  img {
    width: 300px;
  }
  a {
    color: white;
  }
}
@media only screen and (max-width: 520px) {
  .footer {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .form {
    flex-direction: column !important;
    flex-wrap: wrap;
  }
}
</style>
