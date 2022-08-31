<template>
  <div id="app">
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
import footerComp from '@/components/footComp.vue';

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
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.btndrp {
  font-weight: 700 !important;
  line-height: 1 !important;
}
#banner-mensaje {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  padding: 150px 150px;
  /* gris claro */
  background: #f7f8f8;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
}

#app {
  font-family: 'Century Gothic';
  min-width: 350px;
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
.reveal {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveal.active {
  transform: translateY(0);
  opacity: 1;
}
@media only screen and (min-width: 992px) {
  .drpTitulo {
    /* font-size: 2rem; */
  }
}
</style>
