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
              <img id="j" src="https://i.postimg.cc/0ycdMb3P/Tauha-Profile-Pic.jpg" class="img-fluid rounded-5 my-auto mb-5" alt="">
            </div>
            <div data-aos="slide-left" id="abtBox" class="col-md-7 col-sm-12 my-auto text-center text-lg-start">
              <h3 id="abth3">Hi, I am Tauha Hoosain Shaik</h3>
                <p id="abtP" class="fs-5">
                  Dynamic and results-oriented Individual with a passion for web development and a keen interest in coding diverse applications. Leveraging a strong background in pragmatic and analytical thinking, I meticulously assess details and information to craft effective solutions. With a commanding yet approachable presence, I excel in leadership by listening attentively, evaluating options, and delegating responsibilities to optimise team performance and achieve desired outcomes.

                  Beyond the professional realm, I'm an avid sports enthusiast, particularly enjoying football and rugby, while finding solace and challenge in hiking adventures. Indoors, I indulge in gaming, cooking, and reading.
                  While I maintain a friendly and jovial demeanor, I prioritise professionalism and excellence in my work, balancing a serious approach with a personable touch.
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
  background-attachment: fixed;
  height: 100vh;
  overflow: hidden;
}

 #j{
  width: 550px;
  height: 400px;
  /* display: flex; */
  justify-content: center;
  margin-top: 50px !important;
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
  h3{
    color: black !important;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
  }
  /* h3:hover{
    color: black !important;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
  } */

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
    font-family: "Audiowide";
    border-right: 5px solid;
    width: 100%;
    /* white-space: nowrap; */
    overflow: hidden;
    /* animation: typing 5s steps(18), cursor .4s step-end infinite alternate; */
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
    /* color: white; */
    border: solid rgb(0, 0, 0) 2px;
    border-radius: 5px;
    background-color: grey transparent;
    backdrop-filter: blur(5.3px);
    /* text-shadow: grey; */
    font-weight: bolder;
    font-family: "Audiowide";
    transition: 0.5s;
    color: rgb(255, 255, 255) !important;
    text-shadow:0 0 5px #000000,
                0 0 5px #000000,
                0 0 5px #000000,
                0 0 5px #000000;
  }
  /* #abtP:hover{
    color:black;  
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
  } */
  
  @media only screen and (max-width: 1080px) {
    #Body {
      height: 150vh;
    }

    #j {
      width: 250px;
      height: 300px;
    }

    #abth3 {
      font-size: 2em;
    }

    #abtP {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 720px) {
    #Body {
      height: 250vh;
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
  
  @media only screen and (max-width: 430px) {

    #Body {
     height: 240vh;
    }
    #Labels {
      font-size: 30px;
      letter-spacing: 5px;
    }

    #abth3 {
      font-size: 1.6em;
    }

    #abtP {
      font-size: 12px;
    }

    [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }
  }
  @media only screen and (max-width: 412px) {

    #Body {
     height: 240vh;
    }
    #Labels {
      font-size: 30px;
      letter-spacing: 5px;
    }

    #abth3 {
      font-size: 1.6em;
    }

    #abtP {
      font-size: 12px;
    }

    [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }
  }
  @media only screen and (max-width: 393px) {

    #Body {
     height: 240vh;
    }
    #Labels {
      font-size: 30px;
      letter-spacing: 5px;
    }

    #abth3 {
      font-size: 1.6em;
    }

    #abtP {
      font-size: 12px;
    }

    [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }
  }
  @media only screen and (max-width: 375px) {

    #Body {
     height: 240vh;
    }
    #Labels {
      font-size: 30px;
      letter-spacing: 5px;
    }

    #abth3 {
      font-size: 1.6em;
    }

    #abtP {
      font-size: 12px;
    }

    [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }
  }
  @media only screen and (max-width: 360px) {

    #Body {
     height: 240vh;
    }
    #Labels {
      font-size: 30px;
      letter-spacing: 5px;
    }

    #abth3 {
      font-size: 1.6em;
    }

    #abtP {
      font-size: 12px;
    }

    [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }
  }

  @media only screen and (max-width: 300px) {
    
    #Body {
     height: 240vh;
    }
    #Labels {
      font-size: 30px;
      letter-spacing: 5px;
    }
    
    #abth3 {
      font-size: 1.6em;
    }
    
    #abtP {
      font-size: 12px;
    }
    
    [data-aos] {
      opacity: 1 !important;
      visibility: visible !important;
      transition: none !important;
      transform: none !important;
  }
  }
  
</style>
