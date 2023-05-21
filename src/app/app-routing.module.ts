import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { SesionComponent } from './component/sesion/sesion.component';

const routes: Routes = [
  { path: 'portfolio', component:PortfolioComponent },
  { path: 'sesion', component:SesionComponent },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
