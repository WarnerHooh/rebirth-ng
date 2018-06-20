import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignGuidelineComponent } from './design-guideline.component';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-accordion';
import { ROUTER_CONFIG } from './design-guideline.route';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  declarations: [
    DesignGuidelineComponent,
  ],
  exports: [
    DesignGuidelineComponent,
  ]
})
export class DesignGuidelineModule {
}
