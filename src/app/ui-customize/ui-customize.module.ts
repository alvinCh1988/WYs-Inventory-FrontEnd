import { FormSelectComponent } from './form-select/form-select.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormDatepickerComponent } from './form-datepicker/form-datepicker.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormInputComponent } from './form-input/form-input.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

import { FormSliderComponent } from './form-slider/form-slider.component';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { TableExpandableComponent } from './table-expandable/table-expandable.component';
import { PanelExpansionBasicComponent } from './panel-expansion-basic/panel-expansion-basic.component';
import { TreeNodesComponent } from './tree-nodes/tree-nodes.component';
import { TreeDynamicComponent } from './tree-dynamic/tree-dynamic.component';

@NgModule({
  declarations: [
    TableBasicComponent,
    TableExpandableComponent,
    FormInputComponent,
    FormCheckboxComponent,
    FormDatepickerComponent,
    FormRadioComponent,
    FormSelectComponent,
    FormSliderComponent,
    PanelExpansionBasicComponent,
    TreeNodesComponent,
    TreeDynamicComponent,
  ],
  // 模組匯入區
  imports: [
    // form
    MatAutocompleteModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    // Dialog
    MatDialogModule,
    // table
    MatTableModule,
    // else
    MatExpansionModule,
    MatTreeModule,
    MatIconModule,
    // else
    BrowserAnimationsModule,
  ],
  exports: [
    // Component
    TableBasicComponent,
    TableExpandableComponent,
    FormInputComponent,
    FormCheckboxComponent,
    FormDatepickerComponent,
    FormRadioComponent,
    FormSelectComponent,
    FormSliderComponent,
    PanelExpansionBasicComponent,
    TreeNodesComponent,
    TreeDynamicComponent,

    // Module
    MatAutocompleteModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,

    MatDialogModule,
  ],
  providers: [],

})
export class UiCustomizeModule { }
