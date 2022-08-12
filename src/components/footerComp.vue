<template>
  <div id="footer" class="footercomp">
    <div class="menufoot">
      <img
        src="../../public/img/principal/logoFooter.png"
        alt="DRPMexico"
      /><br />
      <b-link v-on:click="scrollToTop()">Inicio</b-link>
      <b-link v-on:click="scrollToElement('nosotros')">Nosotros</b-link>
      <b-link v-on:click="scrollToElement('servicios')">servicios</b-link>
      <!-- <span>acceso portal</span> -->
    </div>
    <div class="datosfoot">
      <span>CONTACTANOS</span><br />
      <a v-bind:href="'mailto:' + 'contacto@drpmexico.com'">{{
        'contacto@drpmexico.com'
      }}</a>
      <a a href="tel:+525589955400">+52 (55) 89 95 54 00</a>
      <div class="redes">
        <b-link href="https://www.facebook.com/drpmexico/">
          <b-img
            :src="require('../../public/img/redes (1).svg')"
            href=""
            class="imgPrincipal"
            alt=""
          ></b-img>
        </b-link>
        <b-link href="https://www.instagram.com/drp_mexico/">
          <b-img
            :src="require('../../public/img/redes (2).svg')"
            class="imgPrincipal"
            alt=""
          ></b-img>
        </b-link>
        <b-link href="https://www.linkedin.com/company/drpmexico/">
          <b-img
            :src="require('../../public/img/redes (3).svg')"
            class="imgPrincipal"
            alt=""
          ></b-img>
        </b-link>
        <b-link href="https://twitter.com/drpmexico">
          <b-img
            :src="require('../../public/img/redes (4).svg')"
            class="imgPrincipal"
            alt=""
          ></b-img>
        </b-link>
      </div>
    </div>
    <div class="formfoot10">
      <div>
        <span>FORMULARIO DE CONTACTO</span><br />
        <span>Envíanos tus datos o llámanos</span>
      </div>
      <b-form v-if="show" class="formfoot1">
        <div class="formfoot11">
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Nombre"
            required
            type="text"
            size="sm"
          >
          </b-form-input>
          <b-form-input
            id="input-2"
            v-model="form.lastname"
            placeholder="Apellidos"
            required
            size="sm"
          >
          </b-form-input>
          <b-form-input
            id="input-3"
            v-model="form.comp"
            placeholder="Compañia"
            required
            size="sm"
          >
          </b-form-input>
          <b-form-input
            id="input-4"
            v-model="form.puesto"
            placeholder="Puesto"
            required
            size="sm"
          ></b-form-input>
        </div>
        <div class="formfoot12">
          <b-form-input
            id="input-5"
            v-model="form.tel"
            placeholder="Telefono"
            required
            type="text"
            size="sm"
          >
          </b-form-input>
          <b-form-input
            id="input-2"
            v-model="form.email"
            placeholder="Correo"
            required
            size="sm"
          ></b-form-input>
          <b-form-input
            id="input-2"
            v-model="form.msj"
            placeholder="Mensaje"
            required
            size="sm"
          ></b-form-input>
          <b-button pill variant="success" size="sm">Enviar</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      show: true,
    };
  },
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
.formfoot1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  /* Inside auto layout */
  /* flex: none; */
  order: 1;
  flex-grow: 0;
  flex-wrap: wrap;
}

.formfoot10 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
}

.formfoot11 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 250px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.formfoot12 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 250px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.formfoot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0px;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
}

.datosfoot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.menufoot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-family: 'Century Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-transform: uppercase;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  a {
    color: #009845;
  }
}

.footercomp {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  gap: 100;
  padding: 50px 100px;
  position: relative;
  background: url('../../public/img/principal/footer.jpg');
  /* border-radius: 30px 30px 0px 0px; */
  color: #ffffff;
}

.form-control {
  border-radius: 10px;
  padding: 0px;
  gap: 10px;
}

.redes {
  display: flex;
  padding-top: 10px;
  gap: 10px;
  img {
    width: 40px;
  }
}

@media only screen and (min-width: 991px) {
  .formfoot1 {
    flex-direction: row;
  }

  .footercomp {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }
}
</style>
