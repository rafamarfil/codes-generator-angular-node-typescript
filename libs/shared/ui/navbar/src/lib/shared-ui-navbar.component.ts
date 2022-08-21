import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rvantravel-navbar',
  templateUrl: './shared-ui-navbar.component.html',
  styleUrls: ['./shared-ui-navbar.component.scss'],
})
export class SharedUiNavbarComponent {
  @Output() logout = new EventEmitter<boolean>();

  username = 'Rafa';

  onLogout() {
    this.logout.emit(true);
  }

  onFullscreenToggle() {
    const elem = <any>document.querySelector('.coupons');

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }
}
