import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { WaitlistComponent } from './waitlist/waitlist.component';
import { PolicyComponent } from './policy/policy.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
        // component: HomeComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'supports',
        component: SupportComponent
    },
    {
        path:'waitlist',
        component: WaitlistComponent
    },
    {
        path:'policy',
        component: PolicyComponent
    },
    {
        path:'contact',
        component: ContactComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
