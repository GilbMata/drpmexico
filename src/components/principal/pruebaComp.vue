<template>
  <div class="prueba">
    <div class="first">
      <h1>¡Prueba ya mismo!</h1>
      <ul>
        <li>No se requiere tarjeta de crédito.</li>
        <li>Sin cargo, sin riesgo, sin complicaciones durante 30 días.</li>
        <li>Configuración guiada y soporte 24 X 7.</li>
      </ul>
    </div>
    <div class="buton">
      <b-button pill class="btndrp">¡Comienza tu prueba!</b-button>
    </div>
  </div>
</template>

<style lang="scss">
.prueba {
  background-color: #f0c447;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  /* text-align: center; */
  justify-content: space-evenly;
  color: white;
  padding: 40px 0 40px 0;
  margin: 10px 0 10px 0;
  h1 {
    font-weight: 700;
  }
  li {
    font-weight: 700;
    color: black;
  }
  .btn {
    background-color: #009847 !important;
    padding: 0.375rem 2.75rem !important;
  }
}
</style>
