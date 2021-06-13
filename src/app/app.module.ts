import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ContactoComponent } from './components/contacto/contacto.component';

//carousel

import { CarouselModule } from 'ngx-owl-carousel-o';

//jquery




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegationComponent,
    QuienesSomosComponent,
    IntegrantesComponent,
    ShowsComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    CarouselModule ,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
