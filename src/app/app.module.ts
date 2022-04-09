import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListviewComponent } from './listview/listview.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { CardviewComponent } from './cardview/cardview.component';
import { LoginComponent } from './login/login.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent,
    CustomerComponent,
    OrdersComponent,
    CardviewComponent,
    LoginComponent,
    EditcustomerComponent,
    NewcustomerComponent,
    AboutComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
