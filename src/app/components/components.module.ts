import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExpandablePanelContentTableComponent } from './expandable-panel-content-table/expandable-panel-content-table.component';
import { TableExpandableComponent } from './table-expandable/table-expandable.component';
import { Card001Component } from './card001/card001.component';
import { AngularMaterialModule } from '../angular-material.module';


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
  ],
  exports: [
    Card001Component,
    TableExpandableComponent,
    ExpandablePanelContentTableComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
