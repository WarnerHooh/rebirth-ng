import { Routes } from '@angular/router';
import { AppContentComponent } from './feature/app-content.component';
import { GettingStartedComponent } from './feature/getting-started';


export const ROUTER_CONFIG: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/gettingStarted' },
  { path: 'gettingStarted', component: GettingStartedComponent, data: { reusable: true } },
  { path: 'component/:name', component: AppContentComponent, data: { reusable: true } },
];
