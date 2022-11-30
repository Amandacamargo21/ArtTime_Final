import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Artista } from "src/app/models/artista";

@Component({
  selector: "app-listar-artista",
  templateUrl: "./listar-artista.component.html",
  styleUrls: ["./listar-artista.component.css"],
})
export class ListarArtistaComponent implements OnInit {
  artistas!: Artista[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Configuração da requisição
    this.http
      .get<Artista[]>("https://localhost:5001/api/artista/listar")
      // Execução da requisição
      .subscribe({
        next: (artistas) => {
          this.artistas = artistas;
        },
      });
  }

  remover(id: number): void {
    this.http
      .delete<Artista>(`https://localhost:5001/api/artista/deletar/${id}`)
      .subscribe({
        next: (artista) => {
          this.ngOnInit();
        },
      });
  }
}
