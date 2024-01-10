<template>

  <body id="Body">

    <div id="INTRO" class="intro">
        <div class="container">
          <!-- <img id="j" class="img-fluid" src="https://i.postimg.cc/LsHjr3Ph/Profile-Pic.jpg" alt=""> -->
        </div>
        <h6>
          <ul id="Labels">
            <li id="Lett">W</li>
            <li id="Lett">E</li>
            <li id="Lett">L</li>
            <li id="Lett">C</li>
            <li id="Lett">O</li>
            <li id="Lett">M</li>
            <li id="Lett">E</li>
          </ul>
        </h6>
        <h3>I AM AN ASPIRING FULL STACK DEVELOPER</h3>

        <div class="center-container">
          <a href="#WORK">
          <button class="center-button">MY WORK</button>
        </a>

        <a href="#Contact">
          <button class="center-button">CONTACT</button>
        </a> 

          <div class="icon-container">
          <a href="https://www.facebook.com/tauha.shaik.5/" target="_blank">
            <i id="icn" class="fa-brands fa-facebook fa-bounce fa-2xl"></i>
          </a>

          <a href="whatsapp://send?phone=+27715444231&text=Hello%20there!" target="_blank">
            <i id="icn" class="fa-brands fa-whatsapp fa-bounce fa-2xl"></i>
          </a>

          <a href="https://github.com/tauhashaik">
            <i id="icn" class="fa-brands fa-github fa-bounce fa-2xl"></i>
          </a>
          </div>   
        </div>
      </div>
    
  </body>

</template>
<script>
export default {
  
}
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

  .center-container {
    display:flex;
    justify-content: center;
    margin-top: 80px;
  }

  
  .center-button {
    color: white;
   margin: 10px;
   border-radius: 15px;
   border-color: white;
   background-color: black;
   font-family: "Audowide";
  }

  .center-button:hover{
    color: black;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
    transform: scale(1.1);
    transition: 0.3s;
  }

  #j{
    margin-top: 80px;
  width: 350px;
  height: 400px;
  /* display: flex; */
  justify-content: center;
  opacity: 0.7;
}

#Body{
  background-image: url(https://i.postimg.cc/05XpMSwJ/6004798.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 85vh;
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
  padding-top: 80px;
}
</style>