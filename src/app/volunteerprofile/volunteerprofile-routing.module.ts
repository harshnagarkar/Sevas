import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolunteerprofilePage } from './volunteerprofile.page';

const routes: Routes = [
  {
    path: '',
    component: VolunteerprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteerprofilePageRoutingModule {}
