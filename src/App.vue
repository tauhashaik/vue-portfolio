<template>
 <navbar/>
 <footer/>
 <router-view/>
</template>

<script>
import navbar from './components/navbar.vue';
import footer from './components/footer.vue';

export default{
  components:{
    navbar,
    footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
