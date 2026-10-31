import { AfterViewInit, Component, ChangeDetectionStrategy, HostListener, OnDestroy, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';
import { LanguageService } from '../../services/language.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './portfolio-layout.html',
  styleUrl: './portfolio-layout.css',
})
export class PortfolioLayout implements AfterViewInit, OnDestroy {
  protected readonly i18n = inject(LanguageService);
  protected readonly darkMode = signal(false);
  protected readonly activeHref = signal('#hero');
  protected readonly links = computed<SidebarLink[]>(() => [
    { label: this.i18n.text('nav.home'), icon: 'bi bi-house-door', href: '#hero' },
    { label: this.i18n.text('nav.details'), icon: 'bi bi-person-vcard', href: '#details' },
    { label: this.i18n.text('nav.education'), icon: 'bi bi-mortarboard', href: '#education' },
    { label: this.i18n.text('nav.skills'), icon: 'bi bi-lightning-charge', href: '#skills' },
    { label: this.i18n.text('nav.projects'), icon: 'bi bi-grid', href: '#projects' },
    { label: this.i18n.text('nav.links'), icon: 'bi bi-link-45deg', href: '#links' },
  ]);
  protected readonly languageOptions = [
    { code: 'en', label: 'EN' }, { code: 'fr', label: 'FR' }, { code: 'ar', label: 'AR' }, { code: 'de', label: 'DE' },
  ];

  protected toggleTheme(): void {
    this.darkMode.update((dark) => !dark);
    document.documentElement.dataset['theme'] = this.darkMode() ? 'dark' : 'light';
  }

  protected changeLanguage(language: string): void { this.i18n.setLanguage(language); }

  protected onSidebarClick(event: MouseEvent): void {
    const href = (event.target as HTMLElement).closest('a')?.getAttribute('href');
    if (href) this.activeHref.set(href);
  }

  ngAfterViewInit(): void { this.updateActiveSection(); }

  @HostListener('window:scroll')
  protected updateActiveSection(): void {
    const active = [...this.links()].reverse().find((link) => {
      const section = document.querySelector(link.href);
      return section !== null && section.getBoundingClientRect().top <= window.innerHeight * 0.42;
    });
    if (active) this.activeHref.set(active.href);
  }

  ngOnDestroy(): void {
    document.documentElement.dataset['theme'] = 'light';
  }
}
