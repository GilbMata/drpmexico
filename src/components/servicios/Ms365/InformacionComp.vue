<template>
  <div id="infoCard" class="reveal">
    <span v-html="varTxt" class="infoCardtxt1"></span>
    <span v-html="varTxt2" class="infoCardtxt2"></span>
  </div>
</template>

<script>
const varTxt =
  '<strong><span class="txtgreen">Protección</span></strong> total de Microsoft 365.';
// const varTxt2 = '<strong><span class="txtgreen">DRP</span>México Microsoft 365</strong> ';
const varTxt2 =
  'Protección automática de datos críticos de <strong>Microsoft 365</strong>, incluidos Exchange Online, SharePoint Online, OneDrive for Business y Microsoft Teams';

export default {
  data: () => ({
    varTxt,
    varTxt2,
  }),
};
</script>

<style lang="scss">
#info-ms365 {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 100px 100px;
  gap: 100px;

  /* gris claro */
  background: #f7f8f8;

  /* Inside auto layout */
  // align-self: stretch;
  flex: none;
  order: 4;
  flex-grow: 0;

  .info-ms365-2 {
    font-style: normal;
    font-size: 1.3rem;
    line-height: 29px;
    align-items: center;
    text-align: center;
    width: 50%;
  }

  .info-ms365-1 {
    font-style: normal;
    font-size: 1.8rem;
    line-height: 2.8rem;
    text-align: center;
    text-transform: uppercase;
    width: 30%;
  }
}
</style>
