import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-flip-card',
  standalone: true,
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css',
})
export class FlipCardComponent {
  readonly ariaLabel = input('More information card');
  readonly frontLabel = input('The project');
  readonly backLabel = input('Behind the work');
}
