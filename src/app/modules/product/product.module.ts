import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormsModule } from '@angular/forms';
import { SeriesAddComponent } from './series/series-add/series-add.component';
import { InventoryAddComponent } from './inventory/inventory-add/inventory-add.component';

@NgModule({
  declarations: [
    SeriesAddComponent,
    InventoryAddComponent,
  ],
  // 模組匯入區
  imports: [
    FormsModule,
    AngularMaterialModule,
  ],
  exports: [
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModule { }
