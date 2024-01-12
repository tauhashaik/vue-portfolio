import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    Projects:[],
    Testimonials:[],
    Resume1:[],
    Resume2:[],
    Resume3:[],
    Skills:[]
  },
  getters: {
  },
  mutations: {
    setProjects(state,data){
      state.Projects=data
    },

    setTestimonials(state,data){
      state.Testimonials=data
    },

    setSkills(state,data){
      state.Skills=data
    },
    setResume1(state,data){
      state.Resume1=data
    },
    setResume2(state,data){
      state.Resume2=data
    },
    setResume3(state,data){
      state.Resume3=data
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

    fetchDataSkills(context){
      axios.get("https://tauhashaik.github.io/vue-jsonfile/")
      .then((s)=>{
        console.log(s.data.Skills);
        context.commit("setSkills",s.data.Skills);
      })
    },

    fetchDataResume1(context){
      axios.get("https://tauhashaik.github.io/vue-jsonfile/")
      .then((r1)=>{
        console.log(r1.data.Resume1);
        context.commit("setResume1",r1.data.Resume1);
      })
    },

    fetchDataResume2(context){
      axios.get("https://tauhashaik.github.io/vue-jsonfile/")
      .then((r2)=>{
        console.log(r2.data.Resume2);
        context.commit("setResume2",r2.data.Resume2);
      })
    },

    fetchDataResume3(context){
      axios.get("https://tauhashaik.github.io/vue-jsonfile/")
      .then((r3)=>{
        console.log(r3.data.Resume3);
        context.commit("setResume3",r3.data.Resume3);
      })
    }
  },
  modules: {
  }
})
