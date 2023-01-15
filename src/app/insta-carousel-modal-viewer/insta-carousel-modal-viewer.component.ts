import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Child, Post } from '../instagram/instagram.component';
@Component({
  selector: 'app-insta-carousel-modal-viewer',
  templateUrl: './insta-carousel-modal-viewer.component.html',
  styleUrls: ['./insta-carousel-modal-viewer.component.css']
})
export class InstaCarouselModalViewerComponent implements OnInit {
  @Input() data: Post;
  selectedIndex = 0;
  activeChild: Child;
  @ViewChild("videoPlayer", {static: false}) videoPlayer: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.activeChild = this.data['children'][this.selectedIndex];
  }
  previousChild(): void {
    this.selectedIndex = this.selectedIndex === 0 ? this.data.children.length - 1 : this.selectedIndex - 1;
    this.activeChild = this.data['children'][this.selectedIndex];
  }
  nextChild(): void {
    this.selectedIndex = this.selectedIndex === this.data.children.length -1 ? 0 : this.selectedIndex + 1;
    this.activeChild = this.data['children'][this.selectedIndex];
  }
  clicked(isVideo): void {
    if (isVideo) {
      this.videoPlayer.nativeElement.pause();
    }
    window.open("https://www.instagram.com/michelle_heimberg", "_blank");
  }

}
