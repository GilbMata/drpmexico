<template>
<div class="svideo reveal">
        <vue-plyr class="vuevideo">
            <video
                controls
                crossorigin
                playsinline
                data-poster= "../../../public/img/principal/DRPMexico.jpg"
            >
            <source
                size="320"
                src="../../../public/img/principal/porque_drpmusic.mp4"
                type="video/mp4"
            />
            <track
                default
                kind="captions"
                label="English captions"
                src=""
                srclang="en"
            />
        </video>
    </vue-plyr>
    </div>
</template>

<style lang="scss">
:root {
  --plyr-color-main: #1ac266;
}
.svideo {
    padding: 1.5rem;
    background: #F7F8F8;
}
.plyr--video{
    border-radius: 20px;
}
@media only screen and (min-width: 992px){
        .svideo {
    padding: 100px 250px;
        }
}
</style>
