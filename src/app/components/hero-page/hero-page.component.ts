import { Component, inject, input } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {
  protected readonly i18n = inject(LanguageService);
  readonly title = input('Portfolio');
  readonly name = input('Yassine KERFAI.');
  readonly role = input('Software engineer');
  readonly description = input('I build clear, useful digital experiences and the thoughtful details that make them feel right.');
}
