import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface EducationItem {
  number: string;
  name: string;
  shortName: string;
  qualificationKey: string;
  graduationYear: string;
  href?: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly education: EducationItem[] = [
    { number: '01', name: 'École Nationale d’Ingénieurs de Tunis', shortName: 'ENIT', qualificationKey: 'education.engineering', graduationYear: '2024', href: 'https://enit.rnu.tn/' },
    { number: '02', name: 'Institut Préparatoire aux Études d’Ingénieurs d’El Manar', shortName: 'IPEIEM', qualificationKey: 'education.preparatory', graduationYear: '2021', href: 'https://ipeiem.rnu.tn/' },
    { number: '03', name: 'Lycée Laouina', shortName: 'LYCÉE', qualificationKey: 'education.baccalaureate', graduationYear: '2019' },
  ];
}
