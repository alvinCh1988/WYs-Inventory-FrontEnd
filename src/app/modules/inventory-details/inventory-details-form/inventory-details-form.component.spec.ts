import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDetailsFormComponent } from './inventory-details-form.component';

describe('InventoryDetailsFormComponent', () => {
  let component: InventoryDetailsFormComponent;
  let fixture: ComponentFixture<InventoryDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
