import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GestionView from '../views/GestionView.vue'
import ProduitsView from '../views/ProduitsView.vue'
import ContactView from '../views/ContactView.vue'
import PanierView from '../views/PanierView.vue'
import RougeView from '../views/produit/RougeView.vue'
import RoseView from '../views/produit/RoseView.vue'
import BlancView from '../views/produit/BlancView.vue'
import PetillantView from '../views/produit/PetillantView.vue'
import DigestifView from '../views/produit/DigestifView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //PAGE D'ACCUEIL
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gestion',
      name: 'gestion',
      component: GestionView
    },
    {
      path: '/produits',
      name: 'produits',
      component: ProduitsView
    },
    {
      path: '/panier',
      name: 'panier',
      component: PanierView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    //PAGE PRODUIT INDIVIDUEL
    {
      path: '/rouge',
      name: 'rouge',
      component: RougeView
    },
    {
      path: '/rose',
      name: 'rose',
      component: RoseView
    },
    {
      path: '/blanc',
      name: 'blanc',
      component: BlancView
    },
    {
      path: '/petillant',
      name: 'petillant',
      component: PetillantView
    },
    {
      path: '/digestif',
      name: 'digestif',
      component: DigestifView
    }
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    */
  ]
})

export default router
