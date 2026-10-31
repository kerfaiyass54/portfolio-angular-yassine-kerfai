import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { StepItem, StepperComponent } from '../stepper/stepper.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-skills',
  standalone: true,
  imports: [StepperComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  protected readonly i18n = inject(LanguageService);
  private readonly items: StepItem[] = [
    {
      title: 'Languages & Frameworks',
      description: 'Programming languages and frameworks from my engineering work.',
      items: [
        { name: 'Java', icon: 'devicon-java-plain' },
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'HTML', icon: 'devicon-html5-plain' },
        { name: 'CSS', icon: 'devicon-css3-plain' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
        { name: 'C#', icon: 'devicon-csharp-plain' },
        { name: 'Go', icon: 'devicon-go-plain' },
        { name: 'SQL', icon: 'bi bi-database' },
        { name: 'Dart', icon: 'devicon-dart-plain' },
        { name: 'Angular', icon: 'devicon-angular-plain' },
        { name: 'React', icon: 'devicon-react-original' },
        { name: 'Spring Boot', icon: 'devicon-spring-original' },
        { name: '.NET', icon: 'devicon-dotnetcore-plain' },
        { name: 'Vue', icon: 'devicon-vuejs-plain' },
        { name: 'Flutter', icon: 'devicon-flutter-plain' },
      ],
    },
    {
      title: 'Databases',
      description: 'Relational, document, search, and in-memory data stores.',
      items: [
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
        { name: 'Redis', icon: 'devicon-redis-plain' },
        { name: 'Elasticsearch', icon: 'devicon-elasticsearch-plain' },
      ],
    },
    {
      title: 'AI / ML',
      description: 'Agentic AI, retrieval workflows, and practical machine learning.',
      items: [
        { name: 'LangChain', icon: 'bi bi-link-45deg' },
        { name: 'LangGraph', icon: 'bi bi-diagram-3' },
        { name: 'MCP', icon: 'bi bi-plug' },
        { name: 'RAG', icon: 'bi bi-search' },
        { name: 'ChromaDB', icon: 'bi bi-collection' },
        { name: 'Tool Calling', icon: 'bi bi-wrench-adjustable' },
        { name: 'Multi-Agent Systems', icon: 'bi bi-people' },
        { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain' },
        { name: 'pandas', icon: 'devicon-pandas-plain' },
        { name: 'NumPy', icon: 'devicon-numpy-plain' },
        { name: 'Feature Engineering', icon: 'bi bi-sliders' },
        { name: 'Embeddings', icon: 'bi bi-bounding-box-circles' },
        { name: 'Model Evaluation', icon: 'bi bi-clipboard-data' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      description: 'Containerization, CI/CD, infrastructure, and cloud tooling.',
      items: [
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'Kubernetes', icon: 'devicon-kubernetes-plain' },
        { name: 'Git', icon: 'devicon-git-plain' },
        { name: 'CI/CD', icon: 'bi bi-arrow-repeat' },
        { name: 'GitLab', icon: 'devicon-gitlab-plain' },
        { name: 'GitHub', icon: 'devicon-github-original' },
        { name: 'Jenkins', icon: 'devicon-jenkins-line' },
        { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
        { name: 'Terraform', icon: 'devicon-terraform-plain' },
      ],
    },
    {
      title: 'Other',
      description: 'Messaging, integration, security, testing, and observability.',
      items: [
        { name: 'Apache Kafka', icon: 'devicon-apachekafka-original' },
        { name: 'Kafka Streams', icon: 'devicon-apachekafka-original' },
        { name: 'ActiveMQ', icon: 'bi bi-arrow-left-right' },
        { name: 'Spring Cloud', icon: 'devicon-spring-original' },
        { name: 'REST APIs', icon: 'bi bi-braces' },
        { name: 'Keycloak', icon: 'bi bi-shield-lock' },
        { name: 'Spring Security', icon: 'bi bi-shield-check' },
        { name: 'OAuth2', icon: 'bi bi-key' },
        { name: 'JWT', icon: 'bi bi-ticket-perforated' },
        { name: 'Playwright', icon: 'devicon-playwright-plain' },
        { name: 'JUnit', icon: 'devicon-junit-plain' },
        { name: 'Mockito', icon: 'bi bi-check2-circle' },
        { name: 'SonarQube', icon: 'devicon-sonarqube-plain' },
        { name: 'Jest', icon: 'devicon-jest-plain' },
        { name: 'Jasmine', icon: 'devicon-jasmine-plain' },
        { name: 'Cypress', icon: 'devicon-cypressio-plain' },
        { name: 'Data Analysis', icon: 'bi bi-bar-chart' },
        { name: 'KPI Analysis', icon: 'bi bi-graph-up-arrow' },
        { name: 'Grafana', icon: 'devicon-grafana-plain' },
        { name: 'Prometheus', icon: 'devicon-prometheus-original' },
      ],
    },
  ];
  protected readonly groups = computed(() => {
    const keys = [
      ['skills.programming', 'skills.programmingDescription'], ['skills.databases', 'skills.databasesDescription'],
      ['skills.ai', 'skills.aiDescription'], ['skills.devops', 'skills.devopsDescription'], ['skills.other', 'skills.otherDescription'],
    ];
    return this.items.map((step, index) => ({ ...step, title: this.i18n.text(keys[index][0]), description: this.i18n.text(keys[index][1]) }));
  });
}
