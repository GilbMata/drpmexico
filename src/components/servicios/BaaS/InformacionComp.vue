<template>
  <div id="info">
    <span v-html="varTxt" class="infotxt1"></span>
    <span v-html="varTxt2" class="infotxt2"></span>
  </div>
</template>

<script>
const varTxt = '<strong class="txtgreen">PROTEGE</strong> TUS DATOS <strong>DONDE QUIERA QUE RESIDAN</strong>';
const varTxt2 = '<strong><span class="txtgreen">DRP</span>México Backup</strong> ofrece protección integrada, segura y rentable para sus datos locales y en la nube, para garantizar que vuelva a estar en línea después de un evento de pérdida de datos.<br>Con múltiples capas de defensa que incluyen seguridad, copia de seguridad en la nube y protección interna aislada, nuestro servicio de Bakup as a Service puede ayudar a los clientes a eliminar puntos únicos de falla para minimizar el tiempo y el impacto comercial de la pérdida de datos.';

export default {
  data: () => ({
    varTxt,
    varTxt2,
  }),
};
</script>

<style lang="scss">
.infotxt2{
  font-family: 'Century Gothic';
  font-style: normal;
  font-size: 1rem;
  line-height: 29px;
  align-items: center;
  text-align: center;
  width: 50%;
}
.infotxt1{
  font-family: 'Century Gothic';
  font-style: normal;
  font-size: 2rem;
  line-height: 2.8rem;
  text-align: center;
  text-transform: uppercase;
  width: 30%;
}
#info{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 100px 100px;
  gap: 100px;

  /* gris claro */
  background: #F7F8F8;

  /* Inside auto layout */
  align-self: stretch;
  flex: none;
  order: 4;
  flex-grow: 0;
}
</style>
