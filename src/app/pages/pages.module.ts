import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { SupportComponent } from './support/support.component';
import { WaitlistComponent } from './waitlist/waitlist.component';
import { ContactComponent } from './contact/contact.component';
import { PolicyComponent } from './policy/policy.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    SupportComponent,
    WaitlistComponent,
    ContactComponent,
    PolicyComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
