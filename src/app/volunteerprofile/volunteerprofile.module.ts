import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolunteerprofilePageRoutingModule } from './volunteerprofile-routing.module';

import { VolunteerprofilePage } from './volunteerprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolunteerprofilePageRoutingModule
  ],
  declarations: [VolunteerprofilePage]
})
export class VolunteerprofilePageModule {}
