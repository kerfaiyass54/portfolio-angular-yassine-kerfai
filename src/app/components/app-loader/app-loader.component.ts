import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-loader',
  standalone: true,
  templateUrl: './app-loader.component.html',
  styleUrl: './app-loader.component.css',
})
export class AppLoaderComponent implements OnInit, OnDestroy {
  protected readonly progress = signal(0);
  protected readonly isDone = signal(false);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      const next = Math.min(this.progress() + Math.floor(Math.random() * 5) + 1, 100);
      this.progress.set(next);
      if (next === 100) {
        clearInterval(this.timer);
        setTimeout(() => this.isDone.set(true), 420);
      }
    }, 130);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}
