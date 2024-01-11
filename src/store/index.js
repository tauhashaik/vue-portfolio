import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    Projects:[],
    Testimonials:[]
  },
  getters: {
  },
  mutations: {
    setProjects(state,data){
      state.Projects=data
    },

    setTestimonials(state,data){
      state.Testimonials=data
    }
  },
  actions: {
    fetchDataProjects(context){
      axios.get("https://tauhashaik.github.io/vue-jsonfile/")
      .then((p)=>{
        console.log(p.data.Projects);
        context.commit("setProjects",p.data.Projects);
      })
    },

    fetchDataTestimonials(context){
      axios.get("https://tauhashaik.github.io/vue-jsonfile/")
      .then((t)=>{
        console.log(t.data.Testimonials);
        context.commit("setTestimonials",t.data.Testimonials);
      })
    },
  },
  modules: {
  }
})
