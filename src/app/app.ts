import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgxParticlesModule],
  templateUrl: './app.html',
})
export class App implements OnInit {
  language: 'en' | 'es' = 'en';

  mouseX = 0;
  mouseY = 0;

  menuOpen = false;

  id = 'tsparticles';

  isSafari =
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    navigator.vendor.includes('Apple');

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    if (!this.isSafari) {
      setTimeout(() => {
        this.ngParticlesService.init(async (engine) => {
          await loadSlim(engine);
        });
      }, 500);
    }
  }

  particlesOptions: any = this.isSafari
    ? {
        background: { color: { value: 'transparent' } },
        fpsLimit: 18,
        particles: {
          number: {
            value: 18,
            density: { enable: true, area: 1200 },
          },
          color: { value: ['#38bdf8', '#8b5cf6'] },
          links: {
            enable: true,
            distance: 110,
            color: '#38bdf8',
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.18,
            outModes: { default: 'bounce' },
          },
          opacity: { value: 0.22 },
          size: { value: { min: 1, max: 2 } },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            resize: true,
          },
        },
        detectRetina: false,
      }
    : {
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: {
            value: 105,
            density: { enable: true, area: 900 },
          },
          color: { value: ['#38bdf8', '#8b5cf6', '#06b6d4'] },
          links: {
            enable: true,
            distance: 160,
            color: '#38bdf8',
            opacity: 0.22,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.45,
            outModes: { default: 'bounce' },
          },
          opacity: { value: 0.45 },
          size: { value: { min: 1, max: 2.5 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: { opacity: 0.5 },
            },
          },
        },
        detectRetina: false,
      };

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
}
