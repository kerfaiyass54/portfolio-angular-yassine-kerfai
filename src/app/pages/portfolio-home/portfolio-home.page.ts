import { Component, computed, inject, viewChild } from '@angular/core';
import { ActionDialogComponent } from '../../components/action-dialog/action-dialog.component';
import { EducationComponent } from '../../components/education/education.component';
import { HeroPageComponent } from '../../components/hero-page/hero-page.component';
import { ProfileDetailsComponent } from '../../components/profile-details/profile-details.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { StepItem, StepperComponent } from '../../components/stepper/stepper.component';
import { LanguageService } from '../../services/language.service';

interface PortfolioProject {
  number: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  icon: string;
  url: string;
  animation: string;
}

@Component({
  selector: 'app-portfolio-home-page',
  standalone: true,
  imports: [HeroPageComponent, ProfileDetailsComponent, EducationComponent, SkillsComponent, ScrollRevealDirective, ActionDialogComponent, StepperComponent],
  templateUrl: './portfolio-home.page.html',
  styleUrl: './portfolio-home.page.css',
})
export class PortfolioHomePage {
  protected readonly i18n = inject(LanguageService);
  protected readonly projects: PortfolioProject[] = [
    { number: '01', title: 'Panini WC 26 Digital', type: 'DIGITAL EXPERIENCE', description: 'A full-stack digital collection platform combining Angular, Spring Boot, Kafka event streaming, and PostgreSQL analytics for managing and trading World Cup stickers.', tags: ['Angular 21', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Apache Kafka', 'Python', 'Docker', 'Keycloak'], icon: 'bi bi-trophy', url: 'https://github.com/kerfaiyass54/panini-wc-26-digital', animation: 'panini' },
    { number: '02', title: 'Vehicle Rental Application', type: 'FULL-STACK APPLICATION', description: 'A multi-tenant rental platform for vehicle inventory, bookings, subscriptions, repairs, role-based portals, analytics, and API documentation.', tags: ['Java 21', 'Spring Boot', 'Angular 21', 'TypeScript', 'PostgreSQL', 'Keycloak', 'Elasticsearch', 'Docker', 'Maven'], icon: 'bi bi-car-front', url: 'https://github.com/kerfaiyass54/vehicule-rental-application', animation: 'rental' },
    { number: '03', title: 'Personal Blog', type: 'CONTENT PLATFORM', description: 'A full-stack blog platform for publishing technical content, with Angular and Spring Boot, JWT security, MongoDB storage, Elasticsearch search, and real-time features.', tags: ['Angular 21', 'TypeScript', 'Spring Boot', 'Java 21', 'MongoDB', 'Elasticsearch', 'JWT', 'STOMP.js', 'Docker'], icon: 'bi bi-journal-richtext', url: 'https://github.com/kerfaiyass54/personal-blog', animation: 'blog' },
    { number: '04', title: 'Google Play Analytics', type: 'DATA PROJECT', description: 'A data analytics project covering cleaning, exploratory analysis, feature engineering, machine learning, visualization, and database-backed workflows for Google Play data.', tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Plotly', 'Streamlit', 'PostgreSQL', 'Apache Kafka'], icon: 'bi bi-bar-chart-line', url: 'https://github.com/kerfaiyass54/google-play-analytics', animation: 'analytics' },
    { number: '05', title: 'World Cup App', type: 'DATA APPLICATION', description: 'A World Cup analytics platform combining Python data processing, Kafka streaming, Spring Boot services, PostgreSQL, and an Angular dashboard with interactive charts.', tags: ['Java 21', 'Spring Boot', 'Angular 21', 'TypeScript', 'Python', 'Pandas', 'NumPy', 'Chart.js', 'PostgreSQL', 'Apache Kafka', 'Docker'], icon: 'bi bi-globe-americas', url: 'https://github.com/kerfaiyass54/world-cup-app', animation: 'world-cup' },
    { number: '06', title: 'ENIT Info Drive', type: 'WEB APPLICATION', description: 'A responsive student information portal built with React and Vite, offering curriculum exploration, multilingual support, themes, resources, and accessible UI components.', tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Radix UI', 'shadcn/ui', 'React Router', 'Recharts', 'Embla Carousel'], icon: 'bi bi-mortarboard', url: 'https://github.com/kerfaiyass54/enit-info-drive', animation: 'enit' },
    { number: '07', title: 'Football Tournament Management', type: 'MANAGEMENT PLATFORM', description: 'A modular microservices ecosystem for teams, players, matches, and tournaments with Angular, Spring Cloud services, multiple databases, Keycloak, Kafka, and AI integration.', tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Angular 21', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Keycloak', 'Apache Kafka', 'Docker', 'GitHub Actions'], icon: 'bi bi-diagram-3', url: 'https://github.com/kerfaiyass54/football-tournament-management', animation: 'tournament' },
  ];

  protected activeProjectIndex = 0;
  protected selectedProject: PortfolioProject | null = null;
  protected carouselDirection: 'forward' | 'backward' = 'forward';
  protected carouselAnimationKey = 0;
  private readonly projectDialog = viewChild.required<ActionDialogComponent>('projectDialog');

  protected get visibleProjects(): PortfolioProject[] {
    return Array.from({ length: 3 }, (_, offset) => this.projects[(this.activeProjectIndex + offset) % this.projects.length]);
  }

  protected previousProject(): void {
    this.carouselDirection = 'backward';
    this.activeProjectIndex = this.activeProjectIndex === 0 ? this.projects.length - 1 : this.activeProjectIndex - 1;
    this.carouselAnimationKey++;
  }

  protected nextProject(): void {
    this.carouselDirection = 'forward';
    this.activeProjectIndex = this.activeProjectIndex === this.projects.length - 1 ? 0 : this.activeProjectIndex + 1;
    this.carouselAnimationKey++;
  }

  protected openProject(project: PortfolioProject): void {
    this.selectedProject = project;
    queueMicrotask(() => this.projectDialog().openDialog());
  }

  protected projectSteps(project: PortfolioProject): StepItem[] {
    return [
      { title: this.i18n.text('projects.stepDetails'), icon: 'bi bi-file-earmark-text', description: project.title, content: project.description },
      { title: this.i18n.text('projects.stepTech'), icon: 'bi bi-stack', items: project.tags.map((tag) => ({ name: tag, icon: this.techIcon(tag) })) },
    ];
  }

  protected techIcon(technology: string): string {
    const icons: Record<string, string> = {
      Angular: 'bi bi-puzzle', TypeScript: 'bi bi-braces', Java: 'bi bi-cup-hot', 'Java 21': 'bi bi-cup-hot',
      'Spring Boot': 'bi bi-leaf', 'Spring Cloud': 'bi bi-cloud', Python: 'bi bi-filetype-py', Pandas: 'bi bi-table',
      NumPy: 'bi bi-calculator', PostgreSQL: 'bi bi-database', MongoDB: 'bi bi-database-fill', 'Apache Kafka': 'bi bi-broadcast',
      Docker: 'bi bi-box', Keycloak: 'bi bi-shield-lock', Elasticsearch: 'bi bi-search', React: 'bi bi-atom',
      Vite: 'bi bi-lightning-charge', 'Tailwind CSS': 'bi bi-palette', 'Radix UI': 'bi bi-ui-checks', 'shadcn/ui': 'bi bi-grid-3x3-gap',
      'Chart.js': 'bi bi-bar-chart', Streamlit: 'bi bi-window-stack', 'GitHub Actions': 'bi bi-github', Maven: 'bi bi-hammer',
    };
    return icons[technology.replace(/ 21$/, '')] ?? icons[technology] ?? 'bi bi-code-slash';
  }

  protected openRepository(): void {
    if (this.selectedProject) window.open(this.selectedProject.url, '_blank', 'noopener,noreferrer');
  }

  protected clearSelectedProject(): void { this.selectedProject = null; }

  protected readonly links = computed(() => [
    { title: 'GitHub', note: this.i18n.text('links.github'), icon: 'bi bi-github', url: 'https://github.com/kerfaiyass54' },
    { title: 'LinkedIn', note: this.i18n.text('links.linkedin'), icon: 'bi bi-linkedin', url: 'https://linkedin.com/in/yassine-kerfai-14109b223' },
    { title: 'Dev.to', note: this.i18n.text('links.devto'), icon: 'bi bi-code-slash', url: 'https://dev.to/yassine_kerfai_25f1529c85' },
    { title: 'Instagram', note: this.i18n.text('links.instagram'), icon: 'bi bi-instagram', url: 'https://instagram.com/yassine.kerfai02' },
    { title: 'Medium', note: this.i18n.text('links.medium'), icon: 'bi bi-medium', url: 'https://medium.com/@yassine.kerfai' },
    { title: 'Facebook', note: this.i18n.text('links.facebook'), icon: 'bi bi-facebook', url: 'https://fb.com/kerfai.yassine' },
  ]);
}
