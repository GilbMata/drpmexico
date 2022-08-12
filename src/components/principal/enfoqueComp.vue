<template>
  <div class="enfoque">
    <p class="drpTitulo">EL ENFOQUE DE DRPMÉXICO</p>
    <div class="caracteristicas">
      <div class="caracter">
        <b-img
          :src="
            require('../../../public/img/principal/enfoque/ICON_TECNOLOGA APROV.png')
          "
          href=""
          class=""
          alt="DRPMexico"
        ></b-img>
        <span class="titulo">TECNOLOGIA APROBADA </span>
        <span class="text"
          >Cuando el rendimiento y la seguridad son críticos, la tecnología
          subyacente importa. Por esta razón, DRPMéxico se creó desde cero con
          tecnología comprobada de VMware, Cisco y otros</span
        >
      </div>
      <div class="caracter">
        <b-img
          :src="
            require('../../../public/img/principal/enfoque/ICON_SEGURIDAD.png')
          "
          href=""
          class=""
          alt="DRPMexico"
        ></b-img>
        <span class="titulo">SEGURIDAD INTEGRADA</span>
        <span class="text"
          >El enfoque de seguridad garantiza que los datos estén protegidos en
          múltiples niveles, incluida la seguridad física, la seguridad lógica,
          el proceso y las certificaciones de terceros.</span
        >
      </div>
      <div class="caracter">
        <b-img
          :src="
            require('../../../public/img/principal/enfoque/CUMPLIMIENTO.png')
          "
          href=""
          class=""
          alt="DRPMexico"
        ></b-img>
        <span class="titulo">CUMPLIMIENTO GLOBAL</span>
        <span class="text"
          >Para apoyar a nuestros clientes, DRPMéxico mantiene un equipo
          dedicado de expertos para consultar sobre requisitos geográficos e
          industriales individuales, además de una variedad de certificaciones y
          atestaciones.</span
        >
      </div>
      <div class="caracter">
        <b-img
          :src="
            require('../../../public/img/principal/enfoque/ICON_SOPORTE.png')
          "
          href=""
          class=""
          alt="DRPMexico"
        ></b-img>
        <span class="titulo">SOPORTE 24/7</span>
        <span class="text"
          >Antes, durante y después de su implementación en la nube, DRPMéxico
          está listo con soporte 24 x 7 para garantizar que se cumplan las
          expectativas de su negocio y aplicación.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.enfoque {
  display: flex;
  flex-flow: column nowrap;
  //   justify-items: center;
  //   align-items: center;
  margin: 40px 0 40px 0;
}
.titulo_ {
  display: flex;
  font-size: 2rem;
  justify-content: center;
  margin-bottom: 10px;
}
.caracteristicas {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  justify-content: space-evenly;
  align-content: flex-start;
  align-items: flex-start;
  margin: 30px;
  //   gap: 30px;
  .caracter {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .titulo {
      color: green;
      font-weight: 700;
      margin-bottom: 20px;
      font-size: 0.9rem;
    }
    .text {
      font-size: 0.8rem;
    }
  }
  img {
    width: 8vw;
    margin-bottom: 20px;
  }
}
</style>
