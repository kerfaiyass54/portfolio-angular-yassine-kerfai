import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/portfolio-layout/portfolio-layout').then((m) => m.PortfolioLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/portfolio-home/portfolio-home.page').then((m) => m.PortfolioHomePage),
      },
    ],
  },
  { path: 'components', pathMatch: 'full', redirectTo: '' },
  { path: '**', redirectTo: '' },
];
