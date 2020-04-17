import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import AuthVolunteer from "./authvol"
const routes: Routes = [
  {
    path: 'volunteer',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    // canActivate: [AuthVolunteer]
  },
  {
    path: 'org',
    loadChildren: () => import('./organisation/organisation.module').then(m => m.OrganisationPageModule)
  },
  // {
  //   path: 'volunteerprofile',
  //   loadChildren: () => import('./volunteerprofile/volunteerprofile.module').then( m => m.VolunteerprofilePageModule)
  // },
  // {
  //   path: 'organisationprofile',
  //   loadChildren: () => import('./organisationprofile/organisationprofile.module').then( m => m.OrganisationprofilePageModule)
  // },
  // {
  //   path: 'message-center',
  //   loadChildren: () => import('./message-center/message-center.module').then( m => m.MessageCenterPageModule)
  // },
  // {
  //   path: 'opportunities',
  //   loadChildren: () => import('./opportunities/opportunities.module').then( m => m.OpportunitiesPageModule)
  // },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  // {
  //   path: 'create-opportunity',
  //   loadChildren: () => import('./create-opportunity/create-opportunity.module').then( m => m.CreateOpportunityPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  }
  // {
  //   path: 'changepassword',
  //   loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  // },
  // {
  //   path: 'organisation',
  //   loadChildren: () => import('./organisation/organisation.module').then( m => m.OrganisationPageModule)
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
