import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers$: Customer[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //return this.dataService.getCustomers().subscribe(data => this.customers$ = data);

    return this.dataService.getCustomers()
            .subscribe((res : any[])=>{
              this.customers$ = res;
              console.log(res);
              });
            
  }

}
