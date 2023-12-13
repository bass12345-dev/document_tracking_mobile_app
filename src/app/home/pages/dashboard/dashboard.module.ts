import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { MatCardModule } from '@angular/material/card';
import { LogoutComponent } from 'src/app/components/logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    MatCardModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
