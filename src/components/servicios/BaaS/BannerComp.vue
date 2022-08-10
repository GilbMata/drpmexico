<template>
  <b-container fluid sm class="bannerServ animate__fadeIn">
    <b-img  class="imgslide"
    :src="require('../../../../public/img/servicios/baas/baasicon.png')"
    alt="baas"></b-img>
  </b-container>
</template>

<style lang="scss">
.imgslide {
  /* This section calls the slideInFromLeft animation we defined above */
  // animation: 1s ease-in-out 0s 1 slide;
   animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 3s; /* don't forget to set a duration! */
}
.bannerServ{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background: url('../../../../public/img/servicios/baas/baas-fondo.png');
  background-size: cover;
  background-repeat: no-repeat;
  // border-radius: 0px 0px 30px 30px;
  // height: auto;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

img{
  width: auto;
  height: 500px;
  padding: 100px ;
  }
}
@keyframes slide {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideUp {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0);
  }
}

@media only screen and (min-width: 992px){
  #banner-baas{
    background-size: 100% 100%;
  img{
  width: auto;
  height: 400px;
  padding: 70px 0px 70px 170px;
  }
  }
}

</style>
