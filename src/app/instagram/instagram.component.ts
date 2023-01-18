import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InstagramServiceService } from '../instagram-service.service';

export interface Child {
  url: string;
  thumbnail: string;
  mediaType: string; //IMAGE or VIDEO
}
export interface Post {
  url: string;
  caption: string;
  mediaType: string; //Media types are: IMAGE, VIDEO or CAROUSEL_ALBUM https://developers.facebook.com/docs/instagram-basic-display-api/reference/media/
  timeStamp: string;
  children: Child[];
  thumbnail: string;
}

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})


export class InstagramComponent implements OnInit {
  show = false;
  @ViewChild("videoPlayer", {static: false}) videoPlayer: ElementRef;
  clickedPost: Post = {
    url: "", caption: "", mediaType: "", timeStamp: "", children: [], thumbnail: ""
  };
  selectedIndex = 0;
  activeChild: Child;
  constructor(private instaService: InstagramServiceService) {}
    posts: Post[] = [];
    ngOnInit(): void {
    //this.instaService.getImages(9).subscribe(res => {
      this.instaService.getImagesDummy().subscribe(res => {
        console.log(JSON.stringify(res));
        if (res.hasOwnProperty('data') && Array.isArray(res['data'])){
          for (const image of res['data']) {
            if (image.hasOwnProperty('id')){
                if (image["media_type"] == 'IMAGE'){
                  this.posts.push({url: image["media_url"], caption: image["caption"], mediaType: image["media_type"], timeStamp: image["timestamp"], children: [], thumbnail: ""});
                }
                if (image["media_type"] == 'VIDEO'){
                  this.posts.push({url: image["media_url"], caption: image["caption"], mediaType: image["media_type"], timeStamp: image["timestamp"], children: [], thumbnail: image["thumbnail_url"]});
                }
                if (image["media_type"] == 'CAROUSEL_ALBUM'){
                  const children: Child[] = [];
                  for (const child of image["children"]["data"]){
                    let thumbnail = child.hasOwnProperty("thumbnail_url") ? child["thumbnail_url"] : "";
                    children.push({url: child["media_url"], thumbnail: thumbnail, mediaType: child["media_type"]})
                  }
                  this.posts.push({url: image["media_url"], caption: image["caption"], mediaType: image["media_type"], timeStamp: image["timestamp"], children: children, thumbnail: ""});
                }
                this.posts = this.posts.sort((n1, n2) => {
                  if (n1.timeStamp > n2.timeStamp){
                    return -1;
                  }
                  if (n2.timeStamp > n1.timeStamp){
                    return 1;
                  }
                  return 0;
                })
            }
          }
        }
        
      });
  }
  imageClicked(post: Post): void {
    var modal = document.getElementById("modal") as HTMLElement;
    modal.style.display = "flex";
    this.clickedPost = post;
    if (post.mediaType == "CAROUSEL_ALBUM"){
      this.selectedIndex = 0;
      this.activeChild = post.children[this.selectedIndex];
    }
    
  }
  close(): void {
    var modal = document.getElementById("modal") as HTMLElement;
    modal.style.display = "none";
    this.selectedIndex = 0;
  }
  modalImageClicked(isVideo: boolean): void {
    if (isVideo) {
      this.videoPlayer.nativeElement.pause();
    }
    this.close();
    window.open("https://www.instagram.com/michelle_heimberg", "_blank");
    
  }
  pause(video: any): void {
    video.pause();
  }
  previousChild(): void {
    this.selectedIndex = this.selectedIndex === 0 ? this.clickedPost.children.length - 1 : this.selectedIndex - 1;
    this.activeChild = this.clickedPost['children'][this.selectedIndex];
  }
  nextChild(): void {
    this.selectedIndex = this.selectedIndex === this.clickedPost.children.length -1 ? 0 : this.selectedIndex + 1;
    this.activeChild = this.clickedPost['children'][this.selectedIndex];
  }
}
