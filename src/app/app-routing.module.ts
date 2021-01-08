import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaminhoesComponent } from './caminhoes/caminhoes.component';
import { ListaCaminhoesComponent } from './caminhoes/lista-caminhoes/lista-caminhoes.component';
const routes: Routes = [
  { path: '', redirectTo: '/caminhoes', pathMatch: 'full'},
  { path: 'caminhoes', component: ListaCaminhoesComponent },
  { path: 'caminhao-detalhe', component: CaminhoesComponent },
  { path: 'caminhao-detalhe/:id', component: CaminhoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


