<template>
  <body id="Body">
    <videoView v-if="showIntro"></videoView>

    <div v-if="!showIntro">
      <div data-aos="slide-up, slide-down" id="INTRO" class="intro">
        <div class="container">
          <!-- <img id="j" class="img-fluid" src="https://i.postimg.cc/LsHjr3Ph/Profile-Pic.jpg" alt=""> -->
        </div>

        <center>
          <h2 id="Labels">
            <span style="--index: 0">W</span>
            <span style="--index: 1">E</span>
            <span style="--index: 2">L</span>
            <span style="--index: 3">C</span>
            <span style="--index: 4">O</span>
            <span style="--index: 5">M</span>
            <span style="--index: 6">E</span>
            <span style="--index: 7">!</span>
          </h2>
        </center>

        <div data-aos="fade-up">
          <h3>I AM AN ASPIRING FULL STACK DEVELOPER</h3>
          <div>

            <div data-aos="fade-up">

              <center>
                <div>
                  <a id="buttons" @click="scrollToProjects" class="fancy">
                    <span class="top-key"></span>
                    <span class="text">Projects</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                  </a>

                  <a id="buttons" @click="scrollToContact" class="fancy">
                    <span class="top-key"></span>
                    <span class="text">CONTACT</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                  </a>
                </div>
              </center>



              <div data-aos="fade-up" class="icon-container">

                <a href="linkedin" target="_blank">
                  <i class="fa-brands fa-linkedin-in fa-beat fa-2xl" style="color: black;"></i>
                </a>

                <a href="https://github.com/tauhashaik" target="_blank">
                  <i class="fa-brands fa-github fa-beat fa-2xl" style="color: black;"></i>
                </a>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </body>

</template>

<script>
import aos from 'aos';
import videoView from '../components/videoView.vue';

export default {
  components: {
    videoView
  },
  data() {
    return {
      showIntro: true,
      showHomepage: false
    };
  },
  methods: {
    loadHomepage() {
      aos.init({
        duration: 1300,
        once: false
      });
      this.showHomepage = true;
    },
    scrollToContact() {
      document.getElementById("Testimonial").scrollIntoView({ behavior: 'smooth' });
    },
    scrollToProjects() {
      document.getElementById("SKILLS").scrollIntoView({ behavior: 'smooth' });
    }
  },
  mounted() {
    aos.init({
      duration: 1300,
      once: false
    });
    setTimeout(() => {
      this.showIntro = false;
    }, 11000);
  }
};
</script>
<style scoped>

.fa-brands{
  color: #000;
}

/* .intro{
    margin-top: 20%;
    color: white;
    height: 600px;
}
.intro span{
    color: aqua;
} */

#Labels {
    list-style: none;
    color: black;
    -webkit-text-stroke: 1px grey;
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

  h2 {
  display: inline-flex;
  color: #ffffff;
  font-size: 130px;
  font-weight: 600;
  pointer-events: none;
}

h2 span {
  text-shadow: 0px 0px 2px #ffffff, 1px 1px 4px rgba(0, 0, 0, 0.7);
  animation: smoke 0.9s linear backwards;
  animation-delay: calc(0.1s * var(--index));
}

/* Let's create animation */
@keyframes smoke {
  0% {
    color: transparent;
    opacity: 0;
    text-shadow: 0px 0px 100px #ffffff;
  }
  90% {
    color: transparent;
    opacity: 0.9;
    text-shadow: 0px 0px 10px #ffffff;
  }
  100% {
    color: #ffffff;
    opacity: 1;
    text-shadow: 0px 0px 2px #ffffff, 1px 1px 4px rgba(0, 0, 0, 0.7);
  }
}

  h3{
    margin-top: 50px !important;
    color: black !important;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
    text-align: center;
    font-weight: bold;
    transition: 0.5s;
  }
  /* h3:hover{
    color: black !important;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
  } */

  #buttons{
    margin: 20px;
    margin-top: 50px;
  }

  i{
    margin-top: 80px;
  }

  .fancy {
 background-color: transparent;
 border: 2px solid #000;
 border-radius: 0;
 box-sizing: border-box;
 color: #fff;
 cursor: pointer;
 display: inline-block;
 float: none;
 font-weight: 700;
 letter-spacing: 0.05em;
 margin: 0;
 outline: none;
 overflow: visible;
 padding: 1.25em 2em;
 position: relative;
 text-align: center;
 text-decoration: none;
 text-transform: none;
 transition: all 0.3s ease-in-out;
 user-select: none;
 font-size: 13px;
}

.fancy::before {
 content: " ";
 width: 1.5625rem;
 height: 2px;
 background: black;
 top: 50%;
 left: 1.5em;
 position: absolute;
 transform: translateY(-50%);
 transform-origin: center;
 transition: background 0.3s linear, width 0.3s linear;
}

.fancy .text {
 font-size: 1.125em;
 line-height: 1.33333em;
 padding-left: 2em;
 display: block;
 text-align: left;
 transition: all 0.3s ease-in-out;
 text-transform: uppercase;
 text-decoration: none;
 color: black;
}

.fancy .top-key {
 height: 2px;
 width: 1.5625rem;
 top: -2px;
 left: 0.625rem;
 position: absolute;
 background: #e8e8e8;
 transition: width 0.5s ease-out, left 0.3s ease-out;
}

.fancy .bottom-key-1 {
 height: 2px;
 width: 1.5625rem;
 right: 1.875rem;
 bottom: -2px;
 position: absolute;
 background: #e8e8e8;
 transition: width 0.5s ease-out, right 0.3s ease-out;
}

.fancy .bottom-key-2 {
 height: 2px;
 width: 0.625rem;
 right: 0.625rem;
 bottom: -2px;
 position: absolute;
 background: #e8e8e8;
 transition: width 0.5s ease-out, right 0.3s ease-out;
}

.fancy:hover {
 color: white;
 background: black;
}

.fancy:hover::before {
 width: 0.9375rem;
 background: white;
}

.fancy:hover .text {
 color: white;
 padding-left: 1.5em;
}

.fancy:hover .top-key {
 left: -2px;
 width: 0px;
}

.fancy:hover .bottom-key-1,
 .fancy:hover .bottom-key-2 {
 right: 0;
 width: 0;
} 


  #j{
    margin-top: 50px;
  width: 300px;
  height: 300px;
  /* display: flex; */
  justify-content: center;
  opacity: 0.7;
  border-radius: 18px;
}

#Body{
  background-image: url(https://i.postimg.cc/05XpMSwJ/6004798.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 80vh;
  overflow: hidden;
}

.icon-container {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.center-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#INTRO, #ABOUT, #WORK, #SKILLS, #PROJECT, #Testimonial, #Contact{
  padding-top: 100px !important;
}

@media only screen and (max-width: 1080px) {
  #Body{
    height: 100vh;
  }
}

@media only screen and (min-width: 720px) {

  body{
    height: 200vh;
  }

}


@media only screen and (min-width: 300px) {
  #INTRO.intro {
    padding: 20px;
  }

  body{
    height: 200vh;
  }

  #Labels {
    font-size: 30px; 
    letter-spacing: 5px; 
  }

  h3 {
    font-size: 20px; 
    margin-top: 30px;
  }

  .fancy {
    font-size: 12px; 
    padding: 0.75em 1em; 
    margin: 10px 0;
  }

  .icon-container {
    flex-direction: row; 
    margin-top: 10px; 
  }

  #buttons{
    margin:10px
  }
}
</style>