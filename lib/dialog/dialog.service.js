var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { AlertDialogComponent } from './alert-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';
var DialogService = (function () {
    function DialogService(modalService, componentFactoryResolver) {
        this.modalService = modalService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    DialogService.prototype.alert = function (dialogOptions) {
        return this.modalService.open({
            component: AlertDialogComponent,
            componentFactoryResolver: this.componentFactoryResolver,
            resolve: dialogOptions,
            modalClass: dialogOptions.cssClass
        });
    };
    DialogService.prototype.confirm = function (dialogOptions) {
        return this.modalService.open({
            component: ConfirmDialogComponent,
            componentFactoryResolver: this.componentFactoryResolver,
            resolve: dialogOptions,
            modalClass: dialogOptions.cssClass
        });
    };
    return DialogService;
}());
DialogService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ModalService, ComponentFactoryResolver])
], DialogService);
export { DialogService };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/dialog/dialog.service.js.map