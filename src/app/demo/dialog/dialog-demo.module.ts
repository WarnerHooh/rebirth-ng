import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DialogDemoComponent } from './dialog-demo.component';
import { RebirthNGModule } from '../../exports';

@NgModule({
  imports: [
    RebirthNGModule,
    ReactiveFormsModule
  ],
  declarations: [
    DialogDemoComponent
  ]
  ,
  exports: [
    DialogDemoComponent
  ],
  providers: [],
  entryComponents: [
    DialogDemoComponent
  ]
})
export class DialogDemoModule {
}
