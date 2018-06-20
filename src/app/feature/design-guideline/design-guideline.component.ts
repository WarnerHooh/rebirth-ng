import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 're-design-guideline',
  templateUrl: './design-guideline.component.html',
  styleUrls: ['./design-guideline.component.scss']
})
export class DesignGuidelineComponent implements OnInit {

  guideline: any[];
  htmlContent: SafeHtml;

  constructor(private activatedRoute: ActivatedRoute, private domSanitizer: DomSanitizer) {
    this.guideline = [
      {name: 'principle', title: '原则', html: require('!html-loader!markdown-loader!./guide/principle.md')},
      {name: 'layout', title: '布局', html: require('!html-loader!markdown-loader!./guide/layout.md')},
      {name: 'color', title: '颜色', html: require('!html-loader!markdown-loader!./guide/color.md')},
      {name: 'icon', title: '图标', html: require('!html-loader!markdown-loader!./guide/icon.md')},
      {name: 'prototype', title: '排版', html: require('!html-loader!markdown-loader!./guide/prototype.md')},
      {name: 'text', title: '文案', html: require('!html-loader!markdown-loader!./guide/text.md')},
    ];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const name = params.name || 'principle';
      const guide = this.guideline.find(it => it.name.toLowerCase() === name.toLowerCase()) || {
        html: `<div class="not-found">Page not found!</div>`
      };
      this.htmlContent = this.domSanitizer.bypassSecurityTrustHtml(guide.html);
    });
  }

}
