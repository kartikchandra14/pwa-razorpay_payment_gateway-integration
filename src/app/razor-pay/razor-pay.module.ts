import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RazorPayIntegrationComponent } from './razor-pay-integration/razor-pay-integration.component';
import { RouterModule, Routes } from '@angular/router';
import { PaymentNotCompletedComponent } from './payment-not-completed/payment-not-completed.component';

const routes: Routes = [
  {path: '' , component: RazorPayIntegrationComponent},
  {path:'payment', component: RazorPayIntegrationComponent},
  { path:'paymentNotCompleted', component: PaymentNotCompletedComponent}
]

@NgModule({
  declarations: [
    RazorPayIntegrationComponent,
    PaymentNotCompletedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RazorPayModule { }
