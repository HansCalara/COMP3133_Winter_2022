import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

const routes: Routes = [
  {
    path: 'missiondetails/:id',
    component: MissiondetailsComponent,
    pathMatch: 'full',
  },
  {
    path: 'mission',
    component: MissionlistComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'mission',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
