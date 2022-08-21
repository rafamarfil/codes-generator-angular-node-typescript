import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rvantravel-navbar',
  templateUrl: './shared-ui-navbar.component.html',
  styleUrls: ['./shared-ui-navbar.component.scss'],
})
export class SharedUiNavbarComponent {
  @Output() logout = new EventEmitter<boolean>();

  username = 'User';

  onLogout() {
    this.logout.emit(true);
  }
}
