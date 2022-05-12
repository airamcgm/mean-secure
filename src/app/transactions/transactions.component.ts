import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
//import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
//import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: any;
  dashboard: any;
  linkid:any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {


  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

  linkidFunction(data:any){
    this.linkid=data;
    fetch(`/api/transaction/${this.linkid}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((data) => this.transactions=data)
    .catch(error => console.error('Error:', error))
  }

}


