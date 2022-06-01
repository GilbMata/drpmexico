<template>
<div class="principal">
        <b-img :src="require('../../../public/img/principal/laptop.png')"
        class="gpo0" alt="" ></b-img>
    <div class="principaltxt">
        <div class="txtone">
            <span class="simpli">Simplificamos</span>
            <span class="expe"> tu experiencia en la nube.</span>
        </div>
        <span class="text">
          Ofrecemos una forma simplificada de
          disfrutar de los servicios en la nube
          para aplicaciones y servicios de TI de
          nueva generación.
        </span>
        <!-- <div class="buttonPrueba">
            <b-button pill variant="success">30 días de prueba gratis</b-button>
        </div> -->
    </div>
</div>
</template>

<style lang="scss">
.gpo0{
    width: auto;
    // height: 340px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}
.principaltxt{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 10px;
    /* Inside auto layout */
    flex: auto;
    order: 1;
    flex-grow: 0;
}
.txtone{
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
    color:#009349;
    // text-shadow: 1px 1px 1px white;
    -webkit-text-stroke: .3px white;
}
.simpli {
    font-weight: 700;
    font-size: 50px;
}
.expe{
    font-weight: 500;
    font-size: 25px;
    // color: white;
}
.text {
  // display: flex;
  // flex-direction: column;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
}
.buttonPrueba {
    color: #009845;
    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;
}
.principal{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    padding: 2rem;
    gap: 0px;
    background: url("../../../public/img/principal/bg.png");
    // border-radius: 0px 0px 30px 30px;
    background-repeat: no-repeat;
    background-size: cover;
    //margin: 0 auto;
    /* Inside auto layout */
    flex: none;
    order: 0;
    // align-self: stretch;
    flex-grow: 0;
    img{
      width: 50vw;
      height: auto;
    }
}
@media only screen and (min-width: 992px) {
  .principal{
    flex-direction: row;
    padding: 4rem;
    justify-content: space-around;
    background-size: cover;
    align-items: flex-start;
    img{
      width: 40rem;
    }
    .expe{
      font-weight: 700;
      font-size: 30px;
    // color: white;
    }
    .simpli {
    font-weight: 700;
    font-size: 80px;
    .text{
      flex: 1;
      font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    }
}
  }
}
</style>
