import { Component, input, output } from '@angular/core';

export interface SidebarLink {
  label: string;
  icon: string;
  href: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  readonly name = input('Yassine KERFAI');
  readonly role = input('Software engineer');
  readonly navigationLabel = input('Navigate');
  readonly languageLabel = input('Language');
  readonly languageAriaLabel = input('Choose language');
  readonly footerNote = input('Crafted with intent');
  readonly initials = input('YK');
  readonly homeHref = input('#home');
  readonly activeHref = input('#home');
  readonly year = input(new Date().getFullYear());
  readonly links = input<SidebarLink[]>([
    { label: 'Overview', icon: 'bi bi-grid-1x2', href: '#home' },
    { label: 'Selected work', icon: 'bi bi-box-arrow-up-right', href: '#work' },
    { label: 'About me', icon: 'bi bi-person', href: '#about' },
    { label: 'Get in touch', icon: 'bi bi-chat-left-text', href: '#contact' },
  ]);
  readonly languages = input([
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
    { code: 'de', label: 'DE' },
  ]);
  readonly selectedLanguage = input('en');
  readonly languageChange = output<string>();
}
