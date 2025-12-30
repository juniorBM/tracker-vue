import type { IProjeto } from '@/intefaces/IProjeto.ts'

export default interface ITarefa {
  id: string;
  duracaoEmSegundos: number;
  descricao: string;
  projeto: IProjeto
}
