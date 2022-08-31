<template>
  <div class="desc">
    <b-img
      v-if="img"
      class=""
      :src="require('../../../public/img/servicios/' + img)"
      alt=""
    ></b-img>
    <div class="txt" v-html="mensaje"></div>
  </div>
</template>

<script>
export default {
  props: {
    mensaje: String,
    img: String,
  },
};
</script>

<style lang="scss" scope>
.desc {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 10vw;
  margin: 50px 0;
  gap: 50px;
  h1 {
    color: green;
    font-weight: bold;
    font-size: 4rem;
    margin-bottom: 0;
  }
  span {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.8rem;
  }
  img {
    width: 25%;
  }
}
.txt {
  font-size: 1rem;
  text-align: justify;
}
@media screen and (max-width: 768px) {
  .desc {
    flex-wrap: wrap;
    justify-content: center;
    .txt {
      text-align: center;
    }
  }
}
</style>
