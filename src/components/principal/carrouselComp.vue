<template>
    <b-carousel fade id="carousel-1" :interval="8000" controls indicators
    label-next="" label-prev="" background=black>
        <b-carousel-slide img-src="/img/principal/carrusel/carrusel (0).jpg"></b-carousel-slide>
        <b-carousel-slide img-src="/img/principal/carrusel/carrusel (1).png"></b-carousel-slide>
        <b-carousel-slide img-src="/img/principal/carrusel/carrusel (2).png"></b-carousel-slide>
        <b-carousel-slide img-src="/img/principal/carrusel/carrusel (3).png"></b-carousel-slide>
        <b-carousel-slide img-src="/img/principal/carrusel/carrusel (4).png"></b-carousel-slide>
        <b-carousel-slide img-src="/img/principal/carrusel/carrusel (5).png"></b-carousel-slide>
        <b-carousel-slide img-src="/img/principal/carrusel/carrusel (6).png"></b-carousel-slide>
    </b-carousel>
</template>

<style lang="scss">
#carousel-1 {
    padding: 0px;
    // border-radius: 40px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    // img {
    //     border-radius: 30px;
    // }
}
</style>
