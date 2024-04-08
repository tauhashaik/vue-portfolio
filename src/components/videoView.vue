<template>

    <div class="intro-video">

        <video autoplay muted loop src="../assets/3692830_SmokeExplosionLogo_final_746e54d4.mp4" type="mp4/video">
            <!-- <source src="../assets/3692830_SmokeExplosionLogo_final_746e54d4.mp4" type="mp4/video"> -->
        </video>
  </div>

</template>
<script>
export default {
   
}
</script>
<style scoped>

.intro-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 430px) {
  .intro-video {
    width: 400px;
    height: 100vh;
    object-fit: cover;
  }
  video {
    width: 100%;
    height: 100vh;
    object-fit:fill;
  }
}
@media only screen and (max-width: 412px) {
  .intro-video {
    width: 450px;
    height: 90vh;
    object-fit: cover;
  }
  video {
    width: 100%;
    height: 100vh;
    object-fit:fill;
  }
}
@media only screen and (max-width: 393px) {
  .intro-video {
    width: 400px;
    height: 100vh;
    object-fit: cover;
  }
  video {
    width: 100%;
    height: 100vh;
    object-fit:fill;
  }
}
@media only screen and (max-width: 375px) {
  .intro-video {
    width: 400px;
    height: 100vh;
    object-fit: cover;
  }
  video {
    width: 100%;
    height: 100vh;
    object-fit:fill;
  }
}
@media only screen and (max-width: 360px) {
  .intro-video {
    width: 400px;
    height: 100vh;
    object-fit: cover;
  }
  video {
    width: 100%;
    height: 100vh;
    object-fit:fill;
  }
}
@media only screen and (max-width: 300px) {
  .intro-video {
    width: 300px;
    height: 100vh;
  }
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
}
</style>