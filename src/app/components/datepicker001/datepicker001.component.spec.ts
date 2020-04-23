import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datepicker001Component } from './datepicker001.component';

describe('Datepicker001Component', () => {
  let component: Datepicker001Component;
  let fixture: ComponentFixture<Datepicker001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datepicker001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datepicker001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
