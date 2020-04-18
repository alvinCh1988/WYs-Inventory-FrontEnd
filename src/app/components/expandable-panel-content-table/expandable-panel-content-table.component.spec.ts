import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandablePanelContentTableComponent } from './expandable-panel-content-table.component';

describe('ExpandablePanelContentTableComponent', () => {
  let component: ExpandablePanelContentTableComponent;
  let fixture: ComponentFixture<ExpandablePanelContentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandablePanelContentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandablePanelContentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
