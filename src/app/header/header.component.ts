import { Component } from '@angular/core';
import { GLOBALS } from '../app.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  SITE_URL: string = GLOBALS.SITE_URL;

  menus = {
    films: false,
    technology: false,
    careers: false,
    more: false,
  };

  toggleMenu(menu: keyof typeof this.menus, show: boolean) {
    this.menus[menu] = show;
  }
}
