import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExpandablePanelContentTableComponent } from './expandable-panel-content-table/expandable-panel-content-table.component';
import { TableExpandableComponent } from './table-expandable/table-expandable.component';
import { Card001Component } from './card001/card001.component';
import { AngularMaterialModule } from '../angular-material.module';
import { Datepicker001Component } from './datepicker001/datepicker001.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  declarations: [
    TableExpandableComponent,
    Card001Component,
    ExpandablePanelContentTableComponent,
    Datepicker001Component,
  ],
  exports: [
    Card001Component,
    TableExpandableComponent,
    ExpandablePanelContentTableComponent,
    Datepicker001Component,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
