<template>
    <div class="nosotr">
        <p class="nostr11">NOSOTROS</p>
        <span v-html="nosotrosTxt" class="nostr12"></span>
    </div>
</template>

<script>
const nosotrosTxt = 'Somos una empresa mexicana que cuenta con <span class="txtgreen">MÁS DE 10 AÑOS DE EXPERIENCIA</span>, contamos con personal especializado en <span class="txtgreen">Supercomputo</span>, proveemos a nuestros clientes las herramientas para proteger la información, brindamos soluciones simplificadas para garantizar la <span class="txtgreen">continuidad de negocio</span>.';

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

.nostr11 {
    /* font-style: normal; */
    font-weight: 700;
    font-size: 2rem;
    /* line-height: 28px; */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 0;
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
    background: url("../../../public/img/principal/nosotrosimg.png");
    background-size: cover;
    border-radius: 40px;
    /* Inside auto layout */
    flex: none;
    order: 4;
    align-self: stretch;
    flex-grow: 1;
}

@media only screen and (min-width: 992px) {
    .nosotr {
        /* width: 50vw; */
        justify-content: center;
        align-items: center;
        padding: 10vw 20vw;
        gap: 2vw;

        .nostr11 {
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        .nostr12 {
            flex-direction: row;
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
        }
    }
}
</style>
