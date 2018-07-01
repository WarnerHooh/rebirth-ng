import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { RebirthNGConfig } from 'rebirth-ng';
import { REBIRTH_NG_I18N_ZHCN } from 'rebirth-ng';

@Component({
  selector: 're-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  components: any[];
  pkg = require('../../node_modules/rebirth-ng/package.json');
  route: string;

  constructor(private rebirthConfig: RebirthNGConfig,
              private viewContainerRef: ViewContainerRef) {
    this.rebirthConfig.rootContainer = this.viewContainerRef;
    this.rebirthConfig.extend(REBIRTH_NG_I18N_ZHCN);  // i18n
  }
}
