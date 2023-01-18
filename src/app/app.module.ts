import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselModule } from './carousel/carousel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { SponsoringComponent } from './sponsoring/sponsoring.component';
import { BecomeSponserComponent } from './become-sponser/become-sponser.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { InstagramComponent } from './instagram/instagram.component';
import { HttpClientModule } from '@angular/common/http';
import { InstaCarouselViewerComponent } from './insta-carousel-viewer/insta-carousel-viewer.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InstaCarouselModalViewerComponent } from './insta-carousel-modal-viewer/insta-carousel-modal-viewer.component';
import { PartnerComponent } from './partner/partner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'become-sponsor/:value', component: BecomeSponserComponent },
  { path: 'become-sponsor', component: BecomeSponserComponent },
  { path: 'partner', component: PartnerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AboutMeComponent,
    ParallaxComponent,
    SponsoringComponent,
    BecomeSponserComponent,
    MainPageComponent,
    InstagramComponent,
    InstaCarouselViewerComponent,
    ContactComponent,
    InstaCarouselModalViewerComponent,
    PartnerComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
