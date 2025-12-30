<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import Cronometro from '@/components/Cronometro.vue'
import type ITarefa from '@/intefaces/ITarefa.ts'
import Box from '@/components/Box.vue'

export default defineComponent({
  name: 'Tarefa',
  components: { Box, Cronometro },
  emits: ['aoTarefaClicada'],
  props: {
    tarefa: { type: Object as PropType<ITarefa>, required: true },
  },
  methods: {
    tarefaClicada(): void {
      this.$emit('aoTarefaClicada', this.tarefa)
    },
  },
})
</script>

<template>
  <Box>
    <div class="columns clicavel" @click="tarefaClicada">
      <div class="column is-7">{{ tarefa.descricao || 'Tarefa sem descrição' }}</div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<style scoped>
.clicavel {
  cursor: pointer;
}
</style>
