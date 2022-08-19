import { Component } from '@angular/core';
import { NAV_BAR } from 'src/app/constants/constants';

@Component({
  selector: 'navbar-app',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  TEXTS = { ...NAV_BAR };
}
