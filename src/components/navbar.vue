<template>
    <!-- <div>
        <nav id="navBar" class="navbar navbar-expand-lg bg-body-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="/"><img id="Logo" src="https://i.postimg.cc/bwcSk9Nd/Taha-Logo-2.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/resume">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/skills">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link  id="navText" class="nav-link active" to="/testimonial">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div> -->

    <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img id="Logo" src="https://i.ibb.co/Z2N7ShV/New-Logo.png"></a>
          <h1 id="navTitle" class="navHead active">Tauha-Hoosain-Shaik</h1>

          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img id="Logo" src="https://i.ibb.co/Z2N7ShV/New-Logo.png"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" aria-current="page" to="/" @click="scrollToIntro" >Home</router-link>
        </li>
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/" @click="scrollToAbout" >About</router-link>
        </li>
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/resume" @click="scrollToResume" >Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/skills" @click="scrollToSkills" >Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/projects" @click="scrollToProjects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link  id="navText" class="nav-link active" to="/testimonial" @click="scrollToTestimonials">Peer-Reviews</router-link>
        </li>
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/contact" @click="scrollToContact">Contact</router-link>
        </li>
      </ul>
            </div>
          </div>
        </div>
      </nav>


</template>
<script>
export default {

  methods:{
    scrollToContact(){
      document.getElementById("Testimonial").scrollIntoView({behaviour: 'smooth'});
    },
    scrollToProjects(){
      document.getElementById("SKILLS").scrollIntoView({behaviour: 'smooth'});
    },
    scrollToAbout(){
      document.getElementById("ABOUT").scrollIntoView({behaviour: 'smooth'});
    },
    scrollToIntro(){
      document.getElementById("INTRO").scrollIntoView({behaviour: 'smooth'});
    },
    scrollToResume(){
      document.getElementById("WORK").scrollIntoView({behaviour: 'smooth'});
    },
    scrollToSkills(){
      document.getElementById("SKILLS").scrollIntoView({behaviour: 'smooth'});
    },
    scrollToTestimonials(){
      document.getElementById("Testimonial").scrollIntoView({behaviour: 'smooth'});
    },
    
  },
    
}
</script>
<style>
#navBar{
    position: sticky;
    top: 0;
    z-index: 100;
    opacity: 0.9;
}

ul{
    text-decoration: none;
    list-style: none;
}

/* #navText{
    font-size: larger;
    color: white;
    margin-left: 75px;

}

#navText:hover{
    transform: scale(1.6);
    transition: 0.3s;
    text-decoration: underline aqua;
    color: black;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
} */

.container-fluid{
    background-color: black;
}

#Logo{
    border: solid rgb(0, 0, 0);
    border-radius: 3px;
    width: 70px;
    height: 70px;
}

#navTitle{
  color: black;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
}



.navbar-toggler-icon{
    background-color:grey;
    border-radius: 7px;
    border: solid rgb(255, 255, 255) 4px;
}
.navbar-toggler-icon:hover{
  border: solid #03e9f4;
}
#offcanvasNavbarLabel{
    background-image: url(https://i.postimg.cc/3Nk0CLv0/Right-Smoke-background.jpg);
}
.navbar-toggler-icon:hover{
    transform: scale(1.2);
}
.offcanvas-body{
    background-image: url(https://i.postimg.cc/3Nk0CLv0/Right-Smoke-background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.nav-item{
  display: block;
  position:relative;
  text-decoration:none;
  padding:5px;
  font-size:18px;
  font-family: sans-serif;
  color:#ffffff;
  text-transform:uppercase;
  transition:0.5s;  
}

.nav-item:hover{
  transform:scale(1.5);
  opacity:0.2;
  filter:blur(5px);
  color: black;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
}
.nav-item:hover{
  transform:scale(1.1);
  opacity:1;
  filter:blur(0);
  text-decoration:none;
  color:#fff;
}
.nav-item:before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:grey;
  transition:0.5s;
  transform-origin:right;
  transform:scaleX(0);
  z-index:-1;
}
.nav-item:hover:before{
  transition:transform 0.3s;
  transform-origin:left;
  transform:scaleX(1);
}


@media screen and (max-width: 300px) {
  .navHead {
    font-size: 20px; /* Adjusted font size for smaller screens */
  }

  .navbar-toggler-icon {
    font-size: 18px; /* Adjusted font size for smaller screens */
  }

  .nav-item {
    padding: 10px; /* Adjusted padding for smaller screens */
  }

  #Logo {
    width: 60px; /* Adjusted logo size for smaller screens */
    height: 60px; /* Adjusted logo size for smaller screens */
  }
  .container-fluid{
    width: 250px;
  }
}
</style>