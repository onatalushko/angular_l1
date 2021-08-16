import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from "./composenents/car/car.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  { path: '', component: CarComponent },
  { path: 'contacts', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
