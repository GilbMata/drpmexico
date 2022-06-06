<template>
    <b-container class="cert">
        <p class="certxt">certificaciones</p>
        <div class="certimg">
            <b-img :src="require('../../../public/img/principal/certificaciones/certfi (1).png')"
                class="imgcert"></b-img>
            <b-img :src="require('../../../public/img/principal/certificaciones/certfi (2).png')"
                class="imgcert"></b-img>
            <b-img :src="require('../../../public/img/principal/certificaciones/certfi (3).png')"
                class="imgcert"></b-img>
            <b-img :src="require('../../../public/img/principal/certificaciones/certfi (4).png')"
                class="imgcert"></b-img>
        </div>
    </b-container>
</template>

<style>
.certimg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;
    /* width:100%; */
    /* Inside auto layout */
    flex: auto;
    order: 1;
    flex-grow: 0;
    flex-wrap: wrap;
}

.certxt {
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000000;
}

.cert {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 30px;
    background: #F7F8F8;
    /* Inside auto layout */
    flex: none;
    order: 6;
    flex-grow: 1;
}

.imgcert {
    width: 10rem;
}

@media only screen and (min-width: 992px) {
    .certimg{

    }
    .imgcert{
        width: 13rem;
    }
}
</style>
