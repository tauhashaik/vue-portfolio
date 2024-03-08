<template>
   <body id="Body">

    <div data-aos="slide-up" id="Testimonial">
        <h6>
          <ul id="Labels">
            <li id="Lett">T</li>
            <li id="Lett">E</li>
            <li id="Lett">S</li>
            <li id="Lett">T</li>
            <li id="Lett">I</li>
            <li id="Lett">M</li>
            <li id="Lett">O</li>
            <li id="Lett">N</li>
            <li id="Lett">I</li> 
            <li id="Lett">A</li>
            <li id="Lett">L</li>
          </ul>
        </h6>

        <!-- <div class="containerT">
          <div class="card">
            <div class="img-container">
              <img src="" alt=""/>
            </div>
            <div class="card-details">
              <h2>...</h2>
              <p>...</p>
            </div>
          </div>

            <div class="card">
              <div class="img-container">
                <img src="" alt=""/>
              </div>
              <div class="card-details">
                <h2>...</h2>
                <p>...</p>
              </div>
            </div>

              <div class="card">
                <div class="img-container">
                  <img src="" alt=""/>
                </div>
                <div class="card-details">
                  <h2>...</h2>
                  <p>...</p>
                </div>
              </div>
        </div>
        
              <div class="containerM">
                <div class="card">
                  <div class="img-container">
                    <img src="" alt=""/>
                  </div>
                  <div class="card-details">
                    <h2>...</h2>
                    <p>...</p>
                  </div>
                </div>

              
                <div class="card">
                  <div class="img-container">
                    <img src="" alt=""/>
                  </div>
                  <div class="card-details">
                    <h2>...</h2>
                    <p>...</p>
                  </div>
                </div>

              
                <div class="card">
                  <div class="img-container">
                    <img src="" alt=""/>
                  </div>
                  <div class="card-details">
                    <h2>...</h2>
                    <h2>...</h2>
                    <p>...</p>
                  </div>
                </div>
              </div> -->

              <div data-aos="slide-up" v-if="!$store.state.Testimonials.length">
          <spinner/>
        </div>
          <div v-else>
            <div data-aos="slide-up" class="row row-cols-1 row-cols-md-3 g-4">
                <div v-for="Testimonial in $store.state.Testimonials" :key="Testimonial" class="containerT">
                    <div class="card">
                    <div class="img-container">
                     <img :src="Testimonial.image" alt="">
                    </div>
                <div class="card-details">
              <h2>{{ Testimonial.Testimonial }}</h2>
              <p>{{ Testimonial.Description }}</p>
            </div>
          </div>
        </div>
    </div>
      </div>

          </div>
              
   </body>
</template>
<script>
import spinner from '@/components/spinner.vue'
import aos from 'aos'
export default {
    
    computed:{
        fetchDataTestimonials(){
            this.$store.dispatch('fetchDataTestimonials')
        }
    },
    mounted(){
        this.fetchDataTestimonials,
        aos.init({
      duration:1500,
      once:false
    })
    },
    components:{
      spinner
    }
    
}
</script>

<style scoped>

#INTRO, #ABOUT, #WORK, #SKILLS, #PROJECT, #Testimonial, #Contact{
  padding-top: 100px !important;
}

#Body{
  background-image: url(https://i.postimg.cc/05XpMSwJ/6004798.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 143vh;
}

.containerT,.containerM{
  max-width:auto;
  margin:auto;
  display:flex;
  /* flex-wrap:wrap; */
  justify-content:space-around;
  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr); */
  gap:35px;
}


.card{
  position:relative;
  margin:20px;
  width:300px;
  height:400px;
  background: grey;
  transform-style:preserve-3d;
  transform:perspective(2000px);
  transition:1s;
  box-shadow:inset 100px 0 50px rgba(0,0,0,0.5);
}

.card:hover{
  z-index:1111;
  transform:perspective(2000px) rotate(-10deg);
  box-shadow:inset 20px 0 50px rgba(0,0,0,0.5);
}

.card .img-container{
  position:relative;
  width:100%;
  height:100%;
  border:1px solid #000;
  box-sizing:border-box;
  transform-origin:left;
  z-index:1;
  transition:1s;
}

.card .img-container img{
  position:absolute;
  left:0;
  top:0;
  height:100%;
  width:100%;
  object-fit:cover;
}

.card:hover .img-container{
  transform:rotateY(-135deg);
}

.card .card-details{
  position:absolute;
  left:0;
  top:0;
  box-sizing:border-box;
  padding:20px;
  color:#000;
}
.card .card-details:hover{
  color: black;
  text-shadow:0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4;
}

 .card .card-details h2{
  padding:0.5em;
  text-transform:uppercase;
  font-size:larger;
  color:rgb(0, 0, 0);
  width: auto ;
}
.card .card-details h2:hover {
  color: black;
  text-shadow:0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4;
}

.card .card-details p{
  margin:0;
  padding:0;
  line-height:20px;
  font-size: large;
  width: 250px;
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
</style>