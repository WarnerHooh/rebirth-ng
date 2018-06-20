import { Component, OnInit } from '@angular/core';

@Component({
  selector: 're-design-guideline',
  templateUrl: './design-guideline.component.html',
  styleUrls: ['./design-guideline.component.scss']
})
export class DesignGuidelineComponent implements OnInit {

  guideline: any[];

  constructor() {
    this.guideline = [
      {name: 'principle', title: '原则'},
      {name: 'layout', title: '布局'},
      {name: 'color', title: '颜色'},
      {name: 'icon', title: '图标'},
      {name: 'prototype', title: '排版'},
      {name: 'text', title: '文案'},
    ];
  }

  ngOnInit() {
  }

}
