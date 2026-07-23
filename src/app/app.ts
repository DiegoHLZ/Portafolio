import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
})
export class App {
  private readonly document = inject(DOCUMENT);

  language: 'en' | 'es' = 'es';
  menuOpen = false;
  mouseX = -100;
  mouseY = -100;
  currentYear = new Date().getFullYear();

  toggleLanguage(): void {
    this.language = this.language === 'en' ? 'es' : 'en';
    this.document.documentElement.lang = this.language;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.document.body.classList.toggle('menu-is-open', this.menuOpen);
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.document.body.classList.remove('menu-is-open');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
