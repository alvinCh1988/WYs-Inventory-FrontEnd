import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiTestComponent } from './modules/ui-test/ui-test.component';
import { InventoryStatusListComponent } from './modules/inventory-status/inventory-status-list/inventory-status-list.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'status-list',
    component: InventoryStatusListComponent

  },
  {
    path: 'ui',
    component: UiTestComponent
  },
  {
    path: 'dash-board',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'status-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'status-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
