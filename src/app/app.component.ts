import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HeroComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Pixar';
}
