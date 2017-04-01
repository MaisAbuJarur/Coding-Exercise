import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class OffersService {

  constructor(private http:Http) { }

getAllOffers() {
	return this.http.get('/api/offers').map(res=>res.json())
  }
}




