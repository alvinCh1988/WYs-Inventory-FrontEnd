import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStatusFormComponent } from './inventory-status-form.component';

describe('InventoryStatusFormComponent', () => {
  let component: InventoryStatusFormComponent;
  let fixture: ComponentFixture<InventoryStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryStatusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
