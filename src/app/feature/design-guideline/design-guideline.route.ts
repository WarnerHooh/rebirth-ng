import { Routes } from '@angular/router';
import { DesignGuidelineComponent } from './design-guideline.component';
import { PrincipleComponent } from './principle/principle.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '' ,
    component: DesignGuidelineComponent,
    children: [
      {path: 'design-guideline/principle', component: PrincipleComponent}
    ]
  },
];
