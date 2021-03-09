import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { ProfileComponent } from './profile/profile/profile.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
