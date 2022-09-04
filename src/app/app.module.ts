import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddProduitComponent,
    ModifierProduitComponent,
    ListProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,

    HttpClientModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
