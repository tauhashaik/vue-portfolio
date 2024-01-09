<template>
    <div>
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
          <router-link  id="navText" class="nav-link active" to="/testimonials">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>
<script>
export default {
    
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

#navText{
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
}

.container-fluid{
    background-color: black;
}

#Logo{
    border: solid rgb(0, 0, 0);
    border-radius: 3px;
    width: 70px;
    height: 70px;
}
    
</style>