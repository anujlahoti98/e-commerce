import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';
import { Details1Component } from './details1/details1.component';
import { Details2Component } from './details2/details2.component';
import { Details3Component } from './details3/details3.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'details1',component:Details1Component
  },
  {
    path:'buy',component:BuyComponent
  },
  {
    path:'details2',component:Details2Component
  },
  {
    path:'details3',component:Details3Component
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'payment',component:PaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
