import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/angular',
    pathMatch: 'full',
  },
  {
    path: 'angular',
    loadComponent: () =>
      import('./angular/angular.component').then((c) => c.AngularComponent),
  },
  {
    path: 'angular/:slug',
    loadComponent: () =>
      import('./angular/angular.component').then((c) => c.AngularComponent),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./blog/blog.component').then((c) => c.BlogComponent),
  },
];
