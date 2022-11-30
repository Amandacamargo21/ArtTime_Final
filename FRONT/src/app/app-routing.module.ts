import { ListarArtistaComponent } from "./components/pages/artista/listar-artista/listar-artista.component";
import { CadastrarArtistaComponent } from "./components/pages/artista/cadastrar-artista/cadastrar-artista.component";
import { CadastrarAgendamentoComponent } from "./components/pages/agendamento/cadastrar-agendamento/cadastrar-agendamento.component";
import { ListarAgendamentoComponent } from "./components/pages/agendamento/listar-agendamento/listar-agendamentos.component";
import { ListarClienteComponent } from "./components/pages/cliente/listar-cliente/listar-cliente.component";
import { CadastrarClienteComponent } from "./components/pages/cliente/cadastrar-cliente/cadastrar-cliente.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "pages/artista/cadastrar",
    component: CadastrarArtistaComponent,
  },

  {
    path: "pages/artista/cadastrar/:id",
    component: CadastrarArtistaComponent,
  },
  {
    path: "pages/artista/listar",
    component: ListarArtistaComponent,
  },
  {
    path: "pages/agendamento/cadastrar",
    component: CadastrarAgendamentoComponent,
  },
  {
    path: "pages/agendamento/listar",
    component: ListarAgendamentoComponent,
  },
  {
    path: "pages/cliente/cadastrar",
    component: CadastrarClienteComponent,
  },
  {
    path: "pages/cliente/listar",
    component: ListarClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
