<template>
    <body id="Body">
        <div data-aos="slide-up" id="Contact">
          <h6>
            <ul id="Labels">
              <li id="Lett">C</li>
              <li id="Lett">O</li>
              <li id="Lett">N</li>
              <li id="Lett">T</li>
              <li id="Lett">A</li>
              <li id="Lett">C</li>
              <li id="Lett">T</li>
              <br>
              <li id="Lett">M</li>
              <li id="Lett">E</li>
            </ul>
          </h6>

          <div class="container">
  <div class="row">
    <div data-aos="slide-left" id="form" class="col">
            <form
                action="https://formspree.io/f/mbjvblqe"
                method="POST">
                <br>
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required>
                
                  <label for="Surname">Surname:</label>
                  <input type="text" id="surname " name="surname" required >
                
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>
                
                  <label for="message">Message:</label>
                  <textarea id="message" name="message" required></textarea>
                
                  <input type="submit" value="Submit">  

            </form>
    </div>

    <div data-aos="slide-up" class="col">
      <div class="info">
        <div class="address">
            <h4><i class="fa-solid fa-location-dot fa-beat fa-sm" style="color: #ff0000;"></i>  Location:</h4>
           <a href="https://maps.app.goo.gl/t8LEn9wcq1rA4kGg6" target="_blank"><p>Cape Town, Western Cape, Penlyn Estate</p></a> 
        </div>

        <div class="email">
            <h4><i class="fa-regular fa-envelope fa-beat fa-sm" style="color: #000000;"></i>  Email:</h4>
            <a href="mailto:hoosains19@gmail.com" target="_blank"><p>hoosains19@gmail.com</p></a>
        </div>

        <div class="phone">
            <h4><i class="fa-solid fa-mobile-screen-button fa-beat fa-sm" style="color: #ffffff;"></i>  Call:</h4>
            <a href="tel:+0715444231" target="_blank"><p>+27 71 5444 231</p></a>
        </div>
     </div>
     
    </div>

        <div data-aos="slide-right" class="col">
          <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12578.935345956343!2d18.50113426861868!3d-33.98142796458845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc435f4f599ccb%3A0x7c397b1543a5766d!2sPenlyn%20Estate%2C%20Cape%20Town%2C%207780!5e1!3m2!1sen!2sza!4v1712214940977!5m2!1sen!2sza" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  padding-top: 70px !important;
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
  
  #Body{
  background-image: url(https://i.postimg.cc/05XpMSwJ/6004798.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 115vh;
}

form {
  width: 300px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
  color: white;
  font-size: large;
}

label:hover{
  color: black;
  text-shadow:0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4;
}

input[type="text"],
input[type="email"],
textarea {
  color: black;
  width: 100%;
  padding: 8px;
  border: 3px solid #03e9f4;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

input[type="submit"] {
  background-color: grey;
  color: white;
  padding: 8px 105px;
  border: solid #03e9f4;
  border-radius: 4px;
  cursor: pointer;
  font-size: large;
}

input[type="submit"]:hover {
  background-color: #03e9f4;
  border-color: #000;
  color: #000;
  font-size: larger;
}

h4{
    color: black !important;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
}

p{
    margin-top: 50px !important;
    color: whitesmoke !important;
    text-align: center;
    font-weight: bold;
    transition: 0.5s;
}

#map{
    margin-top: 80px;
}

.info{
    margin-top: 80px;
}


@media only screen and (max-width: 884px) {
  
  #Body {
    height: 100vh;
  }

  #Labels {
    font-size: 40px;
  }
  
  form {
    width: 100%;
  }
  
  input[type="submit"] {
    padding: 8px 50px;
  }
  
  h4 {
    text-shadow: 0 0 2px #03e9f4;
  }
  
  p {
    margin-top: 30px !important;
  }
  
  #map {
    margin-top: 30px;
    /* margin-left: 80px */
  }
  .info {
    margin-top: 30px;
  }
}

@media only screen and (max-width: 720px) {
  
  #Body {
    height: 300vh;
  }

  #Labels {
    font-size: 40px;
  }
  
  form {
    width: 100%;
  }
  
  input[type="submit"] {
    padding: 8px 50px;
  }
  
  h4 {
    text-shadow: 0 0 2px #03e9f4;
  }
  
  p {
    margin-top: 30px !important;
  }
  
  #map {
    margin-top: 30px;
    /* margin-left: 80px */
  }
  .info {
    margin-top: 30px;
  }
}

@media only screen and (max-width: 430px) {

  #Body{
    height: 150vh;
  }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  input[type="submit"] {
    padding: 8px 30px;
    font-size: medium;
  }

  #map{
    width: 280px;
  }
}
@media only screen and (max-width: 412px) {

  #Body{
    height: 150vh;
  }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  input[type="submit"] {
    padding: 8px 30px;
    font-size: medium;
  }

  #map{
    width: 280px;
  }
}
@media only screen and (max-width: 393px) {

  #Body{
    height: 150vh;
  }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  input[type="submit"] {
    padding: 8px 30px;
    font-size: medium;
  }

  #map{
    width: 280px;
  }
}
@media only screen and (max-width: 375px) {

  #Body{
    height: 150vh;
  }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  input[type="submit"] {
    padding: 8px 30px;
    font-size: medium;
  }

  #map{
    width: 280px;
  }
}
@media only screen and (max-width: 360px) {

  #Body{
    height: 150vh;
  }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  input[type="submit"] {
    padding: 8px 30px;
    font-size: medium;
  }

  #map{
    width: 280px;
  }
}

@media only screen and (max-width: 300px) {
  
  #Body{
    height: 230vh;
  }

  #Labels {
    font-size: 30px;
  }

  [data-aos] {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }

  input[type="submit"] {
    padding: 8px 30px;
    font-size: medium;
  }

  #map{
    width: 280px;
  }
}
</style>