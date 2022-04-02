import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperHeaderComponent } from './super-header/super-header.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SuperFooterComponent } from './super-footer/super-footer.component';
import { FaqComponent } from './faq/faq.component';
import { UsecaseComponent } from './usecase/usecase.component';
import { OpinionComponent } from './opinion/opinion.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { RoadmapComponent } from './roadmap/roadmap.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeaderComponent,
    HeaderComponent,
    FooterComponent,
    SuperFooterComponent,
    FaqComponent,
    UsecaseComponent,
    OpinionComponent,
    BodyComponent,
    DashboardComponent,
    RoadmapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
