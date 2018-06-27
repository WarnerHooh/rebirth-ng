import { Routes } from '@angular/router';
import { ComponentsComponent } from '../../feature/components';
import { GettingStartedComponent } from '../../feature/getting-started';
import { MainComponent } from './main.component';


export const ROUTER_CONFIG: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'getting-started'},
      {path: 'getting-started', component: GettingStartedComponent, data: {reusable: true}},
      {path: 'guideline/:name', loadChildren: 'app/feature/design-guideline/design-guideline.module#DesignGuidelineModule'},
      {path: 'guideline', redirectTo: 'guideline/principle'},
      {path: 'component/:name', component: ComponentsComponent, data: {reusable: true}},
      {path: 'component', redirectTo: 'component/Accordion'},
    ]
  },
];
