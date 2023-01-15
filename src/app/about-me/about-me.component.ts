import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  extended = false;
  constructor() { }

  ngOnInit(): void {
    
  }
  toggleExtended(){
    this.extended = !this.extended;
  }
}
