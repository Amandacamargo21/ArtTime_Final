import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Cliente } from "src/app/models/cliente";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-cadastrar-cliente",
  templateUrl: "./cadastrar-cliente.component.html",
  styleUrls: ["./cadastrar-cliente.component.css"],
})
export class CadastrarClienteComponent implements OnInit {
  id!: number | undefined;
  nome!: string;
  cpf!: string;
  dataNascimento!: string;
  mensagem!: string;
  clientes!: Cliente[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { id } = params;
        if (id !== undefined) {
          this.http
            .get<Cliente[]>("https://localhost:5001/api/cliente/listar")
            .subscribe({
              next: (clientes) => {
                this.clientes = clientes;
              },
            });
        }
      },
    });
  }

  alterar(): void {
    let cliente: Cliente = {
      id: this.id,
      nome: this.nome,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
    };

    this.http
      .patch<Cliente>("https://localhost:5001/api/cliente/alterar", cliente)
      .subscribe({
        next: (cliente) => {
          this._snackBar.open("Cliente alterado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/cliente/listar"]);
        },
      });
  }

  cadastrar(): void {
    let cliente: Cliente = {
      nome: this.nome,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
    };

    this.http
      .post<Cliente>("https://localhost:5001/api/cliente/cadastrar", cliente)
      .subscribe({
        next: (cliente) => {
          this._snackBar.open("Cliente cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/cliente/listar"]);
        },
        error: (error) => {
          if (error.status === 400) {
            this.mensagem = "Algum erro de validação aconteceu :/";
          } else if (error.status === 0) {
            this.mensagem = "A sua API não está rodando :/";
          }
        },
      });
  }
}
