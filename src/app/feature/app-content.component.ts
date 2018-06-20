import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { DemoConfigService } from '../shared/demo';
import { DocumentRef } from 'rebirth-ng';
import { DomSanitizer } from '@angular/platform-browser';
import { highlightCodeBlock } from '../shared/doc/hightlight';

@Component({
  selector: 're-app-content', // tslint:disable-line
  templateUrl: './app-content.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppContentComponent implements OnInit {
  coreComponents: any;
  currentComponent: any;

  constructor(private activatedRoute: ActivatedRoute,
              private documentRef: DocumentRef,
              private demoConfigService: DemoConfigService,
              private domSanitizer: DomSanitizer,
              private renderer: Renderer2) {

    this.coreComponents = this.demoConfigService.components
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.documentRef.body.scrollTop = 0;

      this.currentComponent = this.demoConfigService.components
        .filter(cmp => {
          return cmp.name === params.name;
        })
        .map((cmp) => {
          cmp.html = highlightCodeBlock(this.renderer, cmp.html);
          cmp.ts = highlightCodeBlock(this.renderer, cmp.ts);
          cmp.readMe = this.domSanitizer.bypassSecurityTrustHtml(cmp.readMe);

          const dataJson = cmp.data ? JSON.stringify(cmp.data, null, 2) : '';
          cmp.data = highlightCodeBlock(this.renderer, dataJson);
          return cmp;
        });
    });
  }
}

