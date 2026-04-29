import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
})
export class App {
  language: 'en' | 'es' = 'en';

  mouseX = 0;
  mouseY = 0;

  menuOpen = false;
  darkMode = false;

  toggleLanguage() {
    this.language = this.language === 'en' ? 'es' : 'en';
  }

  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
