import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as $ from 'jquery';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pixar';
}
