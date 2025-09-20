import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Content } from './Pages/content/content';

export const routes: Routes = [
  {
    path: '',
    component:Home
  },
  {
    path: 'content',
    component:Content
  }
];
