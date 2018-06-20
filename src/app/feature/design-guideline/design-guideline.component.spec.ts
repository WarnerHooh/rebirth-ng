import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignGuidelineComponent } from './design-guideline.component';

describe('DesignGuidelineComponent', () => {
  let component: DesignGuidelineComponent;
  let fixture: ComponentFixture<DesignGuidelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignGuidelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignGuidelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
