import { NgModule } from '@angular/core';

import { ModalDemoComponent } from './modal-demo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModalDemoComponent
  ],
  declarations: [
    ModalDemoComponent,
    // ModalFormComponent
  ],
  entryComponents: [
    ModalDemoComponent,
    // ModalFormComponent,
  ]
})
export class ModalDemoModule {
}
