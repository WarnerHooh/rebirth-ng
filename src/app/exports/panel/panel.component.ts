import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Optional, OnInit, Host,
  OnDestroy
} from '@angular/core';
import { PanelGroup } from './panel-group.model';

@Component({
  moduleId: module.id,
  selector: 're-panel,re-accordion-item',
  templateUrl: './panel.component.html',
  exportAs: 'panel',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit, OnDestroy {
  @Input() id;
  @Input() type: 'default'| 'success' | 'info' | 'warning' | 'danger' = 'default';
  @Input() canClose = false;
  @Input() allowCollapse = false;
  @Input() isCollapsed = false;
  @Output() close = new EventEmitter<any>();
  @Output() collapse = new EventEmitter<any>();

  constructor(@Optional() @Host() private  panelGroup: PanelGroup) {

  }

  ngOnInit(): void {
    if (this.panelGroup) {
      this.panelGroup.$addItem(this);
    }
  }

  onClose($event: Event) {
    $event.stopPropagation();
    this.close.emit(this);
  }

  onCollapse() {
    if (this.allowCollapse) {
      this.isCollapsed = !this.isCollapsed;
      this.collapse.emit(this.isCollapsed);
    }
  }

  ngOnDestroy(): void {
    if (this.panelGroup) {
      this.panelGroup.$removeItem(this);
    }
  }
}

// .panel-open