import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateOpportunityPageRoutingModule } from './create-opportunity-routing.module';

import { CreateOpportunityPage } from './create-opportunity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateOpportunityPageRoutingModule
  ],
  declarations: [CreateOpportunityPage]
})
export class CreateOpportunityPageModule {}
