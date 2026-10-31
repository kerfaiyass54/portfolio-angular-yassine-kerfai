import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {
  readonly title = input('Portfolio');
  readonly name = input('Yassine KERFAI.');
  readonly role = input('Software engineer');
  readonly description = input('I build clear, useful digital experiences and the thoughtful details that make them feel right.');
}
