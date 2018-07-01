import { Modal, ModalService } from 'rebirth-ng';
import { Component, ComponentFactoryResolver, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 're-modal-form',
  template: `<div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="cancel()">
      <span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title">I'm a rebirth modal!</h4>
  </div>

  <div class="modal-body">
    Modal in Modal {{context.text}}
  </div>

  <div class="modal-footer">
    <button type="button" class="btn btn-primary" (click)="ok()">Ok</button>
    <button type="button" class="btn btn-warning" (click)="cancel()">Cancel</button>
  </div>
  `,
})
export class ModalInnerComponent implements Modal {
  context: any;
  dismiss: EventEmitter<string>;

  ok() {
    this.dismiss.emit(this.context.text);
  }

  cancel() {
    this.dismiss.error(this.context.text);
  }
}

@Component({
  selector: 're-modal-form',
  templateUrl: 'modal-form.component.html',
  styleUrls: ['./modal-form-component.scss'],
})
export class ModalFormComponent implements Modal, OnInit {

  context: { text: string };
  dismiss: EventEmitter<string>;
  options: string[];

  constructor(private modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.options = [
      '示例 1',
      '示例 2',
      '示例 3',
      '示例 4',
      '示例 5',
      '示例 6',
      '示例 7',
      '示例 8',
      '示例 9',
      '示例 10',
    ];
  }

  ngOnInit(): void {
    console.log('ModalFormComponent init....');
  }

  show() {
    this.modalService.open<string>({
      component: ModalInnerComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: {
        text: '🚀'
      },
      size: 'sm'
    })
      .subscribe(data => {
        console.log('Rebirth Modal -> Get ok with result:', data);
      }, error => {
        console.error('Rebirth Modal -> Get cancel with result:', error);
      });
  }

  ok() {
    this.dismiss.emit(this.context.text);
  }

  cancel() {
    this.dismiss.error(this.context.text);
  }
}
