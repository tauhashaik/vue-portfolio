<template>

<body id="Body">

    <div id="PROJECT">
        <h6>
          <ul id="Labels">
            <li id="Lett">P</li>
            <li id="Lett">R</li>
            <li id="Lett">O</li>
            <li id="Lett">J</li>
            <li id="Lett">E</li>
            <li id="Lett">C</li>
            <li id="Lett">T</li>
            <li id="Lett">S</li>
          </ul>
        </h6>

        <!-- <div class="container">
          <div class="box">
            <span></span>
            <div class="content">
              <h2>...</h2>
              <p>...</p>
              <img id="projP" src="" alt="">
              <a id="links" href="https://github.com/tauhashaik/ecommerceProj.git" target="_blank">...</a><a id="links"  href="https://jolly-nasturtium-dad3bf.netlify.app" target="_blank">...</a>
            </div>
          </div>

          <div class="box">
            <span></span>
            <div class="content">
              <h2>...</h2>
              <p>...</p>
              <img id="projP" src="" alt="">
              <a id="links" href="https://github.com/tauhashaik/netflixProject.git" target="_blank">...</a><a id="links" href="https://extraordinary-jalebi-c3054b.netlify.app" target="_blank">...</a>
            </div>
          </div>

          <div class="box">
            <span></span>
            <div class="content">
              <h2>...</h2>
              <p>...</p>
              <img id="projP" src="" alt="">
              <a id="links" href="https://github.com/tauhashaik/keyboard.git" target="_blank">...</a><a id="links" href="https://glittering-kitten-f62054.netlify.app" target="_blank">...</a>
            </div>
          </div>

          <div class="box">
            <span></span>
            <div class="content">
              <h2>...</h2>
              <p>...</p>
              <img id="projP" src="" alt="">
              <a id="links" href="https://github.com/tauhashaik/calculator.git" target="_blank">...</a><a id="links" href="https://splendorous-kringle-35525d.netlify.app" target="_blank">...</a>
            </div>
          </div>

          <div class="box">
            <span></span>
            <div class="content">
              <h2>...</h2>
              <p>....</p>
              <img id="projP" src="" alt="">
              <a id="links" href="https://github.com/tauhashaik/mobiCare.git" target="_blank">...</a><a id="links" href="https://elaborate-taffy-ee02c9.netlify.app" target="_blank">...</a>
            </div>
          </div>

          <div class="box">
            <span></span>
            <div class="content">
              <h2>...</h2>
              <p>....</p>
              <img id="projP" src="" alt="">
              <a id="links" href="https://github.com/tauhashaik/mobiCare.git" target="_blank">...</a><a id="links" href="https://elaborate-taffy-ee02c9.netlify.app" target="_blank">...</a>
            </div>
          </div>
          
        </div> -->
        <div class="container"><div v-for="Project in $store.state.Projects" :key="Project" class="box">

            <span></span>
            <div class="content">
              <h2>{{Project.Project}}</h2>
              <p>{{ Project.Description }}</p>
              <img id="projP" :src="Project.image" alt="">
              <a id="links" :href="Project.Githublink" target="_blank">{{ Project.Githubbutton }}</a><a id="links" :href="Project.Netlifylink" target="_blank">{{ Project.NetlifyButton }}</a>
            </div>
          </div>

        </div>
        

    </div>

</body>

    
</template>
<script>
export default {
    computed:{
        fetchDataProjects(){
            this.$store.dispatch('fetchDataProjects')
        }
    },
    mounted(){
        this.fetchDataProjects
    }
    
}
</script>
<style scoped>

#INTRO, #ABOUT, #WORK, #SKILLS, #PROJECT, #Testimonial, #Contact{
  padding-top: 100px !important;
}

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

#Body{
  background-image: url(https://i.postimg.cc/05XpMSwJ/6004798.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 166vh;
}
.container
{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;
}

.container .box
{
  position: relative;
  width: 320px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 30px;
  transition: 0.5s;
}

.container .box::before
{
  content:' ';
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  text-decoration: none;
  background: #fff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
}

.container .box::after
{
  content:'';
  position: absolute;
  top: 0;
  left: 50;
  width: 50%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
  filter: blur(30px);
}

.container .box:hover:before,
.container .box:hover:after
{
  transform: skewX(0deg);
  left: 20px;
  width: calc(100% - 90px);
  
}

.container .box:nth-child(1):before,
.container .box:nth-child(1):after
{
  background: linear-gradient(315deg, #ffbc00, #ff0058)
}

.container .box:nth-child(2):before,
.container .box:nth-child(2):after
{
  background: linear-gradient(315deg, #03a9f4, #ff0058)
}

.container .box:nth-child(3):before,
.container .box:nth-child(3):after
{
  background: linear-gradient(315deg, #4dff03, #00d0ff)
}
.container .box:nth-child(4):before,
.container .box:nth-child(4):after
{
  background: linear-gradient(315deg, #ff0058, #ffbc00)
}
.container .box:nth-child(5):before,
.container .box:nth-child(5):after
{
  background: linear-gradient(315deg, #ff0058, #03a9fa)
}
.container .box:nth-child(6):before,
.container .box:nth-child(6):after
{
  background: linear-gradient(315deg, #4dff00, #fa03f6)
}

.container .box span
{
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  pointer-events: none;
}

.container .box span::before
{
  content:'';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  opacity: 0;
  transition: 0.5s; 
  animation: animate 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08)
}

.container .box:hover span::before
{
  top: -50px;
  left: 50px;
  width: 100px;
  height: 100px;
  opacity: 1;
}

.container .box span::after
{
  content:'';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  animation: animate 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  animation-delay: -1s;
}

.container .box:hover span:after
{
  bottom: -50px;
  right: 50px;
  width: 100px;
  height: 100px;
  opacity: 1;
}

@keyframes animate
{
  0%, 100%
  {
    transform: translateY(10px);
  }
  
  50%
  {
    transform: translate(-10px);
  }
}

.container .box .content
{
  position: relative;
  left: 0;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
  transform: 0.5s;
  color: #fff;
}

.container .box:hover .content
{
  left: -25px;
  padding: 60px 40px;
}

.container .box .content h2
{
  font-size: 2em;
  color: #fff;
  margin-bottom: 10px;
}

.container .box .content p
{
  font-size: 1.1em;
  margin-bottom: 10px;
  line-height: 1.4em;
}

.container .box .content a
{
  display: inline-block;
  font-size: 1.1em;
  color: #111;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  margin-top: 5px;
}

.container .box .content a:hover
{
  color: black;
  background: aqua;
  border: 1px solid rgba(255, 0, 88, 0.4);
  box-shadow: 0 1px 15px rgba(1, 1, 1, 0.2);
}
#links{
  margin: 20px;
}

#projP{
  width: 250px;
  height: 150px;
  /* background-color: grey transparent; */
  filter: opacity(0.7);
}

    
</style>