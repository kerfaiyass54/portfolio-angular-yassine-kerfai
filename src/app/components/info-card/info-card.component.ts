import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-info-card',
  standalone: true,
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent {
  readonly index = input('01');
  readonly kicker = input('A little about me');
  readonly title = input.required<string>();
  readonly icon = input('bi bi-arrow-up-right');
}
