import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { SobremiComponent } from './component/sobremi/sobremi.component';
import { ExpyeduComponent } from './component/expyedu/expyedu.component';
import { SkillylogrosComponent } from './component/skillylogros/skillylogros.component';
import { PiepaginaComponent } from './component/piepagina/piepagina.component';
//import { InfportfolioService } from './services/infportfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToTopComponent } from './component/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobremiComponent,
    ExpyeduComponent,
    SkillylogrosComponent,
    PiepaginaComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
