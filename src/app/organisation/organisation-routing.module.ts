import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganisationPage } from './organisation.page';

const routes: Routes = [
  {
    path: '',
    component: OrganisationPage,
    children: [
      {
        path: 'scheduler',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../opportunities/opportunities.module').then(m => m.OpportunitiesPageModule)
          }
        ]
      },
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../organisationprofile/organisationprofile.module').then(m => m.OrganisationprofilePageModule)
          }
        ]
      },
      {
        path: 'messagecenter',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../message-center/message-center.module').then(m => m.MessageCenterPageModule)
          }
        ]
      },
      {
        path: 'createopportunity',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../create-opportunity/create-opportunity.module').then(m => m.CreateOpportunityPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/org/dashboard',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganisationPageRoutingModule {}
