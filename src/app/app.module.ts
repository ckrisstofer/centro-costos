import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerticalNavBarComponent } from './vertical-nav-bar/vertical-nav-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalNavBarComponent,
    TopBarComponent,
    CenterContentComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
