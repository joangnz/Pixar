import { Component } from '@angular/core';
import { GLOBALS } from '../app.config';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  SITE_URL: string = GLOBALS.SITE_URL;
}
