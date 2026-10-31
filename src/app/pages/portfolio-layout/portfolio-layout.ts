import { AfterViewInit, Component, HostListener, OnDestroy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './portfolio-layout.html',
  styleUrl: './portfolio-layout.css',
})
export class PortfolioLayout implements AfterViewInit, OnDestroy {
  protected readonly darkMode = signal(false);
  protected readonly activeHref = signal('#hero');
  protected readonly links: SidebarLink[] = [
    { label: 'Home', icon: 'bi bi-house-door', href: '#hero' },
    { label: 'Details', icon: 'bi bi-person-vcard', href: '#details' },
    { label: 'Education', icon: 'bi bi-mortarboard', href: '#education' },
    { label: 'Skills', icon: 'bi bi-lightning-charge', href: '#skills' },
    { label: 'Projects', icon: 'bi bi-grid', href: '#projects' },
    { label: 'Links', icon: 'bi bi-link-45deg', href: '#links' },
  ];

  protected toggleTheme(): void {
    this.darkMode.update((dark) => !dark);
    document.documentElement.dataset['theme'] = this.darkMode() ? 'dark' : 'light';
  }

  protected onSidebarClick(event: MouseEvent): void {
    const href = (event.target as HTMLElement).closest('a')?.getAttribute('href');
    if (href) this.activeHref.set(href);
  }

  ngAfterViewInit(): void { this.updateActiveSection(); }

  @HostListener('window:scroll')
  protected updateActiveSection(): void {
    const active = [...this.links].reverse().find((link) => {
      const section = document.querySelector(link.href);
      return section !== null && section.getBoundingClientRect().top <= window.innerHeight * 0.42;
    });
    if (active) this.activeHref.set(active.href);
  }

  ngOnDestroy(): void {
    document.documentElement.dataset['theme'] = 'light';
  }
}
