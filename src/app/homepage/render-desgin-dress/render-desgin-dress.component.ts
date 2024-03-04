import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-render-desgin-dress',
  templateUrl: './render-desgin-dress.component.html',
  styleUrls: ['./render-desgin-dress.component.css']
})
export class RenderDesginDressComponent implements OnInit {

  [x:string]:any;
 isLoading :boolean = false;

  constructor(private dataApi : HomeService) {

  }

  ngOnInit() {

      this.sortOptions = [
          {label: 'High to Low', value: '!lastUpdatedDate'},
          {label: 'Low to High', value: 'lastUpdatedDate'}
      ];

      this.getGenProducts();
  }

  onSortChange(event: { value: any; }) {
      let value = event.value;
      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }



  getGenProducts(){
    this.isLoading = true;
    this.dataApi.getGenProducts().subscribe(
      Response=> {
        console.log(Response)
        this.products = Response;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      // bootbox.alert({title: "<span style='color:#a33;font-weight: 500; font-size: 16px'>" + "Warning message" + "</span>", message: "<span style='color:Black;font-weight: 500; font-size: 16px'>" + "No data found" + "</span>"});
      }

     );

}

}
