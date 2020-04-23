import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseViewTableComponent } from './purchase-view-table.component';

describe('PurchaseViewTableComponent', () => {
  let component: PurchaseViewTableComponent;
  let fixture: ComponentFixture<PurchaseViewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseViewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
