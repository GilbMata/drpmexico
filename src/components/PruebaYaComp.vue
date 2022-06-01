<template>
  <div id="prueba-ya">
    <div class="firstcard">
      <span v-html="msj1" class="msjP"></span>
      <ul>
        <li>No se requiere tarjeta de crédito.</li>
        <li>Sin cargo, sin riesgo, sin complicaciones durante 30 días.</li>
        <li>Configuración guiada y soporte 24 × 7.</li>
      </ul>
    </div>
    <b-button >¡COMIENZA TU PRUEBA!</b-button>
  </div>
</template>

<script>
const msj1 = '¡Prueba ya mismo!';

export default {
  data() {
    return {
      msj1,
    };
  },
};
</script>

<style lang="scss">
#prueba-ya{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 70px 120px;
  gap: 120px;
  flex-wrap: wrap;

  background: #009845;

  font-family: 'Century Gothic';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;

  border-radius: 30px;
  /* Inside auto layout */
  flex: none;
  order: 7;
  flex-grow: 0;
  align-self: stretch;
  ul {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    align-items: flex-start;
    gap: 10px;
  }
  .btn-secondary{
     display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
    background: #FFFFFF;
    border-radius: 36px;
    width: 30%;
    flex: none;
    order: 1;
    flex-grow: 1;
  }
}
.firstcard{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  flex: none;
  order: 0;
  flex-grow: 1;
}
</style>
