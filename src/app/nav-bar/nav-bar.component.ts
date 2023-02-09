import { Component, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScrollServiceService } from '../scroll-service.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  currentSections: string[] = [];
  constructor(public router: Router, private scroll: ScrollServiceService, private route: ActivatedRoute) { }
  
  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    this.currentSections = [];
    const ids = ['about-me', 'sponsoring', "contact", "news", "partner"];
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

  scrollTo(id: string) {
    if (this.router.url === '/') {
      setTimeout(() => {
        console.log("Scrolling to ", document.getElementById(id).offsetTop - 88);
        window.scrollTo({
          top: document.getElementById(id).offsetTop - 88,
          behavior: 'smooth'
        });
      });
    } else {
      this.scroll.setElementId(id);
    }
    
  }

}
