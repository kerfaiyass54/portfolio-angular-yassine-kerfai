import { Routes } from '@angular/router';
import { ComponentsShowcasePage } from './pages/components-showcase/components-showcase.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components' },
  { path: 'components', component: ComponentsShowcasePage },
  { path: '**', redirectTo: 'components' },
];
