<template>
  <div class="principal">
    <b-img :src="require('../../../public/img/principal/laptop.png')" class="imgPrincipal" alt="">
    </b-img>
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
.imgPrincipal {
  width: 60vw;
  // height: 340px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.principaltxt {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 10px 0px;
  gap: 1px;
  // width: 50vw;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.txtone {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  color: #009349;
  // text-shadow: 1px 1px 1px white;
  -webkit-text-stroke: .5px white;
}

.simpli {
  font-weight: 700;
  font-size: 50px;
}

.expe {
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

.principal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 10px;
  gap: 10px;
  background: url("../../../public/img/principal/bg.png");
  // border-radius: 0px 0px 30px 30px;
  background-repeat: no-repeat;
  background-size: 100% 40%;
  //margin: 0 auto;
  /* Inside auto layout */
  flex: none;
  order: 0;
  // align-self: stretch;
  flex-grow: 0;

}

@media only screen and (min-width: 992px) {
  .principal {
    flex-direction: row;
    // //   padding: 1vw 1vw 1vw 1vw;
    justify-content: space-around;
    background-size: 100% 117%;
    // //   align-items: flex-start;
  }

  //   .expe {
  //     font-weight: 700;
  //     font-size: 30px;
  //     // color: white;
  //   }

  .simpli {
    // font-weight: 700;
    // font-size: 3rem;
  }

  .text {
    flex: 1;
    // font-weight: 700;
    font-size: 22px;
    line-height: 27px;
  }

  // //   }
  // }

  .principaltxt {
    padding: 2vw 1vw 1vw 1vw;
    width: 35vw;
    gap: 10px;
  }

  .imgPrincipal {
    width: 35vw;
  }
}
</style>
