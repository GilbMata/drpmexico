<template>
  <div id="info">
    <span v-html="varTxt" class="infotxt1"></span>
    <span v-html="varTxt2" class="infotxt2"></span>
  </div>
</template>

<script>
const varTxt = '<strong>Una <span class="txtgreen">solución</span> de nube adecuada para sus cargas de trabajo más críticas</strong>';
const varTxt2 = '<strong><span class="txtgreen">DRP</span>México Infrastructure as a Service</strong> fue diseñado para abordar los desafíos más comunes asociados con la adopción de la nube y para eliminar los compromisos de los clientes. <br>A través de nuestra estrategia de planificación, predicción, migración, optimización y protección, proporcionando lo mejor de la nube al incluir todo lo que necesita para satisfacer incluso los requisitos de aplicaciones más complejos.';

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
