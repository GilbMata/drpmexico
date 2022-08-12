<template>
  <div class="nosotr reveal" id="nosotros">
    <p class="drpTitulo">NOSOTROS</p>
    <span v-html="nosotrosTxt" class="nostr12"></span>
  </div>
</template>

<script>
// const nosotrosTxt = 'Somos una empresa mexicana que cuenta con <span
// class="txtgreen">MÁS DE 10 AÑOS DE EXPERIENCIA</span>, contamos con personal
// especializado en <span class="txtgreen">Supercomputo</span>, proveemos a
// nuestros clientes las herramientas para proteger la información, brindamos
// soluciones simplificadas para garantizar la <span
// class="txtgreen">continuidad de negocio</span>.';
const nosotrosTxt =
  'En <strong><span class="txtgreen">DRP</span>México</strong> brindamos a nuestros clientes una experiencia completa de nube; <strong>Hospedaje, protección y recuperación de hasta su información más crítica</strong>, con <strong><span class="txtgreen">MÁS DE 10 AÑOS DE EXPERIENCIA</span></strong>, personal especializado y soluciones simplificadas para garantizar la <strong><span class="txtgreen">continuidad de negocio</span></strong>.';

export default {
  data: () => ({
    nosotrosTxt,
  }),
};
</script>

<style lang="scss">
.nostr12 {
  /* width: 600px; */
  font-size: 1.2rem;
  font-weight: 400;
  align-items: center;
  text-align: center;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.nostr1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 30px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.nosotr {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: url('../../../public/img/principal/nosotrosimg.png');
  background-size: cover;
  // border-radius: 40px;
  /* Inside auto layout */
  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 1;
  // animation: .5s ease-in-out 0s 1 slideUp;
  transition: 2s all ease;
}

@media only screen and (min-width: 992px) {
  .nosotr {
    /* width: 50vw; */
    justify-content: center;
    align-items: center;
    padding: 8vw 50vw 8vw 5vw;
    // gap: 2vw;
    line-height: 30px;
    background-size: 100%;
    background-repeat: no-repeat;
    .nosotrosTitulo {
      font-size: 2rem;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
    }

    .nostr12 {
      flex-direction: row;
      font-weight: 540;
      font-size: 1.5rem;
      text-align: justify;
      // line-height: 28px;
    }
  }
}
</style>
