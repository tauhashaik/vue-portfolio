<template>
<body id="Body">
  <div data-aos="slide-up" id="ABOUT">
        <h6>
          <ul id="Labels">
            <li id="Lett">A</li>
            <li id="Lett">B</li>
            <li id="Lett">O</li>
            <li id="Lett">U</li>
            <li id="Lett">T</li>
            <br>
            <li id="Lett">ME</li>
          </ul>
        </h6>
        <div data-aos="slide-right" class="container">
          <div class="row text-center">
            <div class="col-md-5 order-first">
              <img id="j" src="https://i.postimg.cc/LsHjr3Ph/Profile-Pic.jpg" class="img-fluid rounded-5 my-auto mb-5" alt="">
            </div>
            <div data-aos="slide-left" id="abtBox" class="col-md-7 col-sm-12 my-auto text-center text-lg-start">
              <h3 id="abth3">Hi, I am <span class="border-bottom border-white border-2">Tauha Hoosain Shaik</span></h3>
                <p id="abtP" class="fs-5">
                I am a hardworking individual that strives for constant improvement through diligence and the drive to learn.
                Patience and perseverence is a large part of my work ethic as well as the ability to self reflect to progress toward success.
                I am conscience of the importance in human relations and the need for emotional intellegence, which is why I pride myself
                on being well equipped to handle the communications aspect. This has given me the ability to navigate and facilitate working
                with groups of people and assume leadership roles when necessary.
              </p>
            </div>
              
            </div>
          </div>
  </div>
</body>


</template>
<script>
import aos from 'aos'
export default {
  mounted(){
    aos.init({
      duration:1500,
      once:false
    })

  }
}
</script>
<style scoped>

#INTRO, #ABOUT, #WORK, #SKILLS, #PROJECT, #Testimonial, #Contact{
  padding-top: 90px !important;
}

#Body{
  background-image: url(https://i.postimg.cc/05XpMSwJ/6004798.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh !important;
}

 #j{
  width: 350px;
  height: 400px;
  /* display: flex; */
  justify-content: center;
}

#Labels {
  padding-top: 50px;
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
  h3{
    margin-top: 50px !important;
    color: whitesmoke !important;
    text-align: center;
    font-weight: bold;
    transition: 0.5s;
  }
  h3:hover{
    color: black !important;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
  }

  #who{
    font-size: 30px;
    display: flex;
    justify-content: center;
    color: whitesmoke;
    transition: 0.5s;
  }

  #who:hover{
    color: black;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
  }
  #abth3{
    /* font-size: 5em; */
    /* letter-spacing: 10px; */
    font-family: monospace;
    border-right: 5px solid;
    width: 100%;
    /* white-space: nowrap; */
    overflow: hidden;
    animation: typing 5s steps(18), cursor .4s step-end infinite alternate;
    color: antiquewhite;
}
/* @keyframes cursor{
    50% { border-color: transparent;}
}
@keyframes typing {
    0% {
      width: 0;
    }
    10% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  } */

  #abtP{
    color: white;
    border: solid black 2px;
    border-radius: 5px;
    background-color: grey transparent;
    text-shadow: grey;
    font-weight: bolder;
    transition: 0.5s;
  }
  #abtP:hover{
    color:black;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
  }
  
  @media only screen and (max-width: 720px) {
    #Body {
      background-size: contain;
    }

    #j {
      width: 100%;
      height: auto;
    }

    #abtBox {
      text-align: center;
    }

    #abth3 {
      font-size: 1.5em;
    }

    #abtP {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 300px) {
    #Labels {
      font-size: 30px;
      letter-spacing: 5px;
    }

    #abth3 {
      font-size: 1.2em;
    }

    #abtP {
      font-size: 12px;
    }
  }
</style>
