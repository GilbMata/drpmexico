<template>
  <div id="infoCard" class="reveal">
    <span v-html="varTxt" class="infoCardtxt1"></span>
    <span v-html="varTxt2" class="infoCardtxt2"></span>
  </div>
</template>

<script>
const varTxt =
  '<strong class="txtgreen">PROTEGE</strong> TUS DATOS <strong>DONDE QUIERA QUE RESIDAN</strong>';
const varTxt2 =
  '<strong><span class="txtgreen">DRP</span>México Backup</strong> ofrece protección integrada, segura y rentable para sus datos locales y en la nube, para garantizar que vuelva a estar en línea después de un evento de pérdida de datos.<br>Con múltiples capas de defensa que incluyen seguridad, copia de seguridad en la nube y protección interna aislada, nuestro servicio de Bakup as a Service puede ayudar a los clientes a eliminar puntos únicos de falla para minimizar el tiempo y el impacto comercial de la pérdida de datos.';

export default {
  data: () => ({
    varTxt,
    varTxt2,
  }),
};
</script>

<style lang="scss">
.infoCardtxt2 {
  font-size: 1.4rem;
  line-height: 29px;
  align-items: center;
  text-align: center;
  padding: 2rem;
  // width: 50%;
}
.infoCardtxt1 {
  font-size: 2.5rem;
  line-height: 2.8rem;
  text-align: center;
  text-transform: uppercase;
  padding: 2rem;
  // width: 30%;
}
#infoCard {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 70px 0px;
  // gap: 100px;

  /* gris claro */
  background: #f7f8f8;

  /* Inside auto layout */
  align-self: stretch;
  flex: none;
  order: 4;
  flex-grow: 0;
}

@media only screen and (min-width: 992px) {
  #infoCard {
    flex-flow: row nowrap;
    // justify-content: space-between;
    gap: 100px;
    .infoCardtxt1 {
      // text-align: justify;
      font-size: 2.7rem;
      // padding-left: 10rem;
      // padding-right: 0;
      width: 30%;
    }
    .infoCardtxt2 {
      font-size: 1.4rem;
      text-align: justify;
      width: 50%;
    }
  }
}
</style>
