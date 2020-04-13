import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UiCustomizeModule } from './ui-customize/ui-customize.module';

import { AppComponent } from './app.component';
import { UiTestComponent } from './modules/ui-test/ui-test.component';
@NgModule({
  declarations: [
    AppComponent,
    UiTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiCustomizeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
