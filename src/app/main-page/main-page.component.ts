import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*
  Hardcode images to display in the carousel with their alt texts. Follows format of interface carouselImages.
  */
  images = [
    {
      src: 'assets/img/carousel1.jpg',
      alt: 'Michelle mit Medallie',
      imageText: "Elegant"
    },
    {
      src: 'assets/img/carousel2.jpg',
      alt: 'Michelle im Sprung',
      imageText: "Präzis"
    },
    {
      src: 'assets/img/carousel3.jpg',
      alt: 'Michelle mit neuer Medallie',
      imageText: "Erfolgsorientiert"
    }
  ]
}
