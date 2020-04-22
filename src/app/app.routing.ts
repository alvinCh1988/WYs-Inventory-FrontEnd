import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiTestComponent } from './modules/ui-test/ui-test.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'ui',
    component: UiTestComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/dashboard/dashboard.module').then(m => m.DashboardModule)
    }]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: []
})
export class AppRoutingModule { }
