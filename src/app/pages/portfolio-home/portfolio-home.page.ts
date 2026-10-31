import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-portfolio-home-page',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './portfolio-home.page.html',
  styleUrl: './portfolio-home.page.css',
})
export class PortfolioHomePage {
  protected readonly details = [
    { label: 'Role', value: 'Software engineer', icon: 'bi bi-person-gear' },
    { label: 'Current focus', value: 'Building for the web', icon: 'bi bi-window-stack' },
    { label: 'Working with', value: 'Angular · TypeScript', icon: 'bi bi-code-slash' },
  ];

  protected readonly skills = [
    { name: 'Angular', icon: 'devicon-angular-plain', group: 'Framework' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', group: 'Language' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', group: 'UI toolkit' },
    { name: 'HTML5', icon: 'devicon-html5-plain', group: 'Web' },
    { name: 'CSS3', icon: 'devicon-css3-plain', group: 'Web' },
    { name: 'RxJS', icon: 'bi bi-arrow-repeat', group: 'Reactive' },
  ];

  protected readonly projects = [
    { number: '01', title: 'Personal portfolio', type: 'IN PROGRESS', description: 'A considered home for my work, technical interests, and ways to connect.', tags: ['Angular', 'TypeScript', 'Bootstrap'], icon: 'bi bi-window' },
    { number: '02', title: 'Reusable interface kit', type: 'PORTFOLIO BUILD', description: 'Standalone navigation, card, dialog, and stepper components with responsive styling.', tags: ['Components', 'Responsive UI', 'Accessibility'], icon: 'bi bi-boxes' },
  ];

  protected readonly links = [
    { title: 'GitHub', note: 'Add your profile URL', icon: 'bi bi-github' },
    { title: 'LinkedIn', note: 'Add your profile URL', icon: 'bi bi-linkedin' },
    { title: 'Email', note: 'Add your preferred email', icon: 'bi bi-envelope' },
  ];
}
