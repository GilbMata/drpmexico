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
.certimg{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 60px;
    /* width:100%; */
    /* Inside auto layout */
    flex: auto;
    order: 1;
    flex-grow: 0;
    flex-wrap: wrap;
}
.certxt{
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #000000;
}

.cert{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 160px;
    gap: 60px;
    background: #F7F8F8;
    /* Inside auto layout */
    flex: none;
    order: 6;
    flex-grow: 1;
}
.imgcert{
    width:15%;
}
</style>
