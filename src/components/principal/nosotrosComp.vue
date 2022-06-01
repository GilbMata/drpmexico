<template>
    <div class="nosotr">
        <div class="nostr1">
            <p class="nostr11">NOSOTROS</p>
            <p class="nostr12">Somos una empresa mexicana que cuenta con MÁS
                DE 10 AÑOS DE EXPERIENCIA, contamos con personal
                especializado en Supercomputo, proveemos a nuestros
                clientes las herramientas para proteger la información,
                brindamos soluciones simplificadas para garantizar la
                continuidad de negocio.
            </p>
        </div>
    </div>
</template>

<style>
txtg{
    color: green;
}
.nostr12{
    width: 600px;
    font-style: normal;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
}
.nostr11{
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}
.nostr1{
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
.nosotr{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 100px 0px 100px 100px;
    background: url("../../../public/img/principal/nosotrosimg.png");
    background-size: cover;
    border-radius: 40px;
    /* Inside auto layout */
    flex: none;
    order: 4;
    align-self: stretch;
    flex-grow: 1;
}
</style>
