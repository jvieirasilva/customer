import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';
import { DataService } from './data.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  customers$: Customer[];
  users$: User[];
  
  constructor( private dataService: DataService ){}

  ngOnInit() {
    return this.dataService.getCustomers().subscribe(data => {
      this.customers$ = data
     // console.log(data);
    });
  }
}
