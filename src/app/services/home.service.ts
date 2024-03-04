import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryScale } from 'chart.js';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  URL : string = environment.apiURL;

  constructor(private http: HttpClient) { }

  getGenProducts(): Observable<any> {
    console.log(this.URL+`/gen-products`)
    return this.http.get(this.URL+`/gen-products`);
  }

  getDesignAllType(): Observable<any> {
    return this.http.get(this.URL+`/design-type`);
  }

  getDesignTypefindbycat(categoryID: any): Observable<any> {
    return this.http.get(this.URL+`/design-type/find-by-cat/${categoryID}`);
  }

  getDressDesign(): Observable<any> {
    return this.http.get(this.URL+`/dress-design`);
  }

  getRoomDesign(): Observable<any> {
    return this.http.get(this.URL+`/room-design`);
  }

  getLookupColor(): Observable<any> {
    return this.http.get(this.URL+`/color`);
  }

  checkDesignRoom(obj:any): Observable<any> {
    return this.http.post(this.URL+`/room-design/check` , obj);
  }

  checkDesignDress(obj:any): Observable<any> {
    return this.http.post(this.URL+`/dress-design/check` , obj);
  }


}
