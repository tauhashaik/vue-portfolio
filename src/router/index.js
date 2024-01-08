import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '../views/ResumeView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'
import TestimonialView from '../views/TestimonialView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },

  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  },

  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },

  {
    path: '/testimonial',
    name: 'testimonial',
    component: TestimonialView
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router