import { Component, OnInit, Renderer2 } from '@angular/core';
import { DemoConfigService } from '../../shared/demo/demo-config.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentRef } from 'rebirth-ng';

@Component({
  selector: 're-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['../design-guideline/design-guideline.component.scss', './getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
  gettingStarted: any;

  constructor(private demoConfigService: DemoConfigService, private domSanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.gettingStarted = this.domSanitizer.bypassSecurityTrustHtml(this.demoConfigService.gettingStarted.readMe);
  }

}
