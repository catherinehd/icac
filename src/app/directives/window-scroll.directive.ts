import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWindowScroll]'
})
export class WindowScrollDirective {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll') onScroll() {
    this.highlight('yellow');
  }

  private highlight(color: string) {
    // this.el.nativeElement.style.backgroundColor = color;
  }


}
