import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganisationprofilePage } from './organisationprofile.page';

const routes: Routes = [
  {
    path: '',
    component: OrganisationprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganisationprofilePageRoutingModule {}
