import { Routes } from '@angular/router';
import { InventoryStatusListComponent } from 'src/app/modules/inventory-status/inventory-status-list/inventory-status-list.component';
import { SeriesAddComponent } from 'src/app/modules/product/series/series-add/series-add.component';
import { InventoryAddComponent } from 'src/app/modules/product/inventory/inventory-add/inventory-add.component';
import { PurchaseAddComponent } from 'src/app/modules/purchase/purchase-add/purchase-add.component';
import { PurchaseViewTableComponent } from 'src/app/modules/purchase/purchase-view-table/purchase-view-table.component';

export const DashboardRoutes: Routes = [
  {
    path: 'list',
    component: InventoryStatusListComponent,
  },
  {
    path: 'product',
    children: [
      {
        path: 'series-add',
        component: SeriesAddComponent,
      },
      {
        path: 'inventory-add',
        component: InventoryAddComponent,
      },
    ]
  },
  {
    path: 'purchase',
    children: [
      {
        path: 'purchase-add',
        component: PurchaseAddComponent,
      },
      {
        path: 'purchase-view-table',
        component: PurchaseViewTableComponent,
      },
    ]
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];
