import { Component, ComponentFactoryResolver, ChangeDetectionStrategy} from '@angular/core';
import { ModalService } from 'rebirth-ng';
import { ModalFormComponent } from './modal-form.component';

@Component({
  selector: 're-modal-demo',
  templateUrl: 'modal-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalDemoComponent {

  constructor(private modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  openModal() {
    this.modalService.open<string>({
      component: ModalFormComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: {
        text: 'I am from resolve data!'
      }
    })
      .subscribe(data => {
        console.log('Rebirth Modal -> Get ok with result:', data);
      }, error => {
        console.error('Rebirth Modal -> Get cancel with result:', error);
      });
  }
}
