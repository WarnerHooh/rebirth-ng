import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import {
  ModalDemoModule,
  DialogDemoModule,
  AlertBoxDemoModule,
  BadgeDemoModule,
  PaginationDemoModule,
  PagerDemoModule,
  PanelDemoModule,
  AccordionDemoModule,
  ActionButtonDemoModule,
  RatingDemoModule,
  TabsDemoModule,
  TooltipDemoModule,
  PopoverDemoModule,
  DatePickerDemoModule,
  BreadcrumbsDemoModule,
  ProgressBarDemoModule,
  SelectButtonDemoModule,
  OverlayDemoModule,
  CarouselDemoModule,
  SwitchDemoModule,
  MenuBarDemoModule,
  AutoCompleteDemoModule,
  FlowStepDemoModule,
  InfiniteScrollDemoModule,
  DataTableDemoModule,
  DraggableDemoModule,
  FileUploadDemoModule,
  TimePickerDemoModule,
  RadioGroupDemoModule,
  CheckboxGroupDemoModule,
  ValidatorsDemoModule,
  NotifyDemoModule,
  TreeViewDemoModule,
  EllipsisDemoModule,
  TagsDemoModule,
  ImageUploadDemoModule,
  SelectDemoModule,
  SliderDemoModule,
  ButtonDemoModule,
  InputDemoModule,
  // module declare
} from './demo';
import { RebirthNGModule } from 'rebirth-ng';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
// NoopAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTER_CONFIG } from './app.route';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RebirthRouterReuseStrategy } from 'rebirth-ng';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ComponentsComponent } from './feature/components';
import { AccordionModule } from 'ngx-accordion';
import { GettingStartedComponent } from './feature/getting-started';
import { ShowcaseComponent } from './feature/show-case';
import { DesignGuidelineModule } from './feature/design-guideline/design-guideline.module';

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
    ShowcaseComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule,
    // ServiceWorkerModule.register('/rebirth-ng/ngsw-worker.js', { enabled: environment.production }),
    AccordionModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(ROUTER_CONFIG),
    SharedModule.forRoot(),
    RebirthNGModule.forRoot(),
    BrowserAnimationsModule,
    DesignGuidelineModule,
    ModalDemoModule,
    DialogDemoModule,
    PagerDemoModule,
    PaginationDemoModule,
    AlertBoxDemoModule,
    BadgeDemoModule,
    PanelDemoModule,
    AccordionDemoModule,
    ActionButtonDemoModule,
    RatingDemoModule,
    TabsDemoModule,
    TooltipDemoModule,
    PopoverDemoModule,
    DatePickerDemoModule,
    BreadcrumbsDemoModule,
    ProgressBarDemoModule,
    SelectButtonDemoModule,
    OverlayDemoModule,
    CarouselDemoModule,
    SwitchDemoModule,
    MenuBarDemoModule,
    AutoCompleteDemoModule,
    FlowStepDemoModule,
    DataTableDemoModule,
    InfiniteScrollDemoModule,
    DraggableDemoModule,
    FileUploadDemoModule,
    TimePickerDemoModule,
    RadioGroupDemoModule,
    CheckboxGroupDemoModule,
    ValidatorsDemoModule,
    NotifyDemoModule,
    TreeViewDemoModule,
    EllipsisDemoModule,
    TagsDemoModule,
    ImageUploadDemoModule,
    SelectDemoModule,
    SliderDemoModule,
    ButtonDemoModule,
    InputDemoModule,
    // module declare
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: RouteReuseStrategy, useClass: RebirthRouterReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


