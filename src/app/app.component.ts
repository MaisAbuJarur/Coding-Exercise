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


	constructor(private Hotels: OffersService) {
		this.Hotels.getAllOffers().subscribe(data=>{
			this.offers = data.offers.Hotel;

			for (var i = 0; i < this.offers.length; i++) {

				this.offers[i].hotelUrls.hotelInfositeUrl=
				decodeURIComponent(this.offers[i].hotelUrls.hotelInfositeUrl)

				this.offers[i].hotelUrls.hotelSearchResultUrl = 
				decodeURIComponent(this.offers[i].hotelUrls.hotelSearchResultUrl)

			}
		});
		//I used Math.round for a cleaner looking star rating
		this.Math = Math;

	}

}  



