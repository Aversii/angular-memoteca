import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { DeletarPensamentoComponent } from './components/pensamentos/deletar-pensamento/deletar-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'listarPensamento'
  },
  {
    path:'criarPensamento',
    component:CriarPensamentoComponent
  },
  {
    path:'listarPensamento',
    component:ListarPensamentoComponent
  },
  {
    path:'pensamentos/deletarPensamento/:id',
    component:DeletarPensamentoComponent
  },
  {
    path:'pensamentos/editarPensamento/:id',
    component:EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
