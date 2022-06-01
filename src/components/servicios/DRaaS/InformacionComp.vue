<template>
  <div id="info">
    <span v-html="varTxt" class="infotxt1"></span>
    <span v-html="varTxt2" class="infotxt2"></span>
  </div>
</template>

<script>
const varTxt = '<strong class="txtgreen">Prepárate</strong> para lo <strong>impredecible</strong>';
const varTxt2 = '<strong><span class="txtgreen">DRP</span>México Backup</strong> ofrece la capacidad y la confianza para recuperarse lo más rápido y fácilmente posible <strong>cuando ocurre un desastre.</strong>';

export default {
  data: () => ({
    varTxt,
    varTxt2,
  }),
};
</script>

<style lang="scss">
.infotxt2{
  font-family: 'Century Gothic';
  font-style: normal;
  font-size: 1.3rem;
  line-height: 29px;
  align-items: center;
  text-align: center;
  width: 50%;
}
.infotxt1{
  font-family: 'Century Gothic';
  font-style: normal;
  font-size: 2rem;
  line-height: 2.8rem;
  text-align: center;
  text-transform: uppercase;
  width: 30%;
}
#info{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 100px 100px;
  gap: 100px;

  /* gris claro */
  background: #F7F8F8;

  /* Inside auto layout */
  align-self: stretch;
  flex: none;
  order: 4;
  flex-grow: 0;
}
</style>
