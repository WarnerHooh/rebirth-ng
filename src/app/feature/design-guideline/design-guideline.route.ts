import { Routes } from '@angular/router';
import { DesignGuidelineComponent } from './design-guideline.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '',
    component: DesignGuidelineComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'guideline/principle'
    }]
  },
];
