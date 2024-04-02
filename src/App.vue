<template>
 <!-- <navbar/> -->
  <HomeView/>
 <AboutView/>
 <ResumeView/>
 <SkillsView/>
 <ProjectsView/>
 <TestimonialView/>
 <ContactView/>
 <!-- <router-view/> -->
 <footer/>
 
</template>

<script>
import navbar from './components/navbar.vue';
import footer from './components/footer.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ResumeView from './views/ResumeView.vue';
import SkillsView from './views/SkillsView.vue';
import ProjectsView from './views/ProjectsView.vue';
import TestimonialView from './views/TestimonialView.vue';
import ContactView from './views/ContactView.vue';

export default{
  
  components:{
    navbar,
    footer,
    HomeView,
    AboutView,
    ResumeView,
    SkillsView,
    ProjectsView,
    TestimonialView,
    ContactView

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
