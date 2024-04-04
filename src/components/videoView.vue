<template>

    <div class="intro-video">

        <video autoplay controls loop src="../assets/3692830_SmokeExplosionLogo_final_746e54d4.mp4" type="mp4/video">
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
    
</style>