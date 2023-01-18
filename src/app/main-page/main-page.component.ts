import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  constructor(private router: Router) { }
  @ViewChild('about-me', { static: true }) aboutMe: ElementRef;
  @ViewChild('sponsoring', { static: true }) sponsoring: ElementRef
  ngOnInit(): void {
    console.log(this.aboutMe);
    console.log(this.sponsoring);
  }
  ngAfterContentInit() {
    console.log(this.aboutMe);
    console.log(this.sponsoring);
    setTimeout(() => {
      if (this.router.url.split('#')[1] === 'about-me') {
        this.aboutMe.nativeElement.scrollIntoView();
      }
      if (this.router.url.split('#')[1] === 'sponsoring') {
        this.sponsoring.nativeElement.scrollIntoView();
      }
    });
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
