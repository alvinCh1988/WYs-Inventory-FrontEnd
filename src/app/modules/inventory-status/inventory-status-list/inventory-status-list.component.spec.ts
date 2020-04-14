import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStatusListComponent } from './inventory-status-list.component';

describe('InventoryStatusListComponent', () => {
  let component: InventoryStatusListComponent;
  let fixture: ComponentFixture<InventoryStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
