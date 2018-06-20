import { Routes } from '@angular/router';
import { ComponentsComponent } from './feature/components/components.component';
import { GettingStartedComponent } from './feature/getting-started';
import { DesignGuidelineComponent } from './feature/design-guideline';


export const ROUTER_CONFIG: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/gettingStarted' },
  { path: 'gettingStarted', component: GettingStartedComponent, data: { reusable: true } },
  { path: 'design-guideline/:name', component: DesignGuidelineComponent, data: { reusable: true } },
  { path: 'component/:name', component: ComponentsComponent, data: { reusable: true } },
];
