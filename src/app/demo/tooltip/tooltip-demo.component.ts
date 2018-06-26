import { Component, ViewChild } from '@angular/core';
import { TooltipDirective } from 'rebirth-ng';

@Component({
  selector: 're-tooltip-demo',
  templateUrl: './tooltip-demo.component.html'
})
export class TooltipDemoComponent {
  setting = { name: 'rebirth tooltip', placement: 'top', trigger: 'hover' };
  github = 'https://github.com/greengerong/rebirth-ng';

  @ViewChild('tooltip') tooltip: TooltipDirective;
  tooltipSwitch: boolean;

  toggleToolTip() {
    if (this.tooltipSwitch) {
      this.tooltip.show();
    } else {
      this.tooltip.hide();
    }
  }

}
