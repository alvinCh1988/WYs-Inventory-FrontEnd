import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiTestComponent } from './modules/ui-test/ui-test.component';


const routes: Routes = [
  {
    path: 'ui',
    component: UiTestComponent
  },
  {
    path: '',
    redirectTo: '/ui',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/ui',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
