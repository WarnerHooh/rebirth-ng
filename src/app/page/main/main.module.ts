import { NgModule } from '@angular/core';

import { AppComponent } from '../../app.component';
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
} from '../../demo';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
// NoopAnimationsModule
import { ROUTER_CONFIG } from './main.route';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { RebirthNGModule, RebirthRouterReuseStrategy } from 'rebirth-ng';
import { ComponentsComponent } from '../../feature/components';
import { AccordionModule } from 'ngx-accordion';
import { GettingStartedComponent } from '../../feature/getting-started';
import { ShowcaseComponent } from '../../feature/show-case';
import { HomeComponent } from '../../feature/home/home.component';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    GettingStartedComponent,
    ShowcaseComponent,
    ComponentsComponent,
    HomeComponent,
    MainComponent,
  ],
  imports: [
    SharedModule,
    RebirthNGModule,
    RouterModule.forChild(ROUTER_CONFIG),
    // ServiceWorkerModule.register('/rebirth-ng/ngsw-worker.js', { enabled: environment.production }),
    AccordionModule,
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
})
export class MainModule {
}


