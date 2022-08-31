<template>
  <div id="infoCard" class="reveal">
    <span v-html="varTxt" class="infoCardtxt1"></span>
    <span v-html="varTxt2" class="infoCardtxt2"></span>
  </div>
</template>

<script>
const varTxt =
  '<strong class="txtgreen">Prepárate</strong> para lo <strong>impredecible</strong>';
const varTxt2 =
  '<strong><span class="txtgreen">DRP</span>México Backup</strong> ofrece la capacidad y la confianza para recuperarse lo más rápido y fácilmente posible <strong>cuando ocurre un desastre.</strong>';

export default {
  data: () => ({
    varTxt,
    varTxt2,
  }),
};
</script>
