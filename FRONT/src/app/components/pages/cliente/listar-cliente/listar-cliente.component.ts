import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/models/cliente";

@Component({
  selector: "app-listar-cliente",
  templateUrl: "./listar-cliente.component.html",
  styleUrls: ["./listar-cliente.component.css"],
})
export class ListarClienteComponent implements OnInit {
  clientes!: Cliente[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Cliente[]>("https://localhost:5001/api/cliente/listar")
      .subscribe({
        next: (clientes) => {
          this.clientes = clientes;
        },
      });
  }

  remover(id: number): void {
    this.http
      .delete<Cliente>(`https://localhost:5001/api/cliente/deletar/${id}`)
      .subscribe({
        next: (cliente) => {
          this.ngOnInit();
        },
      });
  }
}
