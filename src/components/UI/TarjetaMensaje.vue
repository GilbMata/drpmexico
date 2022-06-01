<template>
  <div id="tarjeta-mensaje">
    <span v-html="mensaje"></span>
  </div>
</template>

<script>
export default {
  props: {
    mensaje: String,
  },
};
</script>

<style lang="scss">
#tarjeta-mensaje {
  border-radius: 30px;
  margin: 0 auto;
  font-family: 'Century Gothic';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  background: #F7F8F8;
}
</style>
