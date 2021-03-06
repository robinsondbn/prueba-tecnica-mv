import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonModule } from './json/json.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JsonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
