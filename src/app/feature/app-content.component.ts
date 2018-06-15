import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { DemoConfigService } from '../shared/demo';
import { DocumentRef } from 'rebirth-ng';
import { DomSanitizer } from '@angular/platform-browser';


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
              private domSanitizer: DomSanitizer) {

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
          cmp.readMe = this.domSanitizer.bypassSecurityTrustHtml(cmp.readMe);
          return cmp;
        });
    });
  }
}

