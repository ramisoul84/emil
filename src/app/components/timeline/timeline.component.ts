import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  scrollY: number = 0;
  animationItem!: AnimationItem;
  @ViewChild('timeline') element!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    scrollY = this.element.nativeElement.getBoundingClientRect().top;
    if (scrollY < 0) {
      this.onPlay();
    } else {
      this.onPause();
    }
  }

  options: AnimationOptions = {
    path: 'assets/timeline.json',
    loop: false,
    autoplay: false,
  };

  onAnimate(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  onPlay() {
    this.animationItem.play();
  }

  onPause() {
    this.animationItem.pause();
  }
}
/*
   // ⤵️ Captures / defines current window height when called
    
    // ⤵️ Captures bounding rectangle of 5th element
    const boundingRectElement = this.el.getBoundingClientRect();
    // ⤵️ Captures bounding rectangle of 8th element

    // ⤵️ IF the top of the element is greater or = to 0 (it's not ABOVE the viewport)
    // AND IF the bottom of the element is less than or = to viewport height
    // show the corresponding icon after half a second
    // else hide all icons
   

*/
