import { Component } from '@angular/core';
import { GLOBALS } from '../app.config';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  SITE_URL = GLOBALS.SITE_URL;
}
