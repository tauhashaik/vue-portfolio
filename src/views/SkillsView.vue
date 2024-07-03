<template>

<body id="Body">
    <div data-aos="slide-up" id="SKILLS">
      <h6>
        <ul id="Labels">
          <li id="Lett">S</li>
          <li id="Lett">K</li>
          <li id="Lett">I</li>
          <li id="Lett">L</li>
          <li id="Lett">L</li>
          <li id="Lett">S</li>
        </ul>
      </h6>
      <br>
      <br>
      <br>

      <!-- <div class="container text-center">
        <div class="row">
          <div class="col">
            <img id="Slogo" src="https://i.postimg.cc/G2gPPTHt/bootstrap-logo.png" alt="">
            <h2>BOOTSTRAP</h2>
            <h2>(BEGINNER)</h2>
          </div>

          <div class="col">
            <img id="Slogo" src="https://i.postimg.cc/59Gq6zhk/css3-logo.pngg" alt="">
            <h2>CSS</h2>
            <h2>(BEGINNER)</h2>
          </div>

          <div class="col">
            <img id="Slogo" src="https://i.postimg.cc/bNt0bJ8Y/html5-logo.png" alt="">
            <h2>HTML</h2>
            <h2>(BEGINNER)</h2>
          </div>

          <div class="col">
            <img id="Slogo" src="https://i.postimg.cc/HLXVJ2w0/Js-logo-512.png" alt="">
            <h2>JAVASCRIPT</h2>
            <h2>(BEGINNER)</h2>
          </div>

          <div class="col">
            <img id="Slogo" src="https://i.postimg.cc/sXJxmg0v/mysql-icon.png" alt="">
            <h2>MYSQL</h2>
            <h2>(BEGINNER)</h2>
          </div>

          <div class="col">
            <img id="Slogo" src="https://i.postimg.cc/tJCTMGLD/Vue-js-Logo-2.png" alt="">
            <h2>VUE.JS</h2>
            <h2>(BEGINNER)</h2>
          </div>

          <div class="col">
            <img id="Slogo" src="https://i.postimg.cc/LXShj1Dc/nodejs-icon.png" alt="">
            <h2>NODE.JS</h2>
            <h2>(BEGINNER)</h2>
          </div>
        </div> -->
    <div  class="row row-cols-1 row-cols-md-3 g-4"><div v-for="Skill in $store.state.Skills" :key="Skill" class="container text-center">
        <div data-aos="slide-up" class="row">
          <div class="col">
            <img  id="Slogo" :src="Skill.image" alt="">
            <h2>{{ Skill.Heading }}</h2>
          </div>
        </div>
      </div>
    </div>
      
</div>
</body>

    
</template>
<script>
import aos from 'aos'
export default {

  computed:{
        fetchDataSkills(){
            this.$store.dispatch('fetchDataSkills')
        }
    },
    mounted(){
        this.fetchDataSkills
        aos.init({
      duration:1500,
      once:false
    })
    }
    
}
</script>
<style scoped>

#Body{
  background-image: url(https://i.postimg.cc/05XpMSwJ/6004798.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 133vh;
  overflow: hidden;
}


#INTRO, #ABOUT, #WORK, #SKILLS, #PROJECT, #Testimonial, #Contact{
  padding-top: 60px !important;
}

#Labels {
    padding-top: 50px;
    list-style: none;
    color: black;
    -webkit-text-stroke: 1px rgb(255, 255, 255);
    /* text-stroke: 1px grey; */
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 10px;
    font-family: "Audiowide";
  }
  
  #Labels #Lett {
    display: inline-block;
    transition: transform 2s, opacity 2s, filter 2s;
  }
  
  #Labels:hover #Lett {
    transform: rotate(45deg) translateY(-200px);
    opacity: 0;
    filter: blur(20px);
  }
  
  #Labels #Lett:nth-child(1) {
    transition-delay: 0;
  }
  
  #Labels #Lett:nth-child(2) {
    transition-delay: 0.4s;
  }
  
  #Labels #Lett:nth-child(3) {
    transition-delay: 0.8s;
  }
  
  #Labels #Lett:nth-child(4) {
    transition-delay: 1.2s;
  }
  
  #Labels #Lett:nth-child(5) {
    transition-delay: 1.6s;
  }
  #Labels #Lett:nth-child(6) {
    transition-delay: 2.0s;
  }
  #Labels #Lett:nth-child(7) {
    transition-delay: 2.4s;
  }
  #Labels #Lett:nth-child(8) {
    transition-delay: 3.0s;
  }
  #Labels #Lett:nth-child(9) {
    transition-delay: 3.4s;
  }
  #Labels #Lett:nth-child(10) {
    transition-delay: 3.8s;
  }
  #Labels #Lett:nth-child(11) {
    transition-delay: 4.2s;
  }
  #Labels{
    text-align: center;
  }

  #Slogo{
  width: 250px;
  height: 150px;
  filter: grayscale(100%);
}
#Slogo:hover{
  filter: none;
}
.col{
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0,0,0,.1);
    backdrop-filter: blur(5.3px);
    width: 550px;
    box-shadow: 15px 15px 50px rgba(0,0,0,.2);
    color: #fff;
    background-color: grey transparent;
}
.col:hover{
  transform: scale(1.1);
  transition: 0.3s;
  z-index:1;
}
    


@media only screen and (max-width: 1080px) {
  #Body{
    height: 130vh;
  }
}

@media only screen and (max-width: 720px) {
  body{
    height: 230vh !important;
  }
  
  #Labels {
    font-size: 40px;
  }
  
  .col {
    width: 100%; 
  }

  #Slogo {
    width: 200px; 
    height: 120px;
  }
}

@media only screen and (max-width: 430px) {
  #Body {
     height: 210vh;
    }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  .col {
    width: 100%;
  }

  #Slogo {
    width: 150px;
    height: 90px;
  }
}
@media only screen and (max-width: 412px) {
  #Body {
     height: 210vh;
    }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  .col {
    width: 100%;
  }

  #Slogo {
    width: 150px;
    height: 90px;
  }
}
@media only screen and (max-width: 393px) {
  #Body {
     height: 210vh;
    }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  .col {
    width: 100%;
  }

  #Slogo {
    width: 150px;
    height: 90px;
  }
}
@media only screen and (max-width: 375px) {
  #Body {
     height: 210vh;
    }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  .col {
    width: 100%;
  }

  #Slogo {
    width: 150px;
    height: 90px;
  }
}

@media only screen and (max-width: 360px) {
  #Body {
     height: 210vh;
    }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  .col {
    width: 100%;
  }

  #Slogo {
    width: 150px;
    height: 90px;
  }
}

@media only screen and (max-width: 300px) {
  #Body {
     height: 210vh;
    }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  .col {
    width: 100%;
  }

  #Slogo {
    width: 150px;
    height: 90px;
  }
}
</style>