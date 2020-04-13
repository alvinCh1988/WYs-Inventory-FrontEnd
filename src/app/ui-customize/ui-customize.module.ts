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

import { MatTableModule } from '@angular/material/table';

import { TableExpandableComponent } from './table-expandable/table-expandable.component';
import { FormSliderComponent } from './form-slider/form-slider.component';

@NgModule({
  declarations: [
    TableExpandableComponent,
    FormInputComponent,
    FormCheckboxComponent,
    FormDatepickerComponent,
    FormRadioComponent,
    FormSelectComponent,
    FormSliderComponent,
  ],
  imports: [
    //form
    MatAutocompleteModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    //table
    MatTableModule,
    //else
    BrowserAnimationsModule,
  ],
  exports: [
    //form Component
    TableExpandableComponent,
    FormInputComponent,
    FormCheckboxComponent,
    FormDatepickerComponent,
    FormRadioComponent,
    FormSelectComponent,
    FormSliderComponent,

    //form Module
    MatAutocompleteModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule
  ],
  providers: [],

})
export class UiCustomizeModule { }
