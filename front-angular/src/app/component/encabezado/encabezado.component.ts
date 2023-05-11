import { Component, OnInit } from '@angular/core';
import { InfportfolioService } from 'src/app/services/infportfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
  providers:[InfportfolioService]
})

export class EncabezadoComponent implements OnInit{
  miPortfolio:any = [];
  constructor(private datosPortfolio:InfportfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerInfPortfolio().subscribe(data =>{
      this.miPortfolio = data;     
    });
  }

}
