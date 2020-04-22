import { Routes } from '@angular/router';
import { InventoryStatusListComponent } from 'src/app/modules/inventory-status/inventory-status-list/inventory-status-list.component';
import { SeriesAddComponent } from 'src/app/modules/product/series/series-add/series-add.component';

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
            }
        ]
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
];
