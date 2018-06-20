import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignGuidelineComponent } from './design-guideline.component';
import { RouterModule } from '@angular/router';
import { ROUTER_CONFIG } from './design-guideline.route';
import { AccordionModule } from 'ngx-accordion';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    RouterModule.forChild(ROUTER_CONFIG),
  ],
  declarations: [
    DesignGuidelineComponent,
  ],
  exports: [
    DesignGuidelineComponent,
  ]
})
export class DesignGuidelineModule { }
