import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module'

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { CaminhoesComponent } from './caminhoes/caminhoes.component';
import { ListaCaminhoesComponent } from './caminhoes/lista-caminhoes/lista-caminhoes.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CaminhoesComponent,
    ListaCaminhoesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
