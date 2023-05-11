import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: [ './scroll-to-top.component.css' ]
})
export class ScrollToTopComponent  {
  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
      
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    //console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
