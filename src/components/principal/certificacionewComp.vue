P
<template>
  <div class="cert reveal">
    <p class="drpTitulo">certificaciones</p>
    <div class="certimg">
      <b-img :src="require('../../../public/img/principal/certificaciones/certfi (1).png')"
      class="imgcert"></b-img>
      <b-link href="https://www.veeam.com/es/find-partner.html?country=MEX&search=drp&page=1">

          <b-img :src="require('../../../public/img/principal/certificaciones/certfi (2).png')"
      class="imgcert"></b-img>
      </b-link>
        <b-link href="https://www.veeam.com/es/find-partner.html?country=MEX&search=drp&page=1">
      <img src="../../../public/img/principal/certificaciones/certfi (3).png"
      class="imgcert" alt="">
        </b-link>
      <b-img :src="require('../../../public/img/principal/certificaciones/certfi (4).png')"
      class="imgcert"></b-img>
    </div>
  </div>
</template>

<style lang="scss">
.certimg {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  /* padding: 0px; */
  gap: 5px;
  /* width:100%; */
  /* Inside auto layout */
  flex: auto;
  order: 1;
  flex-grow: 0;
  flex-wrap: wrap;
}

.certxt {
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  color: #000000;
}

.cert {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 2px;
  /* gap: 2rem; */
  background: #f7f8f8;
  /* Inside auto layout */
  flex: none;
  order: 6;
  flex-grow: 1;
}

.imgcert {
  width: 9rem;
}

@media only screen and (min-width: 992px) {
  .cert {
    gap: 10px;
    padding: 3rem;
  }

  .certimg {
    img {
      width: 200px;
    }
  }
}
</style>
