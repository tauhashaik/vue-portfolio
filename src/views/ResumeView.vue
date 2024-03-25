<template lang="">
    <body id="Body">
        
    <div data-aos="slide-up" id="WORK">
        <h6>
            <ul id="Labels">
                <li id="Lett">R</li>
                <li id="Lett">E</li>
                <li id="Lett">S</li>
                <li id="Lett">U</li>
                <li id="Lett">M</li>
                <li id="Lett">E</li>
            </ul>
        </h6>
     </div>

<!-- <div class="container">
    <div v-for="Resume1 in $store.state.Resume1" :key="Resume1" class="col-12">
        <h1>{{Resume1.Title}}</h1>
    </div>


    <div v-for="Resume2 in $store.state.Resume2" :key="Resume2"  class="col-6">

    <h3>{{Resume2.Title}}</h3>
    <br>
    
    <div>
            <ul>
                <li> 
                    <h5>{{Resume2.Work}}</h5>
                    <p>{{Resume2.Description}}</p>
                    <p>{{Resume2.Years}}</p>
                </li>
            </ul>
        </div>
    </div>
</div>


    <div v-for="Resume3 in $store.state.Resume3" :key="Resume3" class="col-6">

        <h3>{{Resume3.Title}}</h3>

    <div>
        <ul>
            <li> 
                <h5>{{Resume3.Education}}</h5>
                <p>{{Resume3.Education2}}</p>
                <p>{{Resume3.Education3}}</p>
            </li>
        </ul>
    </div>

    </div> -->

    <div data-aos="slide-up" v-if="!$store.state.Resume1.length">
          <spinner/>
        </div>
        <div v-else>
          <div class="row">
    <div data-aos="slide-left" class="col">
      <div class="info">
        <div v-for="Resume2 in $store.state.Resume2" :key="Resume2" >

    <h3>{{Resume2.Title}}</h3>
    <br>
    
    <div>
            <ul>
                <li> 
                    <h5>{{Resume2.Work}}</h5>
                    <p>{{Resume2.Description}}</p>
                    <p>{{Resume2.Years}}</p>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>

<div data-aos="slide-right" class="col">
    <div class="info">
        
        <div v-for="Resume3 in $store.state.Resume3" :key="Resume3">

<h3>{{Resume3.Title}}</h3>

<div>
<ul>
    <li> 
        <h5>{{Resume3.Education}}</h5>
        <p>{{Resume3.Education2}}</p>
        <p>{{Resume3.Education3}}</p>
    </li>
</ul>
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

  components:{
      spinner
    },
    
    computed:{
        fetchDataResume1(){
            this.$store.dispatch('fetchDataResume1')
        },
        
        fetchDataResume2(){
            this.$store.dispatch('fetchDataResume2')
        },

        fetchDataResume3(){
            this.$store.dispatch('fetchDataResume3')
        }
        
    },
    mounted(){
        this.fetchDataResume1
        this.fetchDataResume2
        this.fetchDataResume3
        aos.init({
      duration:800,
      once:false
    })
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
  height: 98vh;
}  

h1{
    font-weight: 20;
    color: white !important;
    letter-spacing: 5px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.5s;
    color: black;
    text-shadow:0 0 3px #03e9f4,
                0 0 3px #03e9f4,
                0 0 3px #03e9f4,
                0 0 3px #03e9f4;
}

h3{
    font-weight: 20;
    color: white;
    letter-spacing: 5px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.5s;
    /* color: black; */
    text-shadow:0 0 5px #03e9f4,
                0 0 5px #03e9f4,
                0 0 5px #03e9f4,
                0 0 5px #03e9f4;
}
h5{
    font-weight: 20;
    color: white;
    letter-spacing: 5px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.5s;
    /* color: black; */
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
}

p{
    font-weight: 20;
    color: white;
    letter-spacing: 5px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.5s;
    /* color: black; */
    text-shadow:0 0 5px #000000,
                0 0 5px #000000,
                0 0 5px #000000,
                0 0 5px #000000;
}


/* Your existing styles */

@media only screen and (max-width: 720px) {

  #Labels {
    font-size: 40px;
  }

  h1, h3, h5, p {
    font-size: 16px;
  }
}

@media only screen and (max-width: 300px) {

  #Labels {
    font-size: 30px; 
  }

  h1, h3, h5, p {
    font-size: 14px;
  }
}
</style>