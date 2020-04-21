import { Routes } from '@angular/router';
import { InventoryStatusListComponent } from 'src/app/modules/inventory-status/inventory-status-list/inventory-status-list.component';

export const DashboardRoutes: Routes = [
    {
        path: 'list',
        component: InventoryStatusListComponent,
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
];
