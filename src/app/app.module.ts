import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { SobremiComponent } from './component/sobremi/sobremi.component';
import { ExpyeduComponent } from './component/expyedu/expyedu.component';
import { SkillylogrosComponent } from './component/skillylogros/skillylogros.component';
import { PiepaginaComponent } from './component/piepagina/piepagina.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ScrollToTopComponent } from './component/scroll-to-top/scroll-to-top.component';
import { SesionComponent } from './component/sesion/sesion.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfportfolioService } from './services/infportfolio.service';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobremiComponent,
    ExpyeduComponent,
    SkillylogrosComponent,
    PiepaginaComponent,
    ScrollToTopComponent,
    SesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [InfportfolioService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
