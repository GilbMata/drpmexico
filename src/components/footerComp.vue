<template>
    <b-container fluid class="footercomp">
        <div class="menufoot">
            <img src="../../public/img/principal/logoFooter.png" alt="DRPMexico"><br>
            <span>inicio</span>
            <span>nosotros</span>
            <span>servicios</span>
            <span>acceso portal</span>
        </div>
        <div class="datosfoot">
            <span>CONTACTANOS</span><br>
            <span>contacto@drpmexico.com</span>
            <span>+52 (55) 89 95 54 00</span>
        </div>
        <div class="formfoot10">
            <div>
                <span>FORMULARIO DE CONTACTO</span><br>
                <span>Envíanos tus datos o llámanos</span>
            </div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="formfoot1">
                    <span class="formfoot11">
                        <b-form-input
                            id="input-1"
                            v-model="form.name"
                            placeholder="Nombre"
                            required
                            type = "text"
                            size="s"
                        ></b-form-input>
                        <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Apellidos"
                            required
                            size="sm"
                        ></b-form-input>
                        <b-form-input
                        id="input-3"
                        v-model="form.name"
                        placeholder="Compañia"
                        required
                        size="sm"
                        ></b-form-input>
                        <b-form-input
                        id="input-4"
                        v-model="form.name"
                        placeholder="Puesto"
                        required
                        size="sm"
                        ></b-form-input>
                    </span>
                    <span class="formfoot12">
                        <b-form-input
                        id="input-5"
                        v-model="form.name"
                        placeholder="Telefono"
                        required
                        type = "text"
                        size="sm"
                        ></b-form-input>
                        <b-form-input
                        id="input-2"
                        v-model="form.name"
                        placeholder="Correo"
                        required
                        size="sm"
                        ></b-form-input>
                        <b-form-input
                        id="input-2"
                        v-model="form.name"
                        placeholder="Mensaje"
                        required
                        size="sm"
                        ></b-form-input>
                         <b-button pill variant="success" size="sm">Enviar</b-button>
                    </span>
            </b-form>
        </div>
    </b-container>
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
};
</script>

<style>
.formfoot1{
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

.formfoot10{
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
.formfoot11{
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
.formfoot12{
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
.formfoot{
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
.datosfoot{
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
.menufoot{
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
}
.footercomp{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 100;
    padding: 50px 100px;
    position: relative;
    background: url("../../public/img/principal/footer.jpg");
    border-radius: 30px 30px 0px 0px;
    color: #FFFFFF;
}
.form-control{
    border-radius: 10px;
    padding: 0px;
    gap: 10px;
}
@media only screen and (min-width: 991px) {
  .formfoot1{
    flex-direction: row;
}
.footercomp{
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
}
}

</style>
