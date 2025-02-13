import { Component } from '@angular/core';
import { GLOBALS } from '../app.config';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  SITE_URL = GLOBALS.SITE_URL;
}
