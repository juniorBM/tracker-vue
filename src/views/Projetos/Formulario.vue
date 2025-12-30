<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import type { IProjeto } from '@/intefaces/IProjeto.ts'
import { useStore } from '@/store'
import { ADICIONA_PROJETO, ALTERA_PROJETO } from '@/store/tipoMutacoes.ts'
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from '@/store/tipoAcoes.ts'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Formulario',
  props: {
    id: { type: String },
  },
  // mounted() {
  //   if (this.id) {
  //     const projeto = this.store.state.projeto.projetos.find((proj: IProjeto) => proj.id == this.id)
  //     this.nomeDoProjeto = projeto?.nome || ''
  //   }
  // },
  // data() {
  //   return {
  //     nomeDoProjeto: '',
  //   }
  // },
  setup(props) {
    const router = useRouter()
    const store = useStore()
    const nomeDoProjeto = ref('')

    if (props.id) {
      const projeto = store.state.projeto.projetos.find((proj: IProjeto) => proj.id == props.id)
      nomeDoProjeto.value = projeto?.nome || ''
    }

    const lidarComSucesso = () => {
      nomeDoProjeto.value = ''
      router.push('/projetos')
    }

    const salvar = () => {
      console.log('salver')
      if (props.id) {
        console.log('akiiiiii')
        store.dispatch(ALTERAR_PROJETO, { id: props.id, nome: nomeDoProjeto.value }).then(() => {
          lidarComSucesso()
        })
      } else {
        store.dispatch(CADASTRAR_PROJETO, nomeDoProjeto.value).then(() => {
          lidarComSucesso()
        })
      }
    }

    return {
      nomeDoProjeto,
      salvar,
    }
  },
})
</script>

<template>
  <section>
    <!--    <h1 class="title">Projetos</h1>-->
    <form @submit.prevent="salvar" action="">
      <div class="field">
        <label for="" class="label">Nome do Projeto</label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
      </div>
      <div class="field">
        <button type="submit" class="button">Salvar</button>
      </div>
    </form>
  </section>
</template>
