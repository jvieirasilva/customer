import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Customer } from '../customer.model';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';
//import {HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

@Injectable() 
export class CustomerListComponent implements OnInit {

  //customers$: Observable<any[]>;
  private page:number=0;
  private pageNumber:number;
  private pageSize:number;
  private customers$:Array<any>;
  private totalPages: number;
  private listTotalPages: Array<any>;
  private last: boolean;
  private first: boolean;
  private limit: any;

  searchCustomers: Observable<any> = new Observable
  existe: boolean = false
  @Output() customerEmit = new EventEmitter<Customer>();
  
  constructor(private dataService: DataService, 
              private activeRouter: ActivatedRoute, 
              private router: Router) { 
    this.activeRouter.queryParams.subscribe(params => {
      this.pageNumber = params['pageNumber'];
      this.pageSize = params['pageSize'];
    })
  }

  ngOnInit() {
    //return this.dataService.getCustomers().subscribe(data => this.customers$ = data);

    // return this.dataService.getCustomers()
    //         .subscribe((res : any[])=>{
    //           this.customers$ = res;
    //           console.log(res);
    //           });
   // this.reloadData();
  }

  // http://localhost:8080/api/customers/?name=T&pageNumber=2&pageSize=20
  reloadData() {
    //this.customers$ = this.dataService.getCustomersList();
    this.dataService.getCustomersList(this.searchCustomers['firstName'], this.pageNumber, this.pageSize)
      .subscribe(
        data=>{ 
            this.customers$=data['content'];    
            console.log('jose1:'+this.customers$); 
            this.createPagination(data['totalPages'])  
            this.last = data['last']
            this.first = data['first']
            console.log('data', data)
        },
        (error)=>{
          console.log('jose2:'+error.error.mensagem);
        }
    )
    //console.log('jose neto:'+ this.customers$);
 
  }

 createPagination(numberPage: number) {
   return this.listTotalPages = Array.from({ length: numberPage }, (__, i) => i + 1)
 }
 
 setPage(page: number): void {
   console.log(page)
   this.pageNumber = page - 1
   this.setQueryParams()
   this.reloadData()
 }

 nextPage() {
  if(!this.last) {
    this.pageNumber++
    this.setQueryParams()
    this.reloadData()
  }
 }

 prevPage() {
  if(!this.first) {
    this.pageNumber--
    this.setQueryParams()
    this.reloadData()
  }
 }

 setQueryParams() {
  this.router.navigate(['customer-list'], {
    queryParams: {
      'pageNumber': this.pageNumber,
      'pageSize': this.pageSize
    }
  })
 }

 changeLimit() {
  if(this.customers$) {
    this.setQueryParams()
    this.reloadData()
  }
 }
}
