import { Component, OnInit } from '@angular/core';
import { InfportfolioService } from 'src/app/services/infportfolio.service';

@Component({
  selector: 'app-skillylogros',
  templateUrl: './skillylogros.component.html',
  styleUrls: ['./skillylogros.component.css']
})
export class SkillylogrosComponent implements OnInit {
    infoPortfolio: any = [];
    constructor(private datosPortfolio:InfportfolioService) { }

    ngOnInit(): void {
      this.datosPortfolio.obtenerInfPortfolio().subscribe(data =>{
        this.infoPortfolio = data;     
      });
    }

}
