<template>
  <div id="info">
    <span v-html="varTxt" class="infotxt1"></span>
    <span v-html="varTxt2" class="infotxt2"></span>
  </div>
</template>

<script>
const varTxt = '<strong><span class="txtgreen">Mas que un equipo de expertos.</span></strong>';
const varTxt2 = 'Asi como <strong><span class="txtgreen">DRPMéxico</strong> utiliza tecnología comprobada para <strong>garantizar el rendimiento</strong> y la <strong>seguridad</strong> de todos nuestros servicios, nuestros servicios administrados aprovechan las mejores prácticas de la industria y habilidades especializadas en forma de orientación, integración, validación de servicios y administración continua. Nuestro objetivo es el mismo que el suyo: <strong>Brindar los resultados que su negocio necesita para tener éxito</strong>.';

export default {
  data: () => ({
    varTxt,
    varTxt2,
  }),
};
</script>

<style lang="scss">
.infotxt2 {
  font-style: normal;
  font-size: 1.3rem;
  line-height: 29px;
  align-items: center;
  text-align: center;
  width: 50%;
}

.infotxt1 {
  font-style: normal;
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: center;
  text-transform: uppercase;
  width: 30%;
}

#info {
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
