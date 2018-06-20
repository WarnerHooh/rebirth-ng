import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleComponent } from './principle.component';

describe('PrincipleComponent', () => {
  let component: PrincipleComponent;
  let fixture: ComponentFixture<PrincipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
