import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {Router} from '@angular/router';
import { ScrollServiceService } from '../scroll-service.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  constructor(private router: Router, private scroll: ScrollServiceService, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.scroll.elementId){
      setTimeout(() => {
        console.log("Scrolling to ", document.getElementById(this.scroll.elementId).offsetTop -88);
        window.scrollTo({
          top: document.getElementById(this.scroll.elementId).offsetTop -88 ,
          behavior: 'smooth'
        });
      }, 500);
    }

  }

  /*
  Hardcode images to display in the carousel with their alt texts. Follows format of interface carouselImages.
  */
  images = [
    {
      src: 'assets/img/carousel1.jpg',
      alt: 'Michelle mit Medallie',
      imageText: ""
    },
    {
      src: 'assets/img/carousel2.jpg',
      alt: 'Michelle im Sprung',
      imageText: ""
    },
    {
      src: 'assets/img/carousel3.jpg',
      alt: 'Michelle mit neuer Medallie',
      imageText: "Bild von Valentin Flauraud"
    }
  ]
}
