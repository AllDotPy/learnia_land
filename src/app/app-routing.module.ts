import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './components/widgets/maintenance/maintenance.component';
import { Http404Component } from './components/widgets/http404/http404.component';

const routes: Routes = [
    {
        path:'',
        // component : MainComponent,
        loadChildren: () => import(
            './pages/pages.module'
          ).then(
            (m) => m.PagesModule
          ),
    },
    {
        path:'maintenance',
        component : MaintenanceComponent,
    },
    {path: '**', component: Http404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
