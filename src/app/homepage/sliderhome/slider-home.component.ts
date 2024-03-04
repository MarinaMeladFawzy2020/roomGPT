import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderhomeComponent implements OnInit {
  [x:string]:any;


  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '960px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor(private router:Router) {
    this.token = sessionStorage.getItem('token')
    this.userName = sessionStorage.getItem('userName')
   }

   logout(){
    sessionStorage.clear();
    this.router.navigate(['/login'])

   }
  ngOnInit(): void {

    this.images =
    [
        {
            "previewImageSrc": "../assets/images/slides/slider1.jpg",
            "thumbnailImageSrc": "../assets/images/slides/slider1.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "previewImageSrc": "../assets/images/slides/slider2.jpg",
            "thumbnailImageSrc": "../assets/images/slides/slider2.jpg",
            "alt": "Description for Image 9",
            "title": "Title 9"
        },
        {
          "previewImageSrc": "../assets/images/slides/slider3.jpg",
          "thumbnailImageSrc": "../assets/images/slides/slider3.jpg",
          "alt": "Description for Image 1",
          "title": "Title 1"
      },
      {
          "previewImageSrc": "../assets/images/slides/slider4.jpg",
          "thumbnailImageSrc": "../assets/images/slides/slider4.jpg",
          "alt": "Description for Image 9",
          "title": "Title 9"
      }
    ]

  }

}
