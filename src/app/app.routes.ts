import { Routes } from '@angular/router';
import { PortfolioHomePage } from './pages/portfolio-home/portfolio-home.page';
import { PortfolioLayout } from './pages/portfolio-layout/portfolio-layout';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioLayout,
    children: [{ path: '', component: PortfolioHomePage }],
  },
  { path: 'components', pathMatch: 'full', redirectTo: '' },
  { path: '**', redirectTo: '' },
];
