import { Component, ViewContainerRef } from '@angular/core';
import { REBIRTH_NG_I18N_ZHCN, RebirthNGConfig } from 'rebirth-ng';

@Component({
  selector: 're-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  components: any[];
  pkg = require('../../../../node_modules/rebirth-ng/package.json');
  route: string;

  constructor(private rebirthConfig: RebirthNGConfig,
              private viewContainerRef: ViewContainerRef) {

    this.rebirthConfig.rootContainer = this.viewContainerRef;
    this.rebirthConfig.extend(REBIRTH_NG_I18N_ZHCN);  // i18n
  }

}
