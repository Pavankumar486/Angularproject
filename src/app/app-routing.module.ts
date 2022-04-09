import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ListviewComponent } from './listview/listview.component';
import { OrdersComponent } from './orders/orders.component';
import { CardviewComponent } from './cardview/cardview.component';
import { LoginComponent } from './login/login.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'customer',component:CustomerComponent},
  { path: 'listview',component:ListviewComponent},
  { path: 'orders',component:OrdersComponent},
  { path: 'cardview',component:CardviewComponent},
  { path: 'login',component:LoginComponent},
  { path: 'editcustomer',component:EditcustomerComponent},
  { path: 'newcustomer',component:NewcustomerComponent},
  { path: 'about',component:AboutComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
