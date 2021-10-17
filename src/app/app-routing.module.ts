import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonComponent } from './json/json.component';

const routes: Routes = [
  { path: '', component: JsonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
