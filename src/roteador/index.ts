import { createRouter, createWebHistory } from 'vue-router'
import Tarefas from '@/views/Tarefas.vue'
import Projetos from '@/views/Projetos.vue'

const routas = [
  {
    path: '/',
    name: 'tarefas',
    component: Tarefas,
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: Projetos,
  }
]

const roteador = createRouter({
  history: createWebHistory(),
  routes: routas
})

export default roteador
