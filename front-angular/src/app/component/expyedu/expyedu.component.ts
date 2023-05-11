import { Component, OnInit } from '@angular/core';
import { InfportfolioService } from 'src/app/services/infportfolio.service';

@Component({
  selector: 'app-expyedu',
  templateUrl: './expyedu.component.html',
  styleUrls: ['./expyedu.component.css'],
  providers: [InfportfolioService]  
})
export class ExpyeduComponent implements OnInit{
  
    miPortfolio: any;
    constructor(private datosPortfolio:InfportfolioService) { }
  
    ngOnInit(): void {
      this.datosPortfolio.obtenerInfPortfolio().subscribe(data =>{
        this.miPortfolio = data
        //console.log(this.miPortfolio);  
      });
    }

}
