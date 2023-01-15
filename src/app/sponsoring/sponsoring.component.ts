import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sponsoring',
  templateUrl: './sponsoring.component.html',
  styleUrls: ['./sponsoring.component.css']
})
export class SponsoringComponent implements OnInit {
  extended = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToSubPage(value: string): void {
    this.router.navigate(['/become-sponsor', value])
  }
  toggleExtended(): void {
    this.extended = !this.extended;
  }
}
