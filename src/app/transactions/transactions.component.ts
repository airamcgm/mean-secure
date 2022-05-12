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
    console.log(this.linkid);
    console.log(this.transactions);
    let httpOptions = {
      headers: new HttpHeaders({
        "Authorization" : localStorage.getItem('jwtToken') ?? ""
      })
    };
    this.http.get(`/api/transaction/${this.linkid}`, httpOptions).subscribe(data => {
      this.transactions = data;
      console.log("transaaaactions"+this.transactions);
    }, err => {
      if(err.status === 401) {
        this.router.navigate(['login']);
      }
    });
  }

}
