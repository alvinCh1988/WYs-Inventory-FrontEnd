import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { UiCustomizeModule } from './ui-customize/ui-customize.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UiTestComponent } from './modules/ui-test/ui-test.component';
import { InventoryStatusListComponent } from './modules/inventory-status/inventory-status-list/inventory-status-list.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

import { AngularMaterialModule } from './angular-material.module';
import { ComponentsModule } from './components/components.module';
import { ProductModule } from './modules/product/product.module';
import { PurchaseModule } from './modules/purchase/purchase.module';

@NgModule({
  declarations: [
    AppComponent,
    UiTestComponent,
    InventoryStatusListComponent,
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
    ProductModule,
    PurchaseModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
