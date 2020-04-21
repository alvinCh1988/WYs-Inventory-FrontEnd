import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { UiCustomizeModule } from './ui-customize/ui-customize.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UiTestComponent } from './modules/ui-test/ui-test.component';
import { InventoryStatusListComponent } from './modules/inventory-status/inventory-status-list/inventory-status-list.component';
import { InventoryStatusFormComponent } from './modules/inventory-status/inventory-status-form/inventory-status-form.component';
import { InventoryDetailsListComponent } from './modules/inventory-details/inventory-details-list/inventory-details-list.component';
import { InventoryDetailsFormComponent } from './modules/inventory-details/inventory-details-form/inventory-details-form.component';
import { PurchaseListComponent } from './modules/purchase/purchase-list/purchase-list.component';
import { PurchaseFormComponent } from './modules/purchase/purchase-form/purchase-form.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

import { AngularMaterialModule } from './angular-material.module';
import { ComponentsModule } from './components/components.module';

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
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiCustomizeModule,
    HttpClientModule,
    AngularMaterialModule,
    RouterModule,
    ComponentsModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
