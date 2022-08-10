<template>
  <div id="prueba-ya">
    <div class="fisrtya">
      <span v-html="msj1" class="msjP"></span>
      <ul>
        <li>No se requiere tarjeta de crédito.</li>
        <li>Sin cargo, sin riesgo, sin complicaciones durante 30 días.</li>
        <li>Configuración guiada y soporte 24 X 7.</li>
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
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 1rem;
  // flex-wrap: wrap;
  background: hsl(147, 100%, 30%);
  font-weight: 700;
  font-size: 2.5rem;
  // line-height: 58px;
  color: #FFFFFF;

  // border-radius: 30px;
  /* Inside auto layout */
  flex: none;
  order: 8;
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
    gap: 5px;
    font-size: 1rem;
  }
  .btn-secondary{
     display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
      font-weight: 700;
    color: black;
    background: #FFFFFF;
    border-radius: 0.2rem;
    // padding: 5px 20vw 5px 20vw;
    // width: 50%;
    flex: none;
    order: 1;
    flex-grow: 1;
  }
}

@media only screen and (min-width: 992px){
  #prueba-ya{
    flex-direction: row;
    padding: 10px;
  }
  .fisrtya{
    display: flex;
    flex-direction: column;
    padding: 3rem;
    padding-left: 8rem;
  }
}
</style>
