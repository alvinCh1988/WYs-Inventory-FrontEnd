import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { TableBasicComponent } from "./table-basic/table-basic.component";
import { TreeNodesComponent } from "./tree-nodes/tree-nodes.component";
import { TreeDynamicComponent } from "./tree-dynamic/tree-dynamic.component";
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [
    TableBasicComponent,
    TreeNodesComponent,
    TreeDynamicComponent,
  ],
  // 模組匯入區
  imports: [
    AngularMaterialModule,
  ],
  exports: [
    TableBasicComponent,
    TreeNodesComponent,
    TreeDynamicComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiCustomizeModule {}
