import { Agendamento } from "src/app/models/agendamento";

export interface Cliente {
  id?: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  criadoEm?: string;
  agendamentos?: Agendamento[];
}
