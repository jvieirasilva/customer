import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';


const routes: Routes = [
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-add', component: CustomerAddComponent },
  { path: 'customer-delete', component: CustomerDeleteComponent },
  { path: 'customer-update', component: CustomerUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [CustomerListComponent, CustomerAddComponent, CustomerDeleteComponent, CustomerUpdateComponent]
