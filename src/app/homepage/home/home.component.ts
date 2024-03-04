import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  images: any[] = [];
  [x:string]:any;
  selectedProperty1: any;




products:any[] = [
  {
      title: 'Design 1',
      desc: "Redesign your room in seconds .",
      url:"../assets/images/properties/property-featured.jpg"
  },
  {
    title: 'Design 2',
    desc: "Redesign your room in seconds .",
    url:"../assets/images/properties/property-1.jpg"

},
{
  title: 'Design 3',
  desc: "Redesign your room in seconds .",
  url:"../assets/images/properties/property-featured.jpg"

},
{
  title: 'Design 4',
  desc: "Redesign your room in seconds .",
  url:"../assets/images/properties/property-1.jpg"

},
{
title: 'Design 5',
desc: "Redesign your room in seconds .",
url:"../assets/images/properties/property-featured.jpg"

}

]

  constructor(private http : HttpClient) {

    this.options = [
      {name: 'option 1', code: 'option1'},
      {name: 'option 2', code: 'option2'},
      {name: 'option 3', code: 'option3'},
      {name: 'option 4', code: 'option4'},
      {name: 'option 5', code: 'option5'},
  ];
}





  ngOnInit(): void {


  }




  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}





