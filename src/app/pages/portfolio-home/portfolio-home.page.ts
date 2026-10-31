import { Component } from '@angular/core';
import { EducationComponent } from '../../components/education/education.component';
import { HeroPageComponent } from '../../components/hero-page/hero-page.component';
import { ProfileDetailsComponent } from '../../components/profile-details/profile-details.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-portfolio-home-page',
  standalone: true,
  imports: [HeroPageComponent, ProfileDetailsComponent, EducationComponent, SkillsComponent, ScrollRevealDirective],
  templateUrl: './portfolio-home.page.html',
  styleUrl: './portfolio-home.page.css',
})
export class PortfolioHomePage {
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
