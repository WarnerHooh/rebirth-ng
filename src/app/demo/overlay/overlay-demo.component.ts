import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OverlayService } from 'rebirth-ng';

@Component({
  selector: 're-overlay-body-demo',
  template: `
    <div class="spinner">
      <div class="overlay-spinner"></div>
      <div class="text-center">Loading...</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayBodyDemoComponent {

}

@Component({
  selector: 're-overlay-demo',
  templateUrl: './overlay-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayDemoComponent {

  constructor(private  overlayService: OverlayService) {
  }

  openOverlay() {
    this.overlayService.open({ html:
        `<div class="spinner">
          <div class="loader"></div>
          <p>数据加载中</p>
        </div>`
    });
    setTimeout(() => this.overlayService.close(), 5 * 1000);
  }

  openComponentOverlay() {
    this.overlayService.open({ component: OverlayBodyDemoComponent });
    setTimeout(() => this.overlayService.close(), 5 * 1000);
  }
}

