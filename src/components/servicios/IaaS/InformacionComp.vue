<template>
  <div id="infoCard" class="reveal">
    <span v-html="varTxt" class="infoCardtxt1"></span>
    <span v-html="varTxt2" class="infoCardtxt2"></span>
  </div>
</template>

<script>
const varTxt =
  '<strong class="cardiaas">Una <span class="txtgreen">solución</span> de nube adecuada para sus cargas de trabajo más críticas</strong>';
const varTxt2 =
  '<strong><span class="txtgreen">DRP</span>México Infrastructure as a Service</strong> fue diseñado para abordar los desafíos más comunes asociados con la adopción de la nube y para eliminar los compromisos de los clientes. <br>A través de nuestra estrategia de planificación, predicción, migración, optimización y protección, proporcionando lo mejor de la nube al incluir todo lo que necesita para satisfacer incluso los requisitos de aplicaciones más complejos.';

export default {
  data: () => ({
    varTxt,
    varTxt2,
  }),
};
</script>

<style lang="scss">
.cardiaas {
  font-size: 2.2rem;
}
</style>
