import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDemoComponent } from './button-demo.component';
import { RebirthNGModule } from 'rebirth-ng';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
  ],
  exports: [
    ButtonDemoComponent
  ],
  declarations: [ButtonDemoComponent],
  providers: [],
  entryComponents: [ButtonDemoComponent]
})
export class ButtonDemoModule {
}
