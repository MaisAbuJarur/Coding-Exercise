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
			this.offers = data.offers.Hotel;

			for (var i = 0; i < this.offers.length; i++) {

				this.offers[i].hotelUrls.hotelInfositeUrl=
				decodeURIComponent(this.offers[i].hotelUrls.hotelInfositeUrl)

				this.offers[i].hotelUrls.hotelSearchResultUrl = 
				decodeURIComponent(this.offers[i].hotelUrls.hotelSearchResultUrl)

			}
		});
		this.Math = Math;

	}

}  



