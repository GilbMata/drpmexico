<template>
    <div class="svideo">
        <b-embed class="b-embed" type="video" aspect="1.5" controls poster="">
            <source src="../../../public/img/principal/POR QUÉ DRPMÉXICO.mp4" type="video/mp4">
        </b-embed>
    </div>
</template>

<style>
.svideo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50px 400px;
    background: #F7F8F8;
    /* Inside auto layout */
    flex: none;
    order: 5;
    flex-grow: 0;
}
.b-embed{
    width: 650px;
    height: 350px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}
</style>
