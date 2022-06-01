<template>
  <div id="tarjeta-mensajeVerde">
    <span v-html="mensaje"></span>
    <span v-html="mensaje2"></span>
  </div>
</template>

<script>
export default {
  props: {
    mensaje: String,
    mensaje2: String,
  },
};
</script>

<style>
#tarjeta-mensajeVerde{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 40px;
    padding: 10%;
}
</style>
