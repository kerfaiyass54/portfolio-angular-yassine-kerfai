import { Component } from '@angular/core';

interface EducationItem {
  number: string;
  name: string;
  shortName: string;
  qualification: string;
  graduationYear: string;
  href?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  protected readonly education: EducationItem[] = [
    {
      number: '01',
      name: 'École Nationale d’Ingénieurs de Tunis',
      shortName: 'ENIT',
      qualification: 'Computer Science Engineering Degree',
      graduationYear: '2024',
      href: 'https://enit.rnu.tn/',
    },
    {
      number: '02',
      name: 'Institut Préparatoire aux Études d’Ingénieurs d’El Manar',
      shortName: 'IPEIEM',
      qualification: 'Scientific Studies · MP',
      graduationYear: '2021',
      href: 'https://ipeiem.rnu.tn/',
    },
    {
      number: '03',
      name: 'Lycée Laouina',
      shortName: 'LYCÉE',
      qualification: 'Baccalaureate · Mathematics',
      graduationYear: '2019',
    },
  ];
}
