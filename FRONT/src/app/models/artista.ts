import { Agendamento } from "src/app/models/agendamento";

export interface Artista {
  id?: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  criadoEm?: string;
  agendamentos?: Agendamento[];
}
