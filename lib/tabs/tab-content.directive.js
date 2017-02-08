var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, TemplateRef } from '@angular/core';
var TabContentDirective = (function () {
    function TabContentDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return TabContentDirective;
}());
TabContentDirective = __decorate([
    Directive({
        selector: 'template[reTabContent]',
    }),
    __metadata("design:paramtypes", [TemplateRef])
], TabContentDirective);
export { TabContentDirective };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/tabs/tab-content.directive.js.map