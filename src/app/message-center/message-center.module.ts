import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageCenterPageRoutingModule } from './message-center-routing.module';

import { MessageCenterPage } from './message-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageCenterPageRoutingModule
  ],
  declarations: [MessageCenterPage]
})
export class MessageCenterPageModule {}
