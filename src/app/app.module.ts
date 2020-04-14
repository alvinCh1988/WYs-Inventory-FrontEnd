import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UiCustomizeModule } from './ui-customize/ui-customize.module';

import { AppComponent } from './app.component';
import { UiTestComponent } from './modules/ui-test/ui-test.component';
import { InventoryStatusListComponent } from './modules/inventory-status/inventory-status-list/inventory-status-list.component';
import { InventoryStatusFormComponent } from './modules/inventory-status/inventory-status-form/inventory-status-form.component';
import { InventoryDetailsListComponent } from './modules/inventory-details/inventory-details-list/inventory-details-list.component';
import { InventoryDetailsFormComponent } from './modules/inventory-details/inventory-details-form/inventory-details-form.component';
import { PurchaseListComponent } from './modules/purchase/purchase-list/purchase-list.component';
import { PurchaseFormComponent } from './modules/purchase/purchase-form/purchase-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UiTestComponent,
    InventoryStatusListComponent,
    InventoryStatusFormComponent,
    InventoryDetailsListComponent,
    InventoryDetailsFormComponent,
    PurchaseListComponent,
    PurchaseFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiCustomizeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
