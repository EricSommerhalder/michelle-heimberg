import { Component, Input, OnInit } from '@angular/core';
/* 
  Displays an image carousel
*/
interface carouselImages {
  src: string,
  alt: string,
  imageText: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImages[] = []; 
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 5000;

  selectedIndex = 0;
  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.nextImage();
    }, this.slideInterval);
  }
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  previousImage(): void {
    this.selectedIndex = this.selectedIndex === 0 ? this.images.length - 1 : this.selectedIndex - 1;
  }
  nextImage(): void {
    this.selectedIndex = this.selectedIndex === this.images.length -1 ? 0 : this.selectedIndex + 1;
  }

}
