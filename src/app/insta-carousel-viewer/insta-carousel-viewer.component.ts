import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Child, Post } from '../instagram/instagram.component';
@Component({
  selector: 'app-insta-carousel-viewer',
  templateUrl: './insta-carousel-viewer.component.html',
  styleUrls: ['./insta-carousel-viewer.component.css']
})
export class InstaCarouselViewerComponent implements OnInit {
  show = false;
  @Input() data: Post;
  @ViewChild("videoPlayer", {static: false}) videoPlayer: ElementRef;
  selectedIndex = 0;
  activeChild: Child;
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
  imageClicked(): void {
    this.show = true;
  }
  close(): void {
    this.show = false;
  }
  modalImageClicked(isVideo: boolean): void {
    if (isVideo) {
      this.videoPlayer.nativeElement.pause();
    }
    window.open("https://www.instagram.com/michelle_heimberg", "_blank");
    
  }
}
