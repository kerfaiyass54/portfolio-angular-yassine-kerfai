import { Component, ChangeDetectionStrategy, inject, input, output, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

export interface StepItem {
  title: string;
  icon?: string;
  description?: string;
  content?: string;
  items?: Array<{ name: string; icon: string }>;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-stepper',
  standalone: true,
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  protected readonly i18n = inject(LanguageService);
  readonly steps = input.required<StepItem[]>();
  readonly showNavigationControls = input(true);
  readonly large = input(false);
  readonly stepChange = output<number>();
  readonly completed = output<void>();
  protected readonly activeIndex = signal(0);

  selectStep(index: number): void {
    if (index >= 0 && index < this.steps().length) {
      this.activeIndex.set(index);
      this.stepChange.emit(index);
    }
  }
  previous(): void { this.selectStep(this.activeIndex() - 1); }
  next(): void {
    if (this.activeIndex() === this.steps().length - 1) this.completed.emit();
    else this.selectStep(this.activeIndex() + 1);
  }
}
