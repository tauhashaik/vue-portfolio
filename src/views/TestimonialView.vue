<template>
   <body id="Body">

    <div id="Testimonial">
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

              <div class="row row-cols-1 row-cols-md-3 g-4">
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

   </body>
</template>
<script>
export default {
    
    computed:{
        fetchDataTestimonials(){
            this.$store.dispatch('fetchDataTestimonials')
        }
    },
    mounted(){
        this.fetchDataTestimonials
    }
    
}
</script>

<style scoped>

#Body{
  background-image: url(https://i.postimg.cc/05XpMSwJ/6004798.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 132vh;
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
</style>