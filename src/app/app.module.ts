import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { InterestsComponent } from './components/interests/interests.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { WorkComponent } from './components/work/work.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

import { provideLottieOptions } from 'ngx-lottie';
import { LottieComponent } from 'ngx-lottie';

@NgModule({
  imports: [BrowserModule, CommonModule, LottieComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    InterestsComponent,
    TimelineComponent,
    WorkComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],
})
export class AppModule {}
