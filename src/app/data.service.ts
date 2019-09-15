import { Injectable } from '@angular/core';
import { Customer } from './customer.model';


import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //apiUrl = 'https://jsonplaceholder.typicode.com/users';
  apiUrlCustomer = '/api/customer';

  constructor(private _http: HttpClient) {}

    getCustomers(){
      return this._http.get<Customer[]>(this.apiUrlCustomer);
    }

    getUsers(){
       // return this._http.get<User[]>(this.apiUrl);
    }
}
