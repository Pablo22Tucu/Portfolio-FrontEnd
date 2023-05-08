import { Component, OnInit } from '@angular/core';
import { InfportfolioService } from 'src/app/services/infportfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  miPortfolio:any;
  constructor(private datosPortfolio:InfportfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerInfPortfolio().subscribe(data =>{
    console.log(data);
    this.miPortfolio = data;     
    });
  }

}
