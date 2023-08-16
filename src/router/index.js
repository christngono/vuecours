import { createRouter, createWebHistory } from 'vue-router'
import CourseView from '../views/CourseView.vue'
import ListCardView from '../views/ListCardView.vue'
import CourseView1 from '../views/CourseView1.vue'
import AccueilView from '../views/AccueilView.vue'
import AideView from '../views/AideView.vue'
import ChoixcoursView from '../views/ChoixcoursView.vue'
import AboutView from '../views/AboutView.vue'
import QuizView from '../views/QuizView.vue'
import OrientationView from '../views/OrientationView.vue'
import CoursemathView1 from '../views/CoursemathView1.vue'
import CourseVideoView from '../views/CourseVideoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
     {
      path: '/choixClasse',
      name: 'choixcours',
      component: ChoixcoursView
    },
    {
      path: '/listcourse',
      name: 'listcourse',
      component: ListCardView
    },
    {
      path: '/course',
      name: 'course',
      component: CourseView
    },
     {
      path: '/course1',
      name: 'course1',
      component: CourseView1
    },
     {
      path: '/aide',
      name: 'aide',
      component: AideView
    },
     {
      path: '/apropos',
      name: 'about',
      component: AboutView
    },
     {
      path: '/course/quiz',
      name: 'quiz',
      component: QuizView
    }
    ,
     {
      path: '/orientation',
      name: 'orientation',
      component: OrientationView
    },
    {
      path: '/mathcourse',
      name: 'mathcourse',
      component: CoursemathView1
    },
    {
      path: '/course/video',
      name: 'coursvideo',
      component: CourseVideoView
    }

  ]
})

export default router
