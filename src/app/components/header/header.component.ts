import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  scrollY: number = 0;
  @HostListener('window:scroll', ['$event'])
  public onViewportScroll() {
    this.scrollY = window.scrollY;
  }
}
