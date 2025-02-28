import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ReviewsComponent } from './sections/reviews/reviews.component';
import { FaqsComponent } from './sections/faqs/faqs.component';
import { DownloadsComponent } from './sections/downloads/downloads.component';
import { ContactComponent } from './sections/contact/contact.component';
import { StatsComponent } from './sections/stats/stats.component';
import { FeacturesComponent } from './sections/feactures/feactures.component';
import { PricingComponent } from './sections/pricing/pricing.component';
import { NavLinkComponent } from './widgets/nav-link/nav-link.component';
import { OtherfeacturesComponent } from './sections/otherfeactures/otherfeactures.component';
import { FeactureCardComponent } from './widgets/feacture-card/feacture-card.component';
import { CtaComponent } from './sections/cta/cta.component';
import { SupportComponent } from '../pages/support/support.component';
import { WaitlistComponent } from '../pages/waitlist/waitlist.component';
import { WaitformComponent } from './widgets/waitform/waitform.component';
import { ContactformComponent } from './widgets/contactform/contactform.component';
import { MdviewComponent } from './widgets/mdview/mdview.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ReviewsComponent,
    FaqsComponent,
    DownloadsComponent,
    ContactComponent,
    StatsComponent,
    FeacturesComponent,
    PricingComponent,
    NavLinkComponent,
    OtherfeacturesComponent,
    FeactureCardComponent,
    CtaComponent,
    WaitformComponent,
    ContactformComponent,
    MdviewComponent,
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ReviewsComponent,
    FaqsComponent,
    DownloadsComponent,
    ContactComponent,
    StatsComponent,
    FeacturesComponent,
    PricingComponent,
    NavLinkComponent,
    OtherfeacturesComponent,
    FeactureCardComponent,
    CtaComponent,
    WaitformComponent,
    MdviewComponent,
    ContactformComponent
  ]
})
export class ComponentsModule { }
