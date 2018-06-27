import { Routes } from '@angular/router';
import { PortalComponent } from './page/portal/portal.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/portal'},
  {path: 'portal', component: PortalComponent},
  {path: 'design', loadChildren: 'app/page/main/main.module#MainModule'},
];
