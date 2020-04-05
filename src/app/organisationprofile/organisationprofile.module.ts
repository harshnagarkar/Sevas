import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganisationprofilePageRoutingModule } from './organisationprofile-routing.module';

import { OrganisationprofilePage } from './organisationprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganisationprofilePageRoutingModule
  ],
  declarations: [OrganisationprofilePage]
})
export class OrganisationprofilePageModule {}
