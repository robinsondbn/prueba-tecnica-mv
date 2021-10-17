import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonModule } from './json/json.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
