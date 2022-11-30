import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { ListarAgendamentoComponent } from "./components/pages/agendamento/listar-agendamento/listar-agendamentos.component";
import { CadastrarAgendamentoComponent } from "./components/pages/agendamento/cadastrar-agendamento/cadastrar-agendamento.component";
import { ListarArtistaComponent } from "./components/pages/artista/listar-artista/listar-artista.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastrarArtistaComponent } from "./components/pages/artista/cadastrar-artista/cadastrar-artista.component";
import { CadastrarClienteComponent } from "./components/pages/cliente/cadastrar-cliente/cadastrar-cliente.component";
import { ListarClienteComponent } from "./components/pages/cliente/listar-cliente/listar-cliente.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CadastrarArtistaComponent,
    ListarArtistaComponent,
    CadastrarAgendamentoComponent,
    ListarAgendamentoComponent,
    CadastrarClienteComponent,
    ListarClienteComponent,
  ],
  imports: [
    MatSnackBarModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
