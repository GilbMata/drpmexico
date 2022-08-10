<template>
  <div id="app">
    <title>DRxico</title>
    <b-container fluid>
      <menu-default></menu-default>
      <router-view />
      <footer-Comp></footer-Comp>
    </b-container>
  </div>
</template>

<script>
import 'animate.css';
import menuDefault from '@/components/MenuDefault.vue';
// import { bodyScript } from '@/assets/external';
import footerComp from '@/components/footerComp.vue';

const cwhite = '#FFFFFF';

export default {
  name: 'AnotherComponent',
  components: {
    menuDefault,
    footerComp,
  },
  data: () => ({
    cwhite,
  }),
  // created() {
  //   // external.headScript('/assets/script1.js');
  //   bodyScript('https://assets.freshservice.com/widget/freshwidget.js');
  // },
  // destroyed() {
  //   /* external.delScript('/assets/script1.js');
  //   external.delScript('/assets/script2.js'); */
  // },
};
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i += 1) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal);
</script>

<style>
.drpTitulo {
    /* font-style: normal; */
    font-weight: 700;
    font-size: 2rem;
  line-height: 28px;
  letter-spacing: 0.5px;
    text-transform: uppercase;
    /* line-height: 28px; */
    display: flex;
    align-items: center;
    justify-items: center;
    text-align: center;
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}
#banner-mensaje {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  padding: 150px 150px;
  /* gris claro */
  background: #F7F8F8;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
}

#app {
  font-family: 'Century Gothic';
}

.txtgreen {
  /* verde */
  color: #009845;
  /* font-weight: 700; */
}
.container-fluid {
    padding: 0px !important;
}
/* a{
  color: #009845 !important;
} */
.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}
@media only screen and (min-width: 992px) {
  .drpTitulo{
    font-size: 2rem;
  }
}
</style>
