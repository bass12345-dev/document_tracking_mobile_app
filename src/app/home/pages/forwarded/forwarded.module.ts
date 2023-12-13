import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForwardedPageRoutingModule } from './forwarded-routing.module';

import { ForwardedPage } from './forwarded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForwardedPageRoutingModule
  ],
  declarations: [ForwardedPage]
})
export class ForwardedPageModule {}
