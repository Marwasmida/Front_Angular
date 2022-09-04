import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';


const routes: Routes = [
  {path: '', redirectTo: '/addproduit', pathMatch: 'full'},
  { path: 'addproduit', component: AddProduitComponent },
  { path: 'listproduit', component: ListProduitComponent },
  { path: 'modifierproduit/:id', component: ModifierProduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
