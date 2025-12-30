<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Cronometro from '@/components/Cronometro.vue'
import Temporizador from '@/components/Temporizador.vue'
import { key } from '@/store'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Formulario',
  emits: ['aoSalvarTarefa'],
  components: { Temporizador, Cronometro },
  // data() {
  //   return {
  //     descricao: '',
  //     idProjeto: '',
  //   }
  // },
  methods: {
    // finalizarTarefa(tempoDecorrido: string): void {
    //   this.$emit('aoSalvarTarefa', {
    //     duracaoEmSegundos: tempoDecorrido,
    //     descricao: this.descricao,
    //     projeto: this.projetos.find((proj) => proj.id == this.idProjeto),
    //   })
    //   this.descricao = ''
    // },
  },
  setup(props, { emit }) {
    const store = useStore(key)
    const descricao = ref('')
    const idProjeto = ref('')
    const projetos = computed(() => store.state.projeto.projetos)

    const finalizarTarefa = (tempoDecorrido: string): void => {
      emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: descricao.value,
        projeto: projetos.value.find((proj) => proj.id == idProjeto.value),
      })
      descricao.value = ''
    }

    return {
      projetos,
      descricao,
      idProjeto,
      finalizarTarefa,
    }
  },
})
</script>

<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-5" role="form" aria-labele="Formulário para criação de uma nova tarefa">
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
