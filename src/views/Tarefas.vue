<script lang="ts">
import { defineComponent } from 'vue'
import Box from '@/components/Box.vue'
import Tarefa from '@/components/Tarefa.vue'
import Formulario from '@/components/Formulario.vue'
import type ITarefa from '@/intefaces/ITarefa.ts'

export default defineComponent({
  name: 'Tarefas',
  components: { Box, Tarefa, Formulario },
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
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Tarefa
      v-if="!listaEstaVazia"
      v-for="(tarefa, index) in tarefas"
      :tarefa="tarefa"
      :key="index"
    />
    <Box v-else> Você não está muito produtivo hoje :( </Box>
  </div>
</template>

<style scoped></style>
