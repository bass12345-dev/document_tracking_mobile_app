import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ScannerPage } from './pages/scanner/scanner.page';

const routes: Routes = [
  {
    path: 'user',
    component: HomePage,
    children : [

      { path : 'scanner', component : ScannerPage},

    ]
  },
  {
    path: 'scanner',
    loadChildren: () => import('./pages/scanner/scanner.module').then( m => m.ScannerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
