//Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';

import { Oef1Module } from './Oef1/oef1.module';
import { Oef2Module } from './Oef2/oef2.module';
import { Oef3Module } from './Oef3/oef3.module';

//PrimeNG
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar'

//Componenten
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Oef1PageComponent } from './oef1-page/oef1-page.component';
import { Oef2PageComponent } from './oef2-page/oef2-page.component';
import { Oef3PageComponent } from './Oef3-page/oef3-page.component';
import { MintaService } from './Oef3/minta3/minta.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    
    RouterModule.forRoot([
      {
        path: 'Home',
        component: HomePageComponent
      },
      {
        path: 'oef1',
        component: Oef1PageComponent
      },
      {
        path: 'oef2',
        component: Oef2PageComponent
      },
      {
        path: 'oef3',
        component: Oef3PageComponent
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "Home"
      },
      {
        path: "*",
        redirectTo: "Home"
      }],
      {
        useHash: true
      }),
    //PrimeNG modules
    PanelModule,
    ButtonModule,
    ToolbarModule,
    Oef1Module,
    Oef2Module,
    Oef3Module
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [
    MintaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
