import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDemoComponent } from './input-demo.component';
import { RebirthNGModule } from 'rebirth-ng';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
  ],
  exports: [
    InputDemoComponent
  ],
  declarations: [InputDemoComponent],
  providers: [],
  entryComponents: [InputDemoComponent]
})
export class InputDemoModule {
}
