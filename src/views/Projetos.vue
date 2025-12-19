<script lang="ts">
import { defineComponent } from 'vue'
import type { IProjeto } from '@/intefaces/IProjeto.ts'

export default defineComponent({
  name: 'Projetos',
  data() {
    return {
      nomeDoProjeto: '',
      projetos: [] as IProjeto[],
    }
  },
  methods: {
    salvar() {
      const projeto: IProjeto = {
        id: new Date().toISOString(),
        nome: this.nomeDoProjeto,
      }

      this.projetos.push(projeto)
      this.nomeDoProjeto = ''
    },
  },
})
</script>

<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar" action="">
      <div class="field">
        <label for="" class="label">Nome do Projeto</label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
      </div>
      <div class="field">
        <button type="submit" class="button">Salvar</button>
      </div>
    </form>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{projeto.id}}</td>
          <td>{{ projeto.nome}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
