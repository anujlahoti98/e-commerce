import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Details1Component } from './details1/details1.component';
import { BuyComponent } from './buy/buy.component';
import { Details2Component } from './details2/details2.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { Details3Component } from './details3/details3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Details1Component,
    BuyComponent,
    Details2Component,
    CartComponent,
    PaymentComponent,
    Details3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
