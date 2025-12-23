import { createRouter, createWebHistory } from 'vue-router'
import Tarefas from '@/views/Tarefas.vue'
import Projetos from '@/views/Projetos.vue'
import Formulario from '@/views/Projetos/Formulario.vue'
import Lista from '@/views/Projetos/Lista.vue'

const routas = [
  {
    path: '/',
    name: 'tarefas',
    component: Tarefas,
  },
  {
    path: '/projetos',
    component: Projetos,
    children: [
      {
        path: '',
        name: 'projetos',
        component: Lista,
      },
      {
        path: 'novo',
        name: 'novo_projetos',
        component: Formulario,
      },
      {
        path: ':id',
        name: 'editar_projeto',
        component: Formulario,
        props: true,
      },
    ]
  }
]

const roteador = createRouter({
  history: createWebHistory(),
  routes: routas,
})

export default roteador
