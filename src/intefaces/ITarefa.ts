import type { IProjeto } from '@/intefaces/IProjeto.ts'

export default interface ITarefa {
  duracaoEmSegundos: number;
  descricao: string;
  projeto: IProjeto
}
