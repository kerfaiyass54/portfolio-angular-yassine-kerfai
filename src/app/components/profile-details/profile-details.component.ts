import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-profile-details',
  standalone: true,
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css',
})
export class ProfileDetailsComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly interests = computed(() => [
    { name: this.i18n.text('interest.devops'), icon: 'bi bi-infinity' },
    { name: this.i18n.text('interest.ai'), icon: 'bi bi-stars' },
    { name: this.i18n.text('interest.ml'), icon: 'bi bi-diagram-3' },
    { name: this.i18n.text('interest.development'), icon: 'bi bi-code-slash' },
    { name: this.i18n.text('interest.architecture'), icon: 'bi bi-buildings' },
    { name: this.i18n.text('interest.cloud'), icon: 'bi bi-cloud' },
  ]);
}
