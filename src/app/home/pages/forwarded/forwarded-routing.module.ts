import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForwardedPage } from './forwarded.page';

const routes: Routes = [
  {
    path: '',
    component: ForwardedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForwardedPageRoutingModule {}
