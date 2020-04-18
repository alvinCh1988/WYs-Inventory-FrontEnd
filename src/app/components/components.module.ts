import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { ExpandablePanelContentTableComponent } from './expandable-panel-content-table/expandable-panel-content-table.component';
import { TableExpandableComponent } from './expandable-panel-content-table/table-expandable/table-expandable.component';
import { Card001Component } from './expandable-panel-content-table/card001/card001.component';


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
    ExpandablePanelContentTableComponent,
  ]
})
export class ComponentsModule { }
