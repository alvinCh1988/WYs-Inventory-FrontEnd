import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SeriesAddComponent } from './series/series-add/series-add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeriesAddComponent,
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
