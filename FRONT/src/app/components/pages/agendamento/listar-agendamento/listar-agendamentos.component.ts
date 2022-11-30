import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Agendamento } from "src/app/models/agendamento";

@Component({
  selector: "app-listar-agendamento",
  templateUrl: "./listar-agendamentos.component.html",
  styleUrls: ["./listar-agendamentos.component.css"],
})
export class ListarAgendamentoComponent implements OnInit {
  agendamentos!: Agendamento[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Configuração da requisição
    this.http
      .get<Agendamento[]>("https://localhost:5001/api/agendamento/listar")
      // Execução da requisição
      .subscribe({
        next: (agendamentos) => {
          this.agendamentos = agendamentos;
        },
      });
  }
}
