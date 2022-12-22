import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosHandlerComponent } from './usuarios-handler/usuarios-handler.component';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { PessoasHandlerComponent } from './pessoas-handler/pessoas-handler.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { FuncaoComponent } from './funcao/funcao.component';
import { NovoFuncaoComponent } from './novo-funcao/novo-funcao.component';
import { HomeComponent } from './home/home.component';
import { PapeisComponent } from './papeis/papeis.component';
import { FuncaoListComponent } from './funcao-list/funcao-list.component';
import { FuncaoHandlerComponent } from './funcao-handler/funcao-handler.component';
import { PapeisHandlerComponent } from './papeis-handler/papeis-handler.component';
import { PapeisListComponent } from './papeis-list/papeis-list.component';
import { NovoPapeisComponent } from './novo-papeis/novo-papeis.component';
import { PerfilUsuarioHandlerComponent } from './perfil-usuario-handler/perfil-usuario-handler.component';
import { PerfilUsuarioListComponent } from './perfil-usuario-list/perfil-usuario-list.component';
import { SetorComponent } from './setor/setor.component';
import { SetorHandlerComponent } from './setor-handler/setor-handler.component';
import { SetorListComponent } from './setor-list/setor-list.component';
import { NovoSetorComponent } from './novo-setor/novo-setor.component';
import { NovoPerfilUsuarioComponent } from './novo-perfil-usuario/novo-perfil-usuario.component';
import { TipoDeUsuarioComponent } from './tipo-de-usuario/tipo-de-usuario.component';
import { TipoDeUsuarioHandlerComponent } from './tipo-de-usuario-handler/tipo-de-usuario-handler.component';
import { TipoDeUsuarioListComponent } from './tipo-de-usuario-list/tipo-de-usuario-list.component';
import { NovoTipoDeUsuarioComponent } from './novo-tipo-de-usuario/novo-tipo-de-usuario.component';
import { SistemasHandlerComponent } from './sistemas-handler/sistemas-handler.component';
import { SistemasListComponent } from './sistemas-list/sistemas-list.component';
import { NovoSistemasComponent } from './novo-sistemas/novo-sistemas.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MobileMenuComponent } from './pages/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuariosListComponent,
    UsuariosHandlerComponent,
    PessoasListComponent,
    PessoasHandlerComponent,
    NovoUsuarioComponent,
    FuncaoComponent,
    NovoFuncaoComponent,
    HomeComponent,
    PapeisComponent,
    FuncaoListComponent,
    FuncaoHandlerComponent,
    PapeisHandlerComponent,
    PapeisListComponent,
    NovoPapeisComponent,
    PerfilUsuarioHandlerComponent,
    PerfilUsuarioListComponent,
    SetorComponent,
    SetorHandlerComponent,
    SetorListComponent,
    NovoSetorComponent,
    NovoPerfilUsuarioComponent,
    TipoDeUsuarioComponent,
    TipoDeUsuarioHandlerComponent,
    TipoDeUsuarioListComponent,
    NovoTipoDeUsuarioComponent,
    SistemasHandlerComponent,
    SistemasListComponent,
    NovoSistemasComponent,
    FooterComponent,
    HeaderComponent,
    LeftSidebarComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
