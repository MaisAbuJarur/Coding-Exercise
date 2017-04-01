import { Component } from '@angular/core';
import { OffersService } from './offers.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  offers : any;
  Math: any;

  constructor(private Get: OffersService) {
  this.Get.getAllOffers().subscribe(data=>{
  	console.log(data)
    this.offers = data.offers.Hotel;
    
  });
  this.Math = Math
   }
}


