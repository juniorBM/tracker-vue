import type { IProjeto } from '@/intefaces/IProjeto.ts'
import type { Module } from 'vuex'
import type { Estado } from '@/store'
import {
  ADICIONA_PROJETO,
  ALTERA_PROJETO,
  DEFINIR_PROJETOS,
  EXCLUIR_PROJETO,
} from '@/store/tipoMutacoes.ts'
import {
  ALTERAR_PROJETO,
  CADASTRAR_PROJETO,
  OBTER_PROJETOS,
  REMOVER_PROJETO,
} from '@/store/tipoAcoes.ts'
import http from '@/http'

export interface EstadoProjeto {
  projetos: IProjeto
}

export const projeto: Module<EstadoProjeto, Estado> = {
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto: IProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      }
      state.projetos.push(projeto)
    },
    [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex((proj) => proj.id === projeto.id)
      state.projetos[index] = projeto
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter((projeto: IProjeto) => projeto.id != id)
    },
    [DEFINIR_PROJETOS](state, projetos: IProjeto[]) {
      state.projetos = projetos
    },
  },
  actions: {
    [OBTER_PROJETOS]({ commit }) {
      http.get('projetos').then((resposta) => commit(DEFINIR_PROJETOS, resposta.data))
    },
    [CADASTRAR_PROJETO](contexto, nomeDoProjeto: string) {
      return http.post('projetos', {
        nome: nomeDoProjeto,
      })
    },
    [ALTERAR_PROJETO](contexto, projeto: IProjeto) {
      console.log(projeto)
      return http.put(`projetos/${projeto.id}`, projeto)
    },
    [REMOVER_PROJETO]({ commit }, id: string) {
      console.log(id, 'aquii')
      return http.delete(`projetos/${id}`).then(() => commit(EXCLUIR_PROJETO, id))
    },
  },
}
