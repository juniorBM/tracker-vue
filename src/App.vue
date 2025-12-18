<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from '@/components/BarraLateral.vue'
import Formulario from '@/components/Formulario.vue'
import Tarefa from '@/components/Tarefa.vue'
import type ITarefa from '@/intefaces/ITarefa.ts'
import Box from '@/components/Box.vue'

export default defineComponent({
  components: { Box, Tarefa, Formulario, BarraLateral },
  data() {
    return {
      tarefas: [] as ITarefa[],
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    },
  },
})
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarters">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <Tarefa v-if="!listaEstaVazia" v-for="(tarefa, index) in tarefas" :tarefa="tarefa" :key="index" />
        <Box v-else> Você não está muito produtivo hoje :( </Box>
      </div>
    </div>
  </main>
</template>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>
