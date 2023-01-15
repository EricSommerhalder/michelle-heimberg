import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  currentSections: string[] = [];
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  navigate(id: string): void {
    if (window.location.href.split('/', 3).join('/').length != window.location.href.length - 1){ //not on base url
      this.router.navigateByUrl('/');
    }

  
    const elem = document.getElementById(id);
    if (elem){
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
        });
  }
  }
  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    this.currentSections = [];
    const ids = ['about-me', 'sponsoring', "contact", "news"];
    for (let i = 0; i < ids.length; i++){
      const element = document.getElementById(ids[i]) as HTMLElement;
      if(element){
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const percentVisible = 40;
        if (!(Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
          )){
            this.currentSections.push(ids[i]);
          } 
      }
      
    }
 }
}
