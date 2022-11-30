import { Cliente } from "./cliente";
import { Artista } from "./artista";

export interface Agendamento {
  id?: number;
  localDaTattoo: string;
  artista?: Artista;
  cliente?: Cliente;
  artistaId: number;
  clienteId: number;
  dataAgendamento: string;
  criadoEm?: string;
}
