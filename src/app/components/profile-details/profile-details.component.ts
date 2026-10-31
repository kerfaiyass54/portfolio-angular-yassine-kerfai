import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css',
})
export class ProfileDetailsComponent {
  protected readonly interests = [
    { name: 'DevOps', icon: 'bi bi-infinity' },
    { name: 'AI', icon: 'bi bi-stars' },
    { name: 'Machine learning', icon: 'bi bi-diagram-3' },
    { name: 'Development', icon: 'bi bi-code-slash' },
    { name: 'Architecture', icon: 'bi bi-buildings' },
    { name: 'Cloud', icon: 'bi bi-cloud' },
  ];
}
