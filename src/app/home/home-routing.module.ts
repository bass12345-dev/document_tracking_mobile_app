import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ScannerPage } from './pages/scanner/scanner.page';
import { IncomingPage } from './pages/incoming/incoming.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ReceivedPage } from './pages/received/received.page';
import { ForwardedPage } from './pages/forwarded/forwarded.page';

const routes: Routes = [
  {
    path: 'user',
    component: HomePage,
    children : [

      { path : 'scanner', component : ScannerPage},
      { path : 'incoming', component : IncomingPage},
      { path : 'dashboard', component : DashboardPage},
      { path : 'received', component : ReceivedPage},
      { path : 'forwarded', component : ForwardedPage},

    ]
  },
  {
    path: 'scanner',
    loadChildren: () => import('./pages/scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'incoming',
    loadChildren: () => import('./pages/incoming/incoming.module').then( m => m.IncomingPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'received',
    loadChildren: () => import('./pages/received/received.module').then( m => m.ReceivedPageModule)
  },
  {
    path: 'forwarded',
    loadChildren: () => import('./pages/forwarded/forwarded.module').then( m => m.ForwardedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
