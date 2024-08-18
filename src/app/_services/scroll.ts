import { HostListener, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {}
}
