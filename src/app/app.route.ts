import { Routes } from '@angular/router';
import { ComponentsComponent } from './feature/components';
import { GettingStartedComponent } from './feature/getting-started';
import { DesignGuidelineComponent } from './feature/design-guideline/design-guideline.component';


export const ROUTER_CONFIG: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/gettingStarted' },
  { path: 'gettingStarted', component: GettingStartedComponent, data: { reusable: true } },
  { path: 'design-guideline/:name', component: DesignGuidelineComponent},
  { path: 'component/:name', component: ComponentsComponent, data: { reusable: true } },
];
