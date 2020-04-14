import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelExpansionBasicComponent } from './panel-expansion-basic.component';

describe('PanelExpansionBasicComponent', () => {
  let component: PanelExpansionBasicComponent;
  let fixture: ComponentFixture<PanelExpansionBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelExpansionBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelExpansionBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
