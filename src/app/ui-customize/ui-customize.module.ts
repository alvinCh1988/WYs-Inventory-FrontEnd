import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { A11yModule } from "@angular/cdk/a11y";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PortalModule } from "@angular/cdk/portal";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatExpansionModule } from "@angular/material/expansion";

import { FormSelectComponent } from "./form-select/form-select.component";
import { FormRadioComponent } from "./form-radio/form-radio.component";
import { FormDatepickerComponent } from "./form-datepicker/form-datepicker.component";
import { FormCheckboxComponent } from "./form-checkbox/form-checkbox.component";
import { FormInputComponent } from "./form-input/form-input.component";
import { FormSliderComponent } from "./form-slider/form-slider.component";
import { TableBasicComponent } from "./table-basic/table-basic.component";
import { TableExpandableComponent } from "./table-expandable/table-expandable.component";
import { PanelExpansionBasicComponent } from "./panel-expansion-basic/panel-expansion-basic.component";
import { TreeNodesComponent } from "./tree-nodes/tree-nodes.component";
import { TreeDynamicComponent } from "./tree-dynamic/tree-dynamic.component";

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
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
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
export class UiCustomizeModule {}
