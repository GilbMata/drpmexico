<template>
  <div class="rowdesc reveal">
    <b-img v-if="img" :src="require('@/../public/img/servicios' + img)">
    </b-img>
    <span v-html="msj"></span>
  </div>
</template>

<script>
export default {
  props: ['msj', 'img'],
};
</script>

<style lang="scss">
#descComp {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 0px;
  gap: 0px;
  /* gris claro */
  background: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 5;
  flex-grow: 0;
}

.rowdesc {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  // padding: 0px;
  // gap: 10px;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 20px;
  // text-align: justify;
  /* Inside auto layout */
  flex: none;
  order: 0;
  // align-self: stretch;
  flex-grow: 0;

  img {
    height: 8rem;
    width: auto;
  }
}

@media only screen and (min-width: 992px) {
  #descComp {
    //   display: flex;
    //   flex-wrap: nowrap;
    //   gap: 0px;
    padding: 100px;
    //   flex-direction: row;
    //   align-content: center;
    //   justify-content: center;
    //   align-items: center;
  }

  .rowdesc {
    // display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    font-weight: 500;
    font-size: 25px;
    line-height: 25px;
    text-align: left;
    gap: 20px;

    img {
      height: 12.5rem;
      // width: auto;
    }
  }
}
</style>
