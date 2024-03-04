import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-dress-design',
  templateUrl: './dress-design.component.html',
  styleUrls: ['./dress-design.component.css']
})
export class DressDesignComponent implements OnInit {
  [x:string]:any;
  index = 0;
  isLoadingLast : boolean = false;
  submitLoaded : boolean = false;
  selectedProperty1: any;
  products:any[] = [];
  @ViewChild('renderSection') renderSection: ElementRef | any;

  constructor(private dataApi : HomeService , private messageService: MessageService) {
    this.options = [
      {name: 'option 1', code: 'option1'},
      {name: 'option 2', code: 'option2'},
  ];


   }

  ngOnInit(): void {
  this.getDressDesign();
  this.getDesignType(); //tabs
  this.getLookupColor();

  this.mainForm = new FormGroup({
    color: new FormControl('',[Validators.required]),
    message: new FormControl('')
  });

  }

  handleChange(e:any){
    console.log(e);
    this.index = e.index;
    this.show = false;

  }

  getDesignType(){
    this.isLoading = true;
    // catID = 8 Room , catID = 9 Dress
    this.dataApi.getDesignTypefindbycat(9).subscribe(
      Response=> {
        console.log(Response)
        this.allTabs = Response;
        this.isLoading = false;
        // this.filteredArrayRoom =  Response.filter((Response: { parentId: number; }) => Response.parentId === 8);
        // console.log(this.filteredArrayRoom)
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      // bootbox.alert({title: "<span style='color:#a33;font-weight: 500; font-size: 16px'>" + "Warning message" + "</span>", message: "<span style='color:Black;font-weight: 500; font-size: 16px'>" + "No data found" + "</span>"});
      }

     );

}


getDressDesign(){
  this.isLoadingLast = true;
  this.dataApi.getRoomDesign().subscribe(
    Response=> {
      console.log(Response)
      this.products = Response;
      this.isLoadingLast = false;
    },
    (error) => {
      console.log(error);
      this.isLoadingLast = false;
    }

   );

}


getLookupColor(){
  this.dataApi.getLookupColor().subscribe(
    Response=> {
      console.log(Response)
      this.allColors = Response;
    },
    (error) => {
      console.log(error);
    }

   );

}

formSubmit(){
  console.log(this.mainForm.value);
  this.submitLoaded = true;
  // this.renderSection = document.getElementById('renderSection');
  // this.renderSection.scrollIntoView();

  var obj = {
    "prompt":"A beautiful ball gown in a light yellow color with a sweetheart neckline and a short train",
    "filePath": "https://res.cloudinary.com/highcoder/image/upload/v1688835040/ph6gytcz4gzsyf5s7p21.jpg",
    "tag":{ "style":17,"color":3}
 }
  this.dataApi.checkDesignDress(obj).subscribe(
    Response=> {
      console.log(Response);
      this.generateDesign = Response[0];
      this.show = true;
      this.submitLoaded = false;
      location.href="/#renderSection"
    },
    (error) => {
      console.log(error);
    }
  );
}



onUpload(event:any) {
  console.log(event.target.files)
  this.files = event.target.files[0];
  console.log( this.files)
  this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: 'Done successfully'});
}

}
