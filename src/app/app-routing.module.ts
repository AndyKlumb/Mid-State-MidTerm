import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DeployComponent } from './deploy/deploy.component';
import { TroopersComponent } from './troopers/troopers.component';
import { TrooperDetailComponent } from './trooper-detail/trooper-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'deploy', component: DeployComponent },
  { path: 'detail/:id', component: TrooperDetailComponent },
  { path: 'troopers', component: TroopersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
