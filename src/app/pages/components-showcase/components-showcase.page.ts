import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, inject, signal } from '@angular/core';
import { ActionDialogComponent } from '../../components/action-dialog/action-dialog.component';
import { FlipCardComponent } from '../../components/flip-card/flip-card.component';
import { InfoCardComponent } from '../../components/info-card/info-card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { StepItem, StepperComponent } from '../../components/stepper/stepper.component';

@Component({
  selector: 'app-components-showcase-page',
  standalone: true,
  imports: [SidebarComponent, InfoCardComponent, FlipCardComponent, ActionDialogComponent, StepperComponent],
  templateUrl: './components-showcase.page.html',
  styleUrl: './components-showcase.page.css',
})
export class ComponentsShowcasePage implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef) as ElementRef<HTMLElement>;
  private observer?: IntersectionObserver;
  protected readonly selectedLanguage = signal('en');
  protected readonly activeSection = signal('#home');
  protected readonly darkMode = signal(false);
  protected readonly sections = [
    { id: 'home', label: 'Home' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'work', label: 'Cards' },
    { id: 'about', label: 'Flip card' },
    { id: 'contact', label: 'Dialog' },
    { id: 'process', label: 'Stepper' },
  ];
  protected readonly steps: StepItem[] = [
    { title: 'Discover', description: 'Start with a clear point of view.', content: 'Every good project starts with a conversation. We map the goals, audience, and the one thing the experience needs to do exceptionally well.' },
    { title: 'Design', description: 'Give the idea a shape and a voice.', content: 'Explore a focused visual direction, then shape the important screens and interactions around real content.' },
    { title: 'Build', description: 'Make it real, responsive, and ready.', content: 'Turn the chosen direction into a polished, accessible interface that feels at home on every screen.' },
  ];

  protected selectLanguage(language: string): void { this.selectedLanguage.set(language); }
  protected selectSection(section: string): void { this.activeSection.set(section); }
  protected onSidebarClick(event: MouseEvent): void {
    const href = (event.target as HTMLElement).closest('a')?.getAttribute('href');
    if (href) this.selectSection(href);
  }
  protected toggleTheme(): void {
    this.darkMode.update((dark) => !dark);
    document.documentElement.dataset['theme'] = this.darkMode() ? 'dark' : 'light';
  }
  protected onDialogConfirm(): void { window.location.href = 'mailto:hello@yassinekerfai.dev'; }
  protected onStepperComplete(): void { this.selectSection('#contact'); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }

  ngAfterViewInit(): void {
    this.updateActiveSection();
    const elements = this.host.nativeElement.querySelectorAll<HTMLElement>('.reveal-on-scroll');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    this.observer = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    elements.forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    document.documentElement.dataset['theme'] = 'light';
  }

  @HostListener('window:scroll')
  protected updateActiveSection(): void {
    const active = [...this.sections].reverse().find((section) => {
      const element = document.getElementById(section.id);
      return element !== null && element.getBoundingClientRect().top <= window.innerHeight * 0.42;
    });
    if (active) this.activeSection.set(`#${active.id}`);
  }
}
